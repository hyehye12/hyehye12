import { Router, Request, Response } from 'express';
import { Diary, Music, EmotionAnalysis } from '../models';
import { auth } from '../middleware/auth';

const router = Router();

// 모든 라우트에 인증 미들웨어 적용
router.use(auth);

// 대시보드 메인 데이터
router.get('/', async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user._id;
    const { period = '7d' } = req.query;

    // 기간 계산
    const now = new Date();
    let startDate = new Date();
    
    switch (period) {
      case '7d':
        startDate.setDate(now.getDate() - 7);
        break;
      case '30d':
        startDate.setDate(now.getDate() - 30);
        break;
      case '90d':
        startDate.setDate(now.getDate() - 90);
        break;
      default:
        startDate.setDate(now.getDate() - 7);
    }

    // 감정별 일기 통계
    const emotionStats = await Diary.aggregate([
      { $match: { userId: userId, createdAt: { $gte: startDate } } },
      { $group: { _id: '$emotion', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);

    // 감정별 음악 통계
    const musicStats = await Music.aggregate([
      { $match: { userId: userId, selectedAt: { $gte: startDate } } },
      { $group: { _id: '$emotion', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);

    // 최근 일기 목록
    const recentDiaries = await Diary.find({ userId })
      .sort({ createdAt: -1 })
      .limit(5)
      .select('content emotion createdAt');

    // 최근 음악 선택
    const recentMusic = await Music.find({ userId })
      .sort({ selectedAt: -1 })
      .limit(5)
      .select('trackName artistName emotion selectedAt');

    // 월별 감정 변화
    const monthlyEmotions = await Diary.aggregate([
      { $match: { userId: userId, createdAt: { $gte: startDate } } },
      {
        $group: {
          _id: {
            year: { $year: '$createdAt' },
            month: { $month: '$createdAt' },
            emotion: '$emotion'
          },
          count: { $sum: 1 }
        }
      },
      { $sort: { '_id.year': 1, '_id.month': 1 } }
    ]);

    // 감정 분석 통계
    const analysisStats = await EmotionAnalysis.aggregate([
      { $match: { userId: userId, createdAt: { $gte: startDate } } },
      { $group: { _id: '$analysisType', count: { $sum: 1 } } }
    ]);

    res.json({
      period,
      startDate,
      endDate: now,
      stats: {
        emotions: emotionStats,
        music: musicStats,
        analysis: analysisStats
      },
      recent: {
        diaries: recentDiaries,
        music: recentMusic
      },
      trends: {
        monthlyEmotions
      }
    });
  } catch (error) {
    console.error('대시보드 데이터 조회 오류:', error);
    res.status(500).json({ error: '대시보드 데이터 조회에 실패했습니다.' });
  }
});

// 감정 분석 히스토리
router.get('/emotion-history', async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user._id;
    const { page = 1, limit = 20, type } = req.query;

    const skip = (Number(page) - 1) * Number(limit);
    const filter: any = { userId };

    if (type) {
      filter.analysisType = type;
    }

    const analyses = await EmotionAnalysis.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit));

    const total = await EmotionAnalysis.countDocuments(filter);

    res.json({
      analyses,
      pagination: {
        currentPage: Number(page),
        totalPages: Math.ceil(total / Number(limit)),
        total,
        hasNext: skip + analyses.length < total,
        hasPrev: Number(page) > 1
      }
    });
  } catch (error) {
    console.error('감정 분석 히스토리 조회 오류:', error);
    res.status(500).json({ error: '감정 분석 히스토리 조회에 실패했습니다.' });
  }
});

// 감정별 상세 통계
router.get('/emotion-details/:emotion', async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user._id;
    const { emotion } = req.params;
    const { period = '30d' } = req.query;

    // 기간 계산
    const now = new Date();
    let startDate = new Date();
    
    switch (period) {
      case '7d':
        startDate.setDate(now.getDate() - 7);
        break;
      case '30d':
        startDate.setDate(now.getDate() - 30);
        break;
      case '90d':
        startDate.setDate(now.getDate() - 90);
        break;
      default:
        startDate.setDate(now.getDate() - 30);
    }

    // 해당 감정의 일기 목록
    const diaries = await Diary.find({
      userId,
      emotion,
      createdAt: { $gte: startDate }
    }).sort({ createdAt: -1 });

    // 해당 감정의 음악 목록
    const music = await Music.find({
      userId,
      emotion,
      selectedAt: { $gte: startDate }
    }).sort({ selectedAt: -1 });

    // 해당 감정의 분석 기록
    const analyses = await EmotionAnalysis.find({
      userId,
      detectedEmotion: emotion,
      createdAt: { $gte: startDate }
    }).sort({ createdAt: -1 });

    res.json({
      emotion,
      period,
      startDate,
      endDate: now,
      summary: {
        diaryCount: diaries.length,
        musicCount: music.length,
        analysisCount: analyses.length
      },
      diaries,
      music,
      analyses
    });
  } catch (error) {
    console.error('감정별 상세 통계 조회 오류:', error);
    res.status(500).json({ error: '감정별 상세 통계 조회에 실패했습니다.' });
  }
});

export default router;
