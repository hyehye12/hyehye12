import { Router, Request, Response } from 'express';
import { Music } from '../models';
import { auth } from '../middleware/auth';

const router = Router();

// 모든 라우트에 인증 미들웨어 적용
router.use(auth);

// 음악 선택 저장
router.post('/', async (req: Request, res: Response) => {
  try {
    const { trackId, trackName, artistName, albumName, albumImage, previewUrl, emotion } = req.body;
    const userId = (req as any).user._id;

    if (!trackId || !trackName || !artistName || !emotion) {
      return res.status(400).json({ error: '필수 정보가 누락되었습니다.' });
    }

    // 이미 선택된 음악인지 확인
    const existingMusic = await Music.findOne({ userId, trackId });
    if (existingMusic) {
      return res.status(400).json({ error: '이미 선택한 음악입니다.' });
    }

    // 음악 저장
    const music = new Music({
      userId,
      trackId,
      trackName,
      artistName,
      albumName,
      albumImage,
      previewUrl,
      emotion
    });

    await music.save();

    res.status(201).json({
      message: '음악이 저장되었습니다.',
      music
    });
  } catch (error) {
    console.error('음악 저장 오류:', error);
    res.status(500).json({ error: '음악 저장에 실패했습니다.' });
  }
});

// 사용자의 모든 음악 조회
router.get('/', async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user._id;
    const { page = 1, limit = 20, emotion } = req.query;

    const skip = (Number(page) - 1) * Number(limit);
    const filter: any = { userId };

    if (emotion) {
      filter.emotion = emotion;
    }

    const musicList = await Music.find(filter)
      .sort({ selectedAt: -1 })
      .skip(skip)
      .limit(Number(limit));

    const total = await Music.countDocuments(filter);

    res.json({
      musicList,
      pagination: {
        currentPage: Number(page),
        totalPages: Math.ceil(total / Number(limit)),
        total,
        hasNext: skip + musicList.length < total,
        hasPrev: Number(page) > 1
      }
    });
  } catch (error) {
    console.error('음악 조회 오류:', error);
    res.status(500).json({ error: '음악 조회에 실패했습니다.' });
  }
});

// 특정 음악 조회
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = (req as any).user._id;

    const music = await Music.findOne({ _id: id, userId });

    if (!music) {
      return res.status(404).json({ error: '음악을 찾을 수 없습니다.' });
    }

    res.json({ music });
  } catch (error) {
    console.error('음악 조회 오류:', error);
    res.status(500).json({ error: '음악 조회에 실패했습니다.' });
  }
});

// 음악 삭제
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = (req as any).user._id;

    const music = await Music.findOne({ _id: id, userId });

    if (!music) {
      return res.status(404).json({ error: '음악을 찾을 수 없습니다.' });
    }

    await Music.findByIdAndDelete(id);

    res.json({ message: '음악이 삭제되었습니다.' });
  } catch (error) {
    console.error('음악 삭제 오류:', error);
    res.status(500).json({ error: '음악 삭제에 실패했습니다.' });
  }
});

// 감정별 음악 통계
router.get('/stats/emotions', async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user._id;

    const emotionStats = await Music.aggregate([
      { $match: { userId: userId } },
      { $group: { _id: '$emotion', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);

    res.json({ emotionStats });
  } catch (error) {
    console.error('감정별 음악 통계 오류:', error);
    res.status(500).json({ error: '통계 조회에 실패했습니다.' });
  }
});

export default router;
