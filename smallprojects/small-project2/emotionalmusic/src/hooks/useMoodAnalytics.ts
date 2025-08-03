import { useState, useEffect, useCallback } from 'react';
import { MoodService, MoodData } from '../services/authService';

export const useMoodAnalytics = () => {
  const [weeklyData, setWeeklyData] = useState<MoodData[]>([]);
  const [monthlyData, setMonthlyData] = useState<MoodData[]>([]);
  const [loading, setLoading] = useState(true);

  const loadMoodData = useCallback(() => {
    try {
      setLoading(true);
      const weekly = MoodService.getWeeklyMoodData();
      const monthly = MoodService.getMonthlyMoodData();
      
      setWeeklyData(weekly);
      setMonthlyData(monthly);
    } catch (error) {
      console.error('기분 데이터 로드 오류:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const saveMoodData = useCallback(async (emotion: string, score: number) => {
    try {
      await MoodService.saveMoodData({ emotion, score });
      loadMoodData(); // 데이터 새로고침
    } catch (error) {
      console.error('기분 데이터 저장 오류:', error);
      throw error;
    }
  }, [loadMoodData]);

  useEffect(() => {
    loadMoodData();
  }, [loadMoodData]);

  // 감정별 통계 계산
  const getEmotionStats = useCallback(() => {
    const allData = [...weeklyData, ...monthlyData];
    const emotionCount: { [key: string]: number } = {};
    
    allData.forEach(data => {
      emotionCount[data.emotion] = (emotionCount[data.emotion] || 0) + 1;
    });

    return emotionCount;
  }, [weeklyData, monthlyData]);

  // 평균 기분 점수 계산
  const getAverageMoodScore = useCallback(() => {
    const allData = [...weeklyData, ...monthlyData];
    if (allData.length === 0) return 0;
    
    const totalScore = allData.reduce((sum, data) => sum + data.score, 0);
    return Math.round((totalScore / allData.length) * 10) / 10;
  }, [weeklyData, monthlyData]);

  // 가장 많이 나타난 감정
  const getMostFrequentEmotion = useCallback(() => {
    const stats = getEmotionStats();
    if (Object.keys(stats).length === 0) return null;
    
    return Object.entries(stats).reduce((max, [emotion, count]) => 
      count > max.count ? { emotion, count } : max
    , { emotion: '', count: 0 });
  }, [getEmotionStats]);

  return {
    weeklyData,
    monthlyData,
    loading,
    saveMoodData,
    getEmotionStats,
    getAverageMoodScore,
    getMostFrequentEmotion,
    refreshData: loadMoodData
  };
}; 