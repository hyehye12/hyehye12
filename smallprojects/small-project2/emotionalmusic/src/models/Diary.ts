import mongoose, { Document, Schema } from 'mongoose';

export interface IDiary extends Document {
  userId: mongoose.Types.ObjectId;
  content: string;
  emotion: string;
  analysis: string;
  advice: string;
  encouragement: string;
  createdAt: Date;
  updatedAt: Date;
}

const diarySchema = new Schema<IDiary>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true,
    maxlength: 2000
  },
  emotion: {
    type: String,
    required: true,
    enum: ['행복함', '우울함', '스트레스', '설렘', '평온함', '지침', '😀', '😢', '😡', '😍', '😌', '😴']
  },
  analysis: {
    type: String,
    required: true,
    maxlength: 1000
  },
  advice: {
    type: String,
    required: true,
    maxlength: 1000
  },
  encouragement: {
    type: String,
    required: true,
    maxlength: 500
  }
}, {
  timestamps: true
});

// 사용자별 일기 조회를 위한 인덱스
diarySchema.index({ userId: 1, createdAt: -1 });

export const Diary = mongoose.model<IDiary>('Diary', diarySchema);
