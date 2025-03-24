// 사용자 유형 (서포터즈 또는 장애학생)
export type UserType = 'supporter' | 'disabled';

// 성별 타입
export type GenderType = 'male' | 'female' | 'other';

// 장애 유형
export type DisabilityType = 'visual' | 'hearing' | 'physical' | 'developmental' | 'other' | '';

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