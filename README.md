<div align="center">
![header](https://capsule-render.vercel.app/api?type=venom&color=7ad7fffb&height=300&section=header&text=Welcome&fontSize=90)
 
# Hi, I'm Hyemin 👋
 
**From hardware signals to user screens**
 
센서와 MCU 제어, 엣지 AI 추론, 웹 서비스까지 — 한 기능이 장치에서 화면까지 끝까지 동작하도록 만드는 개발자입니다.
 
[![GitHub](https://img.shields.io/badge/GitHub-hyehye12-181717?style=flat-square&logo=github)](https://github.com/hyehye12)
[![Email](https://img.shields.io/badge/Email-gtg1349@gmail.com-2563EB?style=flat-square&logo=gmail&logoColor=white)](mailto:gtg1349@gmail.com)
[![Embedded Portfolio](https://img.shields.io/badge/Portfolio-Embedded·AI-0F766E?style=flat-square)](https://hyehye12.github.io/)
[![Web Portfolio](https://img.shields.io/badge/Portfolio-Full--stack-7C3AED?style=flat-square)](https://hyehye12.github.io/hyemin_fullstack/)
 
</div>
---
 
### What I do
 
- 🔧 **Embedded** — 레지스터 수준 MCU 제어, 인터럽트 구조 설계, Linux 주변장치 연동, Verilog RTL
- 👁️ **Vision AI** — 데이터 촬영·라벨링부터 YOLO 학습, ONNX·TensorRT 엣지 배포까지
- 🌐 **Full-stack** — React·Next.js 화면, NestJS·Express API, Postgres RPC·제약·테스트, CI/CD
세 분야 모두 **"요청이 실패하거나 겹쳐도 같은 결과가 나오는가"** 를 기준으로 설계하고, 실제 보드·장치·배포 환경에서 검증합니다.
 
---
 
### 🔧 Embedded
 
![C](https://img.shields.io/badge/C-00599C?style=flat-square&logo=c&logoColor=white)
![STM32](https://img.shields.io/badge/STM32-03234B?style=flat-square&logo=stmicroelectronics&logoColor=white)
![AVR](https://img.shields.io/badge/AVR-334155?style=flat-square)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black)
![Verilog](https://img.shields.io/badge/Verilog-2563EB?style=flat-square)
![Qt](https://img.shields.io/badge/Qt-41CD52?style=flat-square&logo=qt&logoColor=white)
 
| Project | Highlight | Role |
| :--- | :--- | :--- |
| [⚙️ STM32 Motor Control](https://github.com/AI-System-Semiconductor-SW-Develop/motor_control_mini_project) | HAL 없이 EXTI·TIM·USART 레지스터 제어, ISR 이벤트 전달 구조로 개편 | 인터럽트 구조·UART 속도 제어 |
| [💡 WS2812B LED Control](https://github.com/AI-System-Semiconductor-SW-Develop/communication_control) | TIM2 PWM + DMA로 비트 타이밍 생성, 데이터시트 규격 대조 | 개인 실습 |
| [🚗 AVR RC Car](https://github.com/AI-System-Semiconductor-SW-Develop/avr-projects/tree/main/auto-car) | 초음파 3방향 자율주행·블루투스 조종, 타이머·인터럽트 역할 분리 | 펌웨어 전체 |
| [🌿 Jetson Smart Fan](https://github.com/hckim-dev/jetson-smart-fan-controller) | Linux I2C 센서 보정·데이터 검증, pthread LCD 표시 스레드 분리 | 센서·LCD 담당 |
| [📡 Basys3 I2C Monitor](https://hyehye12.github.io/projects/basys3-i2c-sensor-monitor) | 두 FPGA 간 I2C 센서 전송, 테스트벤치·로직 분석기 실측 파형 검증 | 슬레이브 RTL·Qt 모니터 |
 
<details>
<summary>More embedded projects</summary>
| Project | Highlight | Role |
| :--- | :--- | :--- |
| [🖥️ Vehicle Control System](https://github.com/qkrtkdgus010208/Qt_ARM-Vehicle_Control_System) | STM32·Qt 차량 제어와 영상 모니터링 | Qt UI·UART 통신 |
| [🧮 RTC Calculator](https://github.com/AI-System-Semiconductor-SW-Develop/avr-projects/tree/main/rtc-calculator) | LCD1602 4비트 직접 제어, 두 스택 기반 괄호 사칙연산 | LCD 드라이버·계산 로직 |
| [⏱️ FPGA Digital Clock](https://github.com/AI-System-Semiconductor-SW-Develop/FPGA-Verilog-Projects/tree/main/minsec_stopwatch_project) | Verilog 분·초 시계와 10ms 스톱워치 | 로직 구현·시뮬레이션 |
 
</details>
---
 
### 👁️ Vision AI
 
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![YOLO](https://img.shields.io/badge/YOLO11-111F68?style=flat-square)
![ONNX](https://img.shields.io/badge/ONNX-005CED?style=flat-square&logo=onnx&logoColor=white)
![TensorRT](https://img.shields.io/badge/TensorRT-76B900?style=flat-square&logo=nvidia&logoColor=white)
![OpenCV](https://img.shields.io/badge/OpenCV-5C3EE8?style=flat-square&logo=opencv&logoColor=white)
![Jetson](https://img.shields.io/badge/Jetson_Orin_Nano-76B900?style=flat-square&logo=nvidia&logoColor=white)
 
| Project | Highlight | Role |
| :--- | :--- | :--- |
| [✊ Vision RPS Game](https://github.com/AI-System-Semiconductor-SW-Develop/RCP_game_project) | 직접 촬영·라벨링한 약 320장으로 YOLO11n 미세조정 → TensorRT 배포, 7프레임 확정 로직으로 오검출 억제 | 전체 구현 |
| [🔍 Board Guard](https://github.com/clap-min99/board_guard) | PCB 불량 검사 시스템의 판정 결과(점수·임계값·모델 버전) 저장과 이력 조회 | UI·UX, 검사 이력 DB |
| [🎬 CineTrip](https://hyehye12.github.io/hyemin_fullstack/projects/cinetrip) | gpt-4o 촬영지 생성, LLM 응답 JSON 추출·Zod 스키마 검증 후 저장 | 촬영지·북마크 API |
 
---
 
### 🌐 Full-stack
 
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?style=flat-square&logo=supabase&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)
 
| Project | Highlight | Role |
| :--- | :--- | :--- |
| [🐦 Woodpecker (딱다구리)](https://github.com/T-in-meet/Woodpecker) | 노트 생성·복습 일정을 단일 RPC 트랜잭션으로, 알림 선점 `FOR UPDATE SKIP LOCKED`, pgTAP·CI/CD | 설계 총괄·노트·알림·배포 |
| [🎬 CineTrip](https://github.com/chiro-J/Project-CineTrip) | DB 우선 조회로 LLM 호출 최소화, NestJS 촬영지·북마크 모듈 | 프론트 구조·촬영지·북마크 |
| [🎵 EmotionalMusic](https://github.com/hyehye12/EmotionalMusic) | 일기 감정 분석 → 음악 추천, Express JWT 인증·Supabase·Vercel 배포 | 개인 프로젝트 전체 |
| [🥒 Team Cucumber](https://github.com/hyehye12/TeamProject_Cucumber) | 페이지 전환·바텀시트 등 팀 공통 UI 컴포넌트 | 초기 세팅·공통 UI |
 
---
 
<div align="center">
<sub>Build, verify, and keep improving.</sub>
 
</div>
 
