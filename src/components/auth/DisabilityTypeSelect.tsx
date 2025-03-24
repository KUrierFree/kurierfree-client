import React from "react";
import {
  UseFormRegister,
  FieldError,
  RegisterOptions,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

interface DisabilityTypeSelectProps {
  register: UseFormRegister<any>;
  watch: UseFormWatch<any>;
  setValue: UseFormSetValue<any>;
  error?: FieldError;
  validation?: RegisterOptions;
  required: boolean;
}

const DisabilityTypeSelect: React.FC<DisabilityTypeSelectProps> = ({
  register,
  watch,
  setValue,
  error,
  required,
}) => {
  const disabilityType = watch("disabilityType");

  // "기타" 텍스트 입력 시 자동으로 "기타" 라디오 버튼 선택
  const handleOtherDisabilityChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.value && disabilityType !== "other") {
      setValue("disabilityType", "other");
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        장애 유형
      </label>
      <div className="mt-2 space-y-2">
        <div className="flex items-center">
          <input
            type="radio"
            id="visual"
            value="visual"
            className="h-4 w-4 text-[var(--color-primary)] focus:ring-[var(--color-primary)] border-gray-300"
            {...register("disabilityType", {
              required: required ? "장애 유형을 선택해주세요" : false,
            })}
          />
          <label
            htmlFor="visual"
            className="ml-3 block text-sm font-medium text-gray-700"
          >
            시각장애
          </label>
        </div>

        <div className="flex items-center">
          <input
            type="radio"
            id="hearing"
            value="hearing"
            className="h-4 w-4 text-[var(--color-primary)] focus:ring-[var(--color-primary)] border-gray-300"
            {...register("disabilityType", {
              required: required ? "장애 유형을 선택해주세요" : false,
            })}
          />
          <label
            htmlFor="hearing"
            className="ml-3 block text-sm font-medium text-gray-700"
          >
            청각장애
          </label>
        </div>

        <div className="flex items-center">
          <input
            type="radio"
            id="physical"
            value="physical"
            className="h-4 w-4 text-[var(--color-primary)] focus:ring-[var(--color-primary)] border-gray-300"
            {...register("disabilityType", {
              required: required ? "장애 유형을 선택해주세요" : false,
            })}
          />
          <label
            htmlFor="physical"
            className="ml-3 block text-sm font-medium text-gray-700"
          >
            지체장애
          </label>
        </div>

        <div className="flex items-center">
          <input
            type="radio"
            id="developmental"
            value="developmental"
            className="h-4 w-4 text-[var(--color-primary)] focus:ring-[var(--color-primary)] border-gray-300"
            {...register("disabilityType", {
              required: required ? "장애 유형을 선택해주세요" : false,
            })}
          />
          <label
            htmlFor="developmental"
            className="ml-3 block text-sm font-medium text-gray-700"
          >
            발달장애
          </label>
        </div>

        <div className="flex items-center space-x-3">
          <input
            type="radio"
            id="disability-other"
            value="other"
            className="h-4 w-4 text-[var(--color-primary)] focus:ring-[var(--color-primary)] border-gray-300"
            {...register("disabilityType", {
              required: required ? "장애 유형을 선택해주세요" : false,
            })}
          />
          <label
            htmlFor="disability-other"
            className="ml-3 block text-sm font-medium text-gray-700 min-w-[40px]"
          >
            기타:
          </label>
          <input
            type="text"
            className="flex-1 appearance-none px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] disabled:bg-gray-100 disabled:text-gray-500"
            placeholder="직접 입력"
            disabled={disabilityType !== "" && disabilityType !== "other"}
            {...register("otherDisabilityDetail")}
            onChange={(e) => {
              register("otherDisabilityDetail").onChange(e);
              handleOtherDisabilityChange(e);
            }}
            onClick={() => {
              setValue("disabilityType", "other");
            }}
          />
        </div>
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
    </div>
  );
};

export default DisabilityTypeSelect;
