import mongoose, { Document, Schema } from 'mongoose';

export interface IEmotionAnalysis extends Document {
  userId: mongoose.Types.ObjectId;
  inputText: string;
  detectedEmotion: string;
  advice: string;
  analysisType: 'text' | 'diary';
  createdAt: Date;
  updatedAt: Date;
}

const emotionAnalysisSchema = new Schema<IEmotionAnalysis>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  inputText: {
    type: String,
    required: true,
    maxlength: 2000
  },
  detectedEmotion: {
    type: String,
    required: true,
    enum: ['행복함', '우울함', '스트레스', '설렘', '평온함', '지침', '😀', '😢', '😡', '😍', '😌', '😴']
  },
  advice: {
    type: String,
    required: true,
    maxlength: 1000
  },
  analysisType: {
    type: String,
    enum: ['text', 'diary'],
    required: true
  }
}, {
  timestamps: true
});

// 사용자별 감정 분석 조회를 위한 인덱스
emotionAnalysisSchema.index({ userId: 1, createdAt: -1 });
emotionAnalysisSchema.index({ userId: 1, detectedEmotion: 1 });

export const EmotionAnalysis = mongoose.model<IEmotionAnalysis>('EmotionAnalysis', emotionAnalysisSchema);
