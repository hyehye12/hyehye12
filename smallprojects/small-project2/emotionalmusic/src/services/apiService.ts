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

// 새로운 인터페이스들
export interface User {
  id: string;
  email: string;
  username: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  message: string;
  token: string;
  user: User;
}

export interface Diary {
  id: string;
  userId: string;
  content: string;
  emotion: string;
  analysis: string;
  advice: string;
  encouragement: string;
  createdAt: string;
  updatedAt: string;
}

export interface Music {
  id: string;
  userId: string;
  trackId: string;
  trackName: string;
  artistName: string;
  albumName: string;
  albumImage: string;
  previewUrl?: string;
  emotion: string;
  selectedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface EmotionAnalysis {
  id: string;
  userId: string;
  inputText: string;
  detectedEmotion: string;
  advice: string;
  analysisType: 'text' | 'diary';
  createdAt: string;
  updatedAt: string;
}

export interface DashboardData {
  period: string;
  startDate: string;
  endDate: string;
  stats: {
    emotions: Array<{ _id: string; count: number }>;
    music: Array<{ _id: string; count: number }>;
    analysis: Array<{ _id: string; count: number }>;
  };
  recent: {
    diaries: Diary[];
    music: Music[];
  };
  trends: {
    monthlyEmotions: Array<{
      _id: { year: number; month: number; emotion: string };
      count: number;
    }>;
  };
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    currentPage: number;
    totalPages: number;
    total: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

class ApiService {
  private baseUrl: string;
  private token: string | null = null;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
    // 로컬 스토리지에서 토큰 복원
    this.token = localStorage.getItem('authToken');
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('authToken', token);
  }

  clearToken() {
    this.token = null;
    localStorage.removeItem('authToken');
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string>),
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    const response = await fetch(url, {
      headers,
      ...options,
    });

    if (!response.ok) {
      if (response.status === 401) {
        this.clearToken();
        throw new Error('인증이 만료되었습니다. 다시 로그인해주세요.');
      }
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  // 인증 관련 API
  async register(email: string, password: string, username: string): Promise<AuthResponse> {
    const response = await this.request<AuthResponse>('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, username }),
    });
    if (response.token) {
      this.setToken(response.token);
    }
    return response;
  }

  async login(email: string, password: string): Promise<AuthResponse> {
    const response = await this.request<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    if (response.token) {
      this.setToken(response.token);
    }
    return response;
  }

  async getCurrentUser(): Promise<{ user: User }> {
    return this.request<{ user: User }>('/auth/me');
  }

  // 일기 관련 API
  async createDiary(diaryData: Partial<Diary>): Promise<{ message: string; diary: Diary }> {
    return this.request<{ message: string; diary: Diary }>('/diary', {
      method: 'POST',
      body: JSON.stringify(diaryData),
    });
  }

  async getDiaries(page: number = 1, limit: number = 10): Promise<PaginatedResponse<Diary>> {
    return this.request<PaginatedResponse<Diary>>(`/diary?page=${page}&limit=${limit}`);
  }

  async getDiary(id: string): Promise<{ diary: Diary }> {
    return this.request<{ diary: Diary }>(`/diary/${id}`);
  }

  async updateDiary(id: string, diaryData: Partial<Diary>): Promise<{ message: string; diary: Diary }> {
    return this.request<{ message: string; diary: Diary }>(`/diary/${id}`, {
      method: 'PUT',
      body: JSON.stringify(diaryData),
    });
  }

  async deleteDiary(id: string): Promise<{ message: string }> {
    return this.request<{ message: string }>(`/diary/${id}`, {
      method: 'DELETE',
    });
  }

  // 음악 관련 API
  async saveMusic(musicData: Partial<Music>): Promise<{ message: string; music: Music }> {
    return this.request<{ message: string; music: Music }>('/music', {
      method: 'POST',
      body: JSON.stringify(musicData),
    });
  }

  async getMusicList(page: number = 1, limit: number = 20, emotion?: string): Promise<PaginatedResponse<Music>> {
    let url = `/music?page=${page}&limit=${limit}`;
    if (emotion) {
      url += `&emotion=${encodeURIComponent(emotion)}`;
    }
    return this.request<PaginatedResponse<Music>>(url);
  }

  async getMusic(id: string): Promise<{ music: Music }> {
    return this.request<{ music: Music }>(`/music/${id}`);
  }

  async deleteMusic(id: string): Promise<{ message: string }> {
    return this.request<{ message: string }>(`/music/${id}`, {
      method: 'DELETE',
    });
  }

  async getMusicEmotionStats(): Promise<{ emotionStats: Array<{ _id: string; count: number }> }> {
    return this.request<{ emotionStats: Array<{ _id: string; count: number }> }>('/music/stats/emotions');
  }

  // 대시보드 관련 API
  async getDashboardData(period: string = '7d'): Promise<DashboardData> {
    return this.request<DashboardData>(`/dashboard?period=${period}`);
  }

  async getEmotionHistory(page: number = 1, limit: number = 20, type?: string): Promise<PaginatedResponse<EmotionAnalysis>> {
    let url = `/dashboard/emotion-history?page=${page}&limit=${limit}`;
    if (type) {
      url += `&type=${type}`;
    }
    return this.request<PaginatedResponse<EmotionAnalysis>>(url);
  }

  async getEmotionDetails(emotion: string, period: string = '30d'): Promise<{
    emotion: string;
    period: string;
    startDate: string;
    endDate: string;
    summary: { diaryCount: number; musicCount: number; analysisCount: number };
    diaries: Diary[];
    music: Music[];
    analyses: EmotionAnalysis[];
  }> {
    return this.request(`/dashboard/emotion-details/${encodeURIComponent(emotion)}?period=${period}`);
  }

  // 기존 API들 (사용자 ID 추가)
  async getEmotionAdvice(userInput: string, userId?: string): Promise<EmotionAdviceResult> {
    return this.request<EmotionAdviceResult>('/gpt/emotion-advice', {
      method: 'POST',
      body: JSON.stringify({ userInput, userId }),
    });
  }

  async analyzeDiary(diaryText: string, userId?: string): Promise<GPTAnalysisResult> {
    return this.request<GPTAnalysisResult>('/gpt/analyze-diary', {
      method: 'POST',
      body: JSON.stringify({ diaryText, userId }),
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