import { create } from 'zustand';
import { SignupFormData } from '../types/user';

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
  gender: '남성',
  userType: 'disabled',
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