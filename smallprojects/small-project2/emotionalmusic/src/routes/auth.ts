import { Router, Request, Response } from 'express';
import { User } from '../models';
import { generateToken } from '../middleware/auth';

const router = Router();

// 회원가입
router.post('/register', async (req: Request, res: Response) => {
  try {
    const { email, password, username } = req.body;

    // 필수 필드 검증
    if (!email || !password || !username) {
      return res.status(400).json({ error: '모든 필드를 입력해주세요.' });
    }

    // 이메일 중복 확인
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: '이미 존재하는 이메일입니다.' });
    }

    // 사용자 생성
    const user = new User({
      email,
      password,
      username
    });

    await user.save();

    // 토큰 생성
    const token = generateToken(user._id);

    res.status(201).json({
      message: '회원가입이 완료되었습니다.',
      token,
      user: {
        id: user._id,
        email: user.email,
        username: user.username
      }
    });
  } catch (error) {
    console.error('회원가입 오류:', error);
    res.status(500).json({ error: '회원가입에 실패했습니다.' });
  }
});

// 로그인
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // 필수 필드 검증
    if (!email || !password) {
      return res.status(400).json({ error: '이메일과 비밀번호를 입력해주세요.' });
    }

    // 사용자 찾기
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: '이메일 또는 비밀번호가 올바르지 않습니다.' });
    }

    // 비밀번호 확인
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ error: '이메일 또는 비밀번호가 올바르지 않습니다.' });
    }

    // 토큰 생성
    const token = generateToken(user._id);

    res.json({
      message: '로그인이 완료되었습니다.',
      token,
      user: {
        id: user._id,
        email: user.email,
        username: user.username
      }
    });
  } catch (error) {
    console.error('로그인 오류:', error);
    res.status(500).json({ error: '로그인에 실패했습니다.' });
  }
});

// 사용자 정보 조회
router.get('/me', async (req: Request, res: Response) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ error: '인증 토큰이 필요합니다.' });
    }

    const decoded = require('jsonwebtoken').verify(token, process.env.JWT_SECRET || 'fallback_secret') as any;
    const user = await User.findById(decoded.userId).select('-password');

    if (!user) {
      return res.status(404).json({ error: '사용자를 찾을 수 없습니다.' });
    }

    res.json({ user });
  } catch (error) {
    console.error('사용자 정보 조회 오류:', error);
    res.status(500).json({ error: '사용자 정보 조회에 실패했습니다.' });
  }
});

export default router;
