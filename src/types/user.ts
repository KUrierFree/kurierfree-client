// 사용자 유형 (서포터즈 또는 장애학생)
type UserType = 'supporter' | 'disabled';

// 성별 타입
type GenderType = '남성' | '여성' | '기타';

// 장애 유형
type DisabilityType = '시각장애' | '청각장애' | '지체장애' | '발달장애' | '기타' | '';

// 매칭 상태
// waiting: 매칭 미완료
// selecting: 서포터즈 선택 중 (토글 목록이 열린 상태)
// completed: 매칭 완료
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
  grade: string;
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
  supportType?: string;
  activityTime?: string;
} 