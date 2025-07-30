// 일기 텍스트를 임시로 저장하는 스토어
class DiaryStore {
  private diaryText: string = '';

  setDiaryText(text: string) {
    this.diaryText = text;
  }

  getDiaryText(): string {
    return this.diaryText;
  }

  clearDiaryText() {
    this.diaryText = '';
  }
}

export const diaryStore = new DiaryStore(); 