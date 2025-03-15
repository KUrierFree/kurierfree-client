# KUrierFree (Client Repository)

---

## 📌 프로젝트 구조

```
📦 src
├── 📂 assets            # 정적 파일 (이미지, 아이콘, 폰트 등)
├── 📂 components        # 재사용 가능한 UI 컴포넌트
│   ├── 📂 common       # 버튼, 입력 필드 등 공통 컴포넌트
│   ├── 📂 layout       # 레이아웃 관련 컴포넌트 (Navbar, Footer 등)
│   ├── 📂 ui           # Tailwind 기반의 UI 컴포넌트
│   ├── 📜 index.ts     # 컴포넌트들을 한 곳에서 export
├── 📂 hooks            # 커스텀 훅 (Zustand 상태 관리 포함)
│   ├── useStore.ts     # Zustand 스토어 정의
│   ├── useFetch.ts     # API 호출 관련 커스텀 훅
├── 📂 pages            # 페이지 컴포넌트 (Next.js 스타일)
│   ├── 📜 Home.tsx     # 메인 페이지
├── 📂 services         # API 요청 함수
│   ├── api.ts          # axios/fetch API 요청 관리
├── 📂 styles           # Tailwind 관련 스타일 파일
│   ├── globals.css     # 전역 스타일
│   ├── tailwind.css    # Tailwind 기본 설정
├── 📂 types            # TypeScript 타입 정의
│   ├── user.ts         # 유저 관련 타입
│   ├── index.ts        # 타입 export 정리
├── 📂 utils            # 유틸리티 함수 (ex: 날짜 포맷 변환 등)
│   ├── formatDate.ts   # 날짜 변환 함수
│   ├── index.ts        # 유틸리티 모음
├── 📜 App.tsx          # 루트 컴포넌트
├── 📜 main.tsx         # ReactDOM 렌더링 진입점
```

---

## 📌 프로젝트 주요 기능

---

## 📌 사용 기술 스택

|------------|
| **React** |
| **Vite** |
| **Zustand** |
| **Tailwind CSS** |

---

## 📌 협업 규칙

### 1️⃣ **Branch 전략**

### 2️⃣ **Commit 메시지 규칙**

---
