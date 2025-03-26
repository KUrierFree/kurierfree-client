// 사용자 유형 (서포터즈 또는 장애학생)
export type UserType = 'supporter' | 'disabled';

// 성별 타입
export type GenderType = 'male' | 'female' | 'other';

// 장애 유형
export type DisabilityType = 'visual' | 'hearing' | 'physical' | 'developmental' | 'other' | '';

// 매칭 상태
// waiting: 매칭 미완료 (아직 매칭이 시작되지 않음)
// selecting: 서포터즈 선택 중 (서포터즈 목록이 열린 상태)
// completed: 매칭 완료 (매칭이 성사된 상태)
export type MatchingStatus = "waiting" | "selecting" | "completed";

// 회원가입 폼 데이터 타입 정의
export interface SignupFormData {
  studentId: string;
  password: string;
  passwordConfirm: string;
  name: string;
  department: string;
  grade: string;
  gender: GenderType;
  userType: UserType;
  disabilityType?: DisabilityType;
  otherDisabilityDetail?: string;
}

export interface DisabledStudent {
  name: string;
  department: string;
  gender: GenderType;
  disabilityType: DisabilityType;
  matchingStatus: MatchingStatus;
}

export interface Supporter {
  id: string;
  name: string;
  department: string;
  gender: GenderType;
  grade: string;
  matchingStatus: MatchingStatus;
} 