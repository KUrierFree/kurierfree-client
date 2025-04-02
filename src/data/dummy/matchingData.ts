import { DisabledStudent, Supporter, MatchingStatus } from "../../types/user";

// 장애학생 더미 데이터 - 모두 waiting 상태로 설정
export const disabledStudents: DisabledStudent[] = [
  {
    name: "김장애",
    department: "컴퓨터공학과",
    gender: "남성",
    disabilityType: "지체장애",
    matchingStatus: "waiting",
  } as DisabledStudent,
  {
    name: "박장애",
    department: "경영학과",
    gender: "여성",
    disabilityType: "시각장애",
    matchingStatus: "waiting",
  } as DisabledStudent,
  {
    name: "이장애",
    department: "심리학과",
    gender: "남성",
    disabilityType: "청각장애",
    matchingStatus: "waiting",
  } as DisabledStudent,
  {
    name: "최장애",
    department: "화학공학과",
    gender: "여성",
    disabilityType: "발달장애",
    matchingStatus: "waiting",
  } as DisabledStudent,
  {
    name: "정장애",
    department: "전자공학과",
    gender: "남성",
    disabilityType: "지체장애",
    matchingStatus: "waiting",
  } as DisabledStudent,
  {
    name: "강장애",
    department: "기계공학과",
    gender: "여성",
    disabilityType: "시각장애",
    matchingStatus: "waiting",
  },
];

// 서포터 더미 데이터 - 모두 waiting 상태로 설정
export const supporters: Supporter[] = [
  {
    id: "1",
    name: "이서포터",
    department: "컴퓨터공학과",
    gender: "남성",
    grade: "2학년 1학기",
    matchingStatus: "waiting",
  } as Supporter,
  {
    id: "2",
    name: "박서포터",
    department: "컴퓨터공학과",
    gender: "여성",
    grade: "3학년 2학기",
    matchingStatus: "waiting",
  } as Supporter,
  {
    id: "3",
    name: "최서포터",
    department: "컴퓨터공학과",
    gender: "남성",
    grade: "4학년 1학기",
    matchingStatus: "waiting",
  } as Supporter,
  {
    id: "4",
    name: "김서포터",
    department: "경영학과",
    gender: "여성",
    grade: "2학년 2학기",
    matchingStatus: "waiting",
  } as Supporter,
  {
    id: "5",
    name: "이서포터2",
    department: "경영학과",
    gender: "남성",
    grade: "3학년 1학기",
    matchingStatus: "waiting",
  } as Supporter,
  {
    id: "6",
    name: "박서포터2",
    department: "경영학과",
    gender: "여성",
    grade: "4학년 2학기",
    matchingStatus: "waiting",
  } as Supporter,
  {
    id: "7",
    name: "정서포터",
    department: "심리학과",
    gender: "남성",
    grade: "1학년 2학기",
    matchingStatus: "waiting",
  } as Supporter,
  {
    id: "8",
    name: "조서포터",
    department: "물리학과",
    gender: "여성",
    grade: "2학년 1학기",
    matchingStatus: "waiting",
  } as Supporter,
  {
    id: "9",
    name: "윤서포터",
    department: "화학과",
    gender: "남성",
    grade: "3학년 2학기",
    matchingStatus: "waiting",
  } as Supporter,
  {
    id: "10",
    name: "한서포터",
    department: "생물학과",
    gender: "여성",
    grade: "4학년 1학기",
    matchingStatus: "waiting",
  } as Supporter,
];

// 매칭 결과 더미 데이터 - 초기에는 비어 있음
export const matchingResults: {
  disabledStudent: DisabledStudent;
  supporter: Supporter;
}[] = [];

// 서포터 후보자 더미 데이터 (선택 중인 장애학생에게 추천할 서포터 목록)
// 각 장애학생에 대한 서포터 매칭 후보 (알고리즘으로 도출된 순위를 표현)
export const supporterCandidates = [
  {
    disabledStudentName: "김장애",
    supporters: [
      {
        id: "1",
        name: "이서포터",
        department: "컴퓨터공학과",
        gender: "남성",
        grade: "2학년 1학기",
      },
      {
        id: "2",
        name: "박서포터",
        department: "컴퓨터공학과",
        gender: "여성",
        grade: "3학년 2학기",
      },
      {
        id: "3",
        name: "최서포터",
        department: "컴퓨터공학과",
        gender: "남성",
        grade: "4학년 1학기",
      },
    ],
  },
  {
    disabledStudentName: "박장애",
    supporters: [
      {
        id: "4",
        name: "김서포터",
        department: "경영학과",
        gender: "여성",
        grade: "2학년 2학기",
      },
      {
        id: "5",
        name: "이서포터2",
        department: "경영학과",
        gender: "남성",
        grade: "3학년 1학기",
      },
      {
        id: "6",
        name: "박서포터2",
        department: "경영학과",
        gender: "여성",
        grade: "4학년 2학기",
      },
    ],
  },
  {
    disabledStudentName: "이장애",
    supporters: [
      {
        id: "7",
        name: "정서포터",
        department: "심리학과",
        gender: "남성",
        grade: "1학년 2학기",
      },
      {
        id: "8",
        name: "조서포터",
        department: "물리학과",
        gender: "여성",
        grade: "2학년 1학기",
      },
      {
        id: "9",
        name: "윤서포터",
        department: "화학과",
        gender: "남성",
        grade: "3학년 2학기",
      },
    ],
  },
  {
    disabledStudentName: "최장애",
    supporters: [
      {
        id: "10",
        name: "한서포터",
        department: "생물학과",
        gender: "여성",
        grade: "4학년 1학기",
      },
      {
        id: "1",
        name: "이서포터",
        department: "컴퓨터공학과",
        gender: "남성",
        grade: "2학년 1학기",
      },
      {
        id: "2",
        name: "박서포터",
        department: "컴퓨터공학과",
        gender: "여성",
        grade: "3학년 2학기",
      },
    ],
  },
  {
    disabledStudentName: "정장애",
    supporters: [
      {
        id: "3",
        name: "최서포터",
        department: "컴퓨터공학과",
        gender: "남성",
        grade: "4학년 1학기",
      },
      {
        id: "4",
        name: "김서포터",
        department: "경영학과",
        gender: "여성",
        grade: "2학년 2학기",
      },
      {
        id: "5",
        name: "이서포터2",
        department: "경영학과",
        gender: "남성",
        grade: "3학년 1학기",
      },
    ],
  },
  {
    disabledStudentName: "강장애",
    supporters: [
      {
        id: "6",
        name: "박서포터2",
        department: "경영학과",
        gender: "여성",
        grade: "4학년 2학기",
      },
      {
        id: "7",
        name: "정서포터",
        department: "심리학과",
        gender: "남성",
        grade: "1학년 2학기",
      },
      {
        id: "8",
        name: "조서포터",
        department: "물리학과",
        gender: "여성",
        grade: "2학년 1학기",
      },
    ],
  },
];

// 전체 매칭 상태 관리를 위한 통합 더미 데이터
export const matchingState = {
  disabledStudents,
  supporters,
  matchingResults,
  supporterCandidates,
};

export default matchingState;