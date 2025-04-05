import { MatchingStatus } from "./matching";

// 사용자 유형 (서포터즈 또는 장애학생)
type UserType = 'supporter' | 'disabled';

// 성별 타입
type GenderType = '남성' | '여성';

// 장애 유형
type DisabilityType = '시각장애' | '청각장애' | '지체장애' | '발달장애' | '기타' | '';

// 회원가입 폼 데이터 타입 정의
export interface SignupFormData {
  studentId: string;
  password: string;
  passwordConfirm: string;
  name: string;
  department: string;
  grade: string;
  gender: GenderType;
  userType?: UserType;
  disabilityType?: DisabilityType;
  otherDisabilityDetail?: string;
}

export interface DisabledStudent {
  id: number;
  name: string;
  department: string;
  gender: GenderType;
  grade: string;
  disabilityType: DisabilityType;
  matchingStatus: MatchingStatus;
  matchingCandidates?: Supporter[];
}

export interface Supporter {
  id: number;
  name: string;
  department: string;
  gender: GenderType;
  grade: string;
  matchingStatus: MatchingStatus;
  supportType?: string;
  activityTime?: string;
}