import { create } from 'zustand';

export type UserType = 'supporter' | 'disabled';
export type GenderType = 'male' | 'female' | 'other';
export type DisabilityType = 'visual' | 'hearing' | 'physical' | 'developmental' | 'other' | '';

// 폼 데이터 타입 정의
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

// 스토어 인터페이스
interface SignupStore {
  // 상태
  formData: SignupFormData;
  
  // 액션
  updateFormData: (data: Partial<SignupFormData>) => void;
  clearFormData: () => void;
}

// 초기 상태
const initialFormData: SignupFormData = {
  studentId: '',
  password: '',
  passwordConfirm: '',
  name: '',
  department: '',
  grade: '',
  gender: '' as GenderType,
  userType: '' as UserType,
  disabilityType: '',
  otherDisabilityDetail: '',
};

// Zustand 스토어 생성
export const useSignupStore = create<SignupStore>((set) => ({
  // 초기 상태
  formData: initialFormData,
  
  // 액션
  updateFormData: (data) => set((state) => ({
    formData: { ...state.formData, ...data }
  })),
  
  clearFormData: () => set({ formData: initialFormData }),
})); 