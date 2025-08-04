const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export interface EmotionTrack {
  id: string;
  name: string;
  artist: string;
  album: string;
  imageUrl: string;
  spotifyUrl: string;
  emotion: string;
}

export interface GPTAnalysisResult {
  emotion: string;
  analysis: string;
  advice: string;
  encouragement: string;
}

export interface EmotionAdviceResult {
  emotion: string;
  advice: string;
}

export interface SpotifyTrack {
  id: string;
  name: string;
  artists: Array<{ name: string }>;
  album: {
    name: string;
    images: Array<{ url: string }>;
  };
  external_urls: {
    spotify: string;
  };
  preview_url?: string;
}

class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  // GPT API - 감정 조언
  async getEmotionAdvice(userInput: string): Promise<EmotionAdviceResult> {
    return this.request<EmotionAdviceResult>('/gpt/emotion-advice', {
      method: 'POST',
      body: JSON.stringify({ userInput }),
    });
  }

  // GPT API - 일기 분석
  async analyzeDiary(diaryText: string): Promise<GPTAnalysisResult> {
    return this.request<GPTAnalysisResult>('/gpt/analyze-diary', {
      method: 'POST',
      body: JSON.stringify({ diaryText }),
    });
  }

  // Spotify API - 감정별 음악 검색
  async searchSpotifyTracks(emotion: string, limit: number = 9): Promise<SpotifyTrack[]> {
    return this.request<SpotifyTrack[]>(`/spotify/search/${encodeURIComponent(emotion)}?limit=${limit}`);
  }

  // 헬스 체크
  async healthCheck(): Promise<{ status: string; message: string; apis: { openai: boolean; spotify: boolean } }> {
    return this.request<{ status: string; message: string; apis: { openai: boolean; spotify: boolean } }>('/health');
  }
}

export const apiService = new ApiService();
export default apiService; 