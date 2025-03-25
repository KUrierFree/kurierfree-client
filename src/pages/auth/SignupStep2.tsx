import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSignupStore } from "../../hooks/useStore";
import { GenderType, DisabilityType } from "../../types/user";
import TextInput from "../../components/auth/TextInput";
import GenderSelect from "../../components/auth/GenderSelect";
import DisabilityTypeSelect from "../../components/auth/DisabilityTypeSelect";
import Button from "../../components/common/Button";

interface Step2FormData {
  name: string;
  department: string;
  grade: string;
  gender: GenderType;
  disabilityType?: DisabilityType;
  otherDisabilityDetail?: string;
}

const SignupStep2: React.FC = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useSignupStore();

  // React Hook Form 설정
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Step2FormData>({
    defaultValues: {
      name: formData.name,
      department: formData.department,
      grade: formData.grade,
      gender: formData.gender,
      disabilityType: formData.disabilityType,
      otherDisabilityDetail: formData.otherDisabilityDetail,
    },
  });

  // 폼 제출 처리
  const onSubmit: SubmitHandler<Step2FormData> = (data) => {
    // Zustand 스토어 업데이트
    updateFormData(data);

    // 회원가입 API 호출
    const completeFormData = { ...formData, ...data };
    console.log("회원가입 데이터:", completeFormData);

    // 성공 시 로그인 페이지로 이동
    alert("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.");
    navigate("/login");
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        id="name"
        label="이름"
        placeholder="이름을 입력하세요"
        register={register}
        validation={{ required: "이름을 입력해주세요" }}
        error={errors.name}
      />

      <TextInput
        id="department"
        label="학과"
        placeholder="학과를 입력하세요"
        register={register}
        validation={{ required: "학과를 입력해주세요" }}
        error={errors.department}
      />

      <TextInput
        id="grade"
        label="학년"
        placeholder="학년을 입력하세요"
        register={register}
        validation={{ required: "학년을 입력해주세요" }}
        error={errors.grade}
      />

      <GenderSelect register={register} error={errors.gender} />

      {formData.userType === "disabled" && (
        <DisabilityTypeSelect
          register={register}
          watch={watch}
          setValue={setValue}
          error={errors.disabilityType}
          required={formData.userType === "disabled"}
        />
      )}

      <div className="flex space-x-3">
        <Button variant="primary" onClick={() => navigate("/signup/step1")}>
          이전
        </Button>
        <Button variant="primary" type="submit">
          회원가입
        </Button>
      </div>
    </form>
  );
};

export default SignupStep2;
