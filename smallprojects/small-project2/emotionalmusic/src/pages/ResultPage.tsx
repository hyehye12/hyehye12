import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useMusicSearch } from "../hooks/useMusicSearch";
import { getEmotionDescription } from "../utils/emotionAnalyzer";
import { handleApiResponse, safeJsonParse } from "../utils/apiUtils";

import LoadingSpinner from "../components/LoadingSpinner";

export default function ResultPage() {
  const { emotion } = useParams<{ emotion: string }>();
  const navigate = useNavigate();
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(
    null
  );
  const [showAllTracks, setShowAllTracks] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isSelectingTodaySong, setIsSelectingTodaySong] = useState(false);
  const [todaySongSelected, setTodaySongSelected] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { tracks, loading, error, searchTracks } = useMusicSearch(
    emotion || ""
  );


  const handleBack = () => {
    if (currentAudio) {
      currentAudio.pause();
      setCurrentAudio(null);
      setIsPlaying(false);
    }
    navigate("/");
  };

  const handlePlayPause = () => {
    const currentTrack = tracks[currentTrackIndex];
    if (!currentTrack?.previewUrl) {
      alert("이 트랙은 미리듣기를 지원하지 않습니다.");
      return;
    }

    if (isPlaying && currentAudio) {
      currentAudio.pause();
      setIsPlaying(false);
    } else {
      // 기존 오디오 정리
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.removeEventListener("ended", handleAudioEnd);
      }

      // 새 오디오 생성
      const newAudio = new Audio(currentTrack.previewUrl);
      newAudio.addEventListener("ended", handleAudioEnd);
      newAudio.addEventListener("error", () => {
        alert("오디오 로드에 실패했습니다.");
        setIsPlaying(false);
      });

      newAudio.play().catch(() => {
        alert("오디오 재생에 실패했습니다.");
        setIsPlaying(false);
      });

      setCurrentAudio(newAudio);
      setIsPlaying(true);
    }
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
    setCurrentAudio(null);
  };

  const handleTrackClick = (index: number) => {
    // 현재 재생중인 오디오 정지
    if (currentAudio) {
      currentAudio.pause();
      setCurrentAudio(null);
      setIsPlaying(false);
    }
    setCurrentTrackIndex(index);
  };

  const handlePreviousTrack = () => {
    const newIndex = Math.max(0, currentTrackIndex - 1);
    if (newIndex !== currentTrackIndex) {
      // 현재 오디오 정지
      if (currentAudio) {
        currentAudio.pause();
        setCurrentAudio(null);
        setIsPlaying(false);
      }
      setCurrentTrackIndex(newIndex);
      // 새 트랙 자동 재생
      setTimeout(() => {
        playTrack(newIndex);
      }, 100);
    }
  };

  const handleNextTrack = () => {
    const newIndex = Math.min(tracks.length - 1, currentTrackIndex + 1);
    if (newIndex !== currentTrackIndex) {
      // 현재 오디오 정지
      if (currentAudio) {
        currentAudio.pause();
        setCurrentAudio(null);
        setIsPlaying(false);
      }
      setCurrentTrackIndex(newIndex);
      // 새 트랙 자동 재생
      setTimeout(() => {
        playTrack(newIndex);
      }, 100);
    }
  };

  const playTrack = (index: number) => {
    const track = tracks[index];
    if (!track?.previewUrl) {
      alert("이 트랙은 미리듣기를 지원하지 않습니다.");
      return;
    }

    // 기존 오디오 정리
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.removeEventListener("ended", handleAudioEnd);
    }

    // 새 오디오 생성
    const newAudio = new Audio(track.previewUrl);
    newAudio.addEventListener("ended", handleAudioEnd);
    newAudio.addEventListener("error", () => {
      alert("오디오 로드에 실패했습니다.");
      setIsPlaying(false);
    });

    newAudio.play().catch(() => {
      alert("오디오 재생에 실패했습니다.");
      setIsPlaying(false);
    });

    setCurrentAudio(newAudio);
    setIsPlaying(true);
  };

  const handleSaveTrack = async () => {
    const currentTrack = tracks[currentTrackIndex];
    if (!currentTrack) return;

    setIsSaving(true);
    try {
      const response = await fetch("/api/music/recommendations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          emotion: emotion,
          track_name: currentTrack.trackName,
          artist_name: currentTrack.artistName,
          album_name: currentTrack.collectionName,
          preview_url: currentTrack.previewUrl,
          artwork_url: currentTrack.artworkUrl100,
        }),
      });

      if (response.ok) {
        alert("트랙이 성공적으로 저장되었습니다! 🎵");
      } else {
        if (response.status === 401) {
          const shouldLogin = window.confirm(
            "로그인이 필요한 기능입니다. 로그인 페이지로 이동하시겠습니까?"
          );
          if (shouldLogin) {
            navigate("/auth");
          }
        } else {
          try {
            const errorData = await safeJsonParse(response);
            alert(errorData.error || "저장에 실패했습니다.");
          } catch (parseError) {
            alert(`저장에 실패했습니다. (${response.status})`);
          }
        }
      }
    } catch (error) {
      console.error("Save error:", error);
      alert("저장 중 오류가 발생했습니다.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleSelectTodaySong = async () => {
    const currentTrack = tracks[currentTrackIndex];
    if (!currentTrack) return;

    setIsSelectingTodaySong(true);
    try {
      // 저장된 데이터가 있는지 확인 (예: localStorage 또는 세션에서 AI 분석 결과 가져오기)
      const analysisData = JSON.parse(
        sessionStorage.getItem("recentAnalysis") || "{}"
      );

      if (!analysisData.diaryContent || !analysisData.emotion) {
        alert("일기 분석 데이터를 찾을 수 없습니다. 다시 일기를 작성해주세요.");
        return;
      }

      const response = await fetch("/api/daily-entries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          diary_content: analysisData.diaryContent,
          detected_emotion: emotion || analysisData.emotion,
          selected_track_name: currentTrack.trackName,
          selected_artist_name: currentTrack.artistName,
          selected_album_name: currentTrack.collectionName,
          selected_preview_url: currentTrack.previewUrl,
          selected_artwork_url: currentTrack.artworkUrl100,
          selected_track_view_url: currentTrack.trackViewUrl,
          ai_analysis: analysisData.analysis,
          ai_advice: analysisData.advice,
          ai_encouragement: analysisData.encouragement,
        }),
      });

      if (response.ok) {
        setTodaySongSelected(true);
        alert(
          "오늘의 곡이 선택되었습니다! 🎆\n대시보드에서 오늘의 일기와 함께 확인할 수 있습니다."
        );
        // 세션 저장된 분석 데이터 제거
        sessionStorage.removeItem("recentAnalysis");
      } else {
        if (response.status === 401) {
          const shouldLogin = window.confirm(
            "로그인이 필요한 기능입니다. 로그인 페이지로 이동하시겠습니까?"
          );
          if (shouldLogin) {
            navigate("/auth");
          }
        } else {
          try {
            const errorData = await safeJsonParse(response);
            alert(errorData.error || "오늘의 곡 선택에 실패했습니다.");
          } catch (parseError) {
            alert(`오늘의 곡 선택에 실패했습니다. (${response.status})`);
          }
        }
      }
    } catch (error) {
      console.error("Today song selection error:", error);
      alert("오늘의 곡 선택 중 오류가 발생했습니다.");
    } finally {
      setIsSelectingTodaySong(false);
    }
  };

  const handleOpenItunes = () => {
    const currentTrack = tracks[currentTrackIndex];
    if (currentTrack?.trackViewUrl) {
      window.open(currentTrack.trackViewUrl, "_blank");
    } else {
      alert("iTunes 링크를 찾을 수 없습니다.");
    }
  };

  const handleGoToDashboard = () => {
    // 현재 재생 중인 오디오 정지
    if (currentAudio) {
      currentAudio.pause();
      setCurrentAudio(null);
      setIsPlaying(false);
    }
    navigate("/dashboard");
  };

  const handleShowMore = () => {
    setShowAllTracks(true);
  };

  // 컴포넌트 언마운트 시 오디오 정리
  useEffect(() => {
    return () => {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.removeEventListener("ended", handleAudioEnd);
      }
    };
  }, [currentAudio]);

  if (!emotion) {
    return <Navigate to="/" replace />;
  }

  if (loading) {
    return <LoadingSpinner emotion={emotion} />;
  }

  if (error) {
    return (
      <div className="relative flex items-center justify-center min-h-screen p-8 overflow-hidden font-sans bg-gradient-to-br from-white via-blue-50/30 to-blue-100/50">
        <div className="w-full max-w-lg p-12 text-center modern-card">
          <div className="mb-8 text-6xl">❌</div>
          <h2 className="mb-6 text-2xl font-semibold text-gray-900">
            문제가 발생했습니다
          </h2>
          <p className="mb-8 text-gray-600">{error}</p>
          <button
            onClick={handleBack}
            className="px-8 py-3 font-medium soft-button rounded-xl"
          >
            다시 시도
          </button>
        </div>
      </div>
    );
  }


  return (
    <div className="relative min-h-screen overflow-hidden font-sans bg-gradient-to-br from-white via-blue-50/30 to-blue-100/50">
      {/* Organic curved background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute h-64 transform rounded-full top-20 left-20 w-96 bg-gradient-to-br from-blue-200 to-blue-300 rotate-12 blur-3xl"></div>
        <div className="absolute h-48 transform rounded-full bottom-20 right-20 w-72 bg-gradient-to-br from-blue-100 to-blue-200 -rotate-6 blur-2xl"></div>
        <div className="absolute w-64 h-40 transform rotate-45 rounded-full top-60 left-1/2 bg-gradient-to-br from-blue-300 to-blue-400 blur-3xl"></div>
      </div>

      {/* Main Layout Container */}
      <div className="px-8 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid min-h-screen grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left Side - Music Player Section */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <div className="p-8 mb-8 modern-card">
                {/* Currently Playing Track */}
                <div className="mb-8 text-center">
                  <div className="relative mx-auto mb-6 vinyl-record">
                    {tracks.length > 0 && (
                      <img
                        src={
                          tracks[currentTrackIndex]?.artworkUrl100?.replace(
                            "100x100",
                            "300x300"
                          ) || "/default-album.jpg"
                        }
                        alt={
                          tracks[currentTrackIndex]?.trackName ||
                          "Album artwork"
                        }
                        className="absolute inset-4 rounded-full object-cover w-[168px] h-[168px]"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "/default-album.jpg";
                        }}
                      />
                    )}
                  </div>

                  {tracks.length > 0 && (
                    <div>
                      <h2 className="mb-2 text-3xl font-bold text-gray-900">
                        {tracks[currentTrackIndex]?.trackName || "Addict"}
                      </h2>
                      <p className="mb-4 text-xl text-gray-600">
                        {tracks[currentTrackIndex]?.artistName || "Silva Hound"}
                      </p>

                      {/* Play Controls */}
                      <div className="flex items-center justify-center mb-6 space-x-4">
                        <button
                          onClick={handlePreviousTrack}
                          className="flex items-center justify-center w-12 h-12 transition-all rounded-full glass-effect hover:soft-glow disabled:opacity-50"
                          disabled={currentTrackIndex === 0}
                        >
                          ⏮️
                        </button>
                        <button
                          onClick={handlePlayPause}
                          className="flex items-center justify-center w-16 h-16 text-2xl transition-transform rounded-full soft-button hover:scale-105"
                        >
                          {isPlaying ? "⏸️" : "▶️"}
                        </button>
                        <button
                          onClick={handleNextTrack}
                          className="flex items-center justify-center w-12 h-12 transition-all rounded-full glass-effect hover:soft-glow disabled:opacity-50"
                          disabled={currentTrackIndex === tracks.length - 1}
                        >
                          ⏭️
                        </button>
                      </div>

                      {/* Save Option */}
                      <p className="mb-4 text-gray-600">
                        이 트랙을 저장하시겠어요?
                      </p>
                      <div className="flex space-x-3">
                        <button
                          onClick={handleOpenItunes}
                          className="px-6 py-2 transition-transform rounded-full soft-button hover:scale-105"
                        >
                          🎵 iTunes에서 보기
                        </button>
                        <button
                          onClick={handleSaveTrack}
                          disabled={isSaving}
                          className="px-6 py-2 transition-transform rounded-full soft-button hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSaving ? "저장 중..." : "💾 저장"}
                        </button>
                        <button
                          onClick={handleSelectTodaySong}
                          disabled={isSelectingTodaySong || todaySongSelected}
                          className="px-6 py-2 text-white transition-all rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSelectingTodaySong
                            ? "선택 중..."
                            : todaySongSelected
                            ? "✓ 오늘의 곡 선택됨"
                            : "🌟 오늘의 곡으로 선택"}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Emotion Info */}
              <div className="p-6 modern-card">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  감정 분석
                </h3>
                <div className="p-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl">
                  <p className="font-medium text-gray-800">"{emotion}"</p>
                  <p className="mt-2 text-sm text-gray-600">
                    {getEmotionDescription(emotion, "")}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Playlist Section */}
            <div>
              <div className="p-6 mb-8 modern-card">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    추천 트랙
                  </h2>
                </div>

                <div className="space-y-4">
                  {(showAllTracks ? tracks : tracks.slice(0, 4)).map(
                    (track, index) => (
                      <div
                        key={track.trackId}
                        className={`flex items-center space-x-4 p-3 rounded-xl hover:bg-white/50 transition-all cursor-pointer ${
                          index === currentTrackIndex
                            ? "bg-blue-50 border border-blue-200"
                            : ""
                        }`}
                        onClick={() => handleTrackClick(index)}
                      >
                        <img
                          src={track.artworkUrl100 || "/default-album.jpg"}
                          alt={track.trackName}
                          className="object-cover w-12 h-12 rounded-lg"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "/default-album.jpg";
                          }}
                        />
                        <div
                          className="flex-1"
                          onClick={() =>
                            window.open(track.trackViewUrl, "_blank")
                          }
                        >
                          <h4 className="font-medium text-gray-900 truncate transition-colors hover:text-blue-600">
                            {track.trackName}
                          </h4>
                          <p className="text-sm text-gray-600 truncate">
                            {track.artistName}
                          </p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (track.previewUrl) {
                              const audio = new Audio(track.previewUrl);
                              audio
                                .play()
                                .catch(() =>
                                  alert("미리듣기를 재생할 수 없습니다.")
                                );
                            } else {
                              alert("이 트랙은 미리듣기를 지원하지 않습니다.");
                            }
                          }}
                          className="flex items-center justify-center w-8 h-8 transition-all rounded-full glass-effect hover:soft-glow"
                        >
                          ▶️
                        </button>
                      </div>
                    )
                  )}
                </div>

                {tracks.length > 4 && !showAllTracks && (
                  <div className="pt-4 mt-4 border-t border-gray-200">
                    <button
                      onClick={handleShowMore}
                      className="w-full py-2 text-sm font-medium text-center text-blue-600 transition-colors hover:text-blue-800"
                    >
                      +{tracks.length - 4} 개 더 많은 트랙 보기
                    </button>
                  </div>
                )}
                {showAllTracks && (
                  <div className="pt-4 mt-4 border-t border-gray-200">
                    <button
                      onClick={() => setShowAllTracks(false)}
                      className="w-full py-2 text-sm font-medium text-center text-gray-600 transition-colors hover:text-gray-800"
                    >
                      접기
                    </button>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button
                  onClick={() => {
                    // 현재 재생 중인 오디오 정지
                    if (currentAudio) {
                      currentAudio.pause();
                      setCurrentAudio(null);
                      setIsPlaying(false);
                    }
                    // 트랙 인덱스 초기화 및 새 추천 가져오기
                    setCurrentTrackIndex(0);
                    setShowAllTracks(false);
                    searchTracks();
                  }}
                  className="w-full py-3 font-medium soft-button rounded-xl"
                >
                  🔄 다른 추천가져오기
                </button>
                <button
                  onClick={() => navigate("/")}
                  className="w-full py-3 font-medium text-gray-700 transition-all glass-effect rounded-xl hover:soft-glow"
                >
                  🤖 새로운 AI 분석
                </button>
                <button
                  onClick={handleGoToDashboard}
                  className="w-full py-3 font-medium text-white transition-all bg-gradient-to-r from-sky-400 to-sky-500 rounded-xl hover:from-sky-500 hover:to-sky-600"
                >
                  📊 대시보드 보기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
