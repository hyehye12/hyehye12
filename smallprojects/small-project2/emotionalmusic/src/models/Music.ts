import mongoose, { Document, Schema } from 'mongoose';

export interface IMusic extends Document {
  userId: mongoose.Types.ObjectId;
  trackId: string;
  trackName: string;
  artistName: string;
  albumName: string;
  albumImage: string;
  previewUrl: string;
  emotion: string;
  selectedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const musicSchema = new Schema<IMusic>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  trackId: {
    type: String,
    required: true
  },
  trackName: {
    type: String,
    required: true,
    maxlength: 200
  },
  artistName: {
    type: String,
    required: true,
    maxlength: 200
  },
  albumName: {
    type: String,
    required: true,
    maxlength: 200
  },
  albumImage: {
    type: String,
    required: true
  },
  previewUrl: {
    type: String
  },
  emotion: {
    type: String,
    required: true,
    enum: ['행복함', '우울함', '스트레스', '설렘', '평온함', '지침', '😀', '😢', '😡', '😍', '😌', '😴']
  },
  selectedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// 사용자별 음악 선택 조회를 위한 인덱스
musicSchema.index({ userId: 1, selectedAt: -1 });
musicSchema.index({ userId: 1, emotion: 1 });

export const Music = mongoose.model<IMusic>('Music', musicSchema);
