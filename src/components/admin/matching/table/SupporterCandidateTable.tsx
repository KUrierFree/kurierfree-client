/*
  매칭 알고리즘에 의해 선정된 서포터즈 3인을 표시하는 테이블
*/

interface SupporterCandidateTableProps {
  supporters: {
    name: string;
    department: string;
    gender: string;
    grade: string;
  }[];
  onSelect: (supporterId: string) => void;
}

const SupporterCandidateTable = ({ supporters, onSelect }: SupporterCandidateTableProps) => {
  return (
    <div className="bg-white">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-y border-gray-300">
            <th className="p-3 border-x border-gray-300 text-left bg-gray-50">순위</th>
            <th className="p-3 border-x border-gray-300 text-left bg-gray-50">이름</th>
            <th className="p-3 border-x border-gray-300 text-left bg-gray-50">학과</th>
            <th className="p-3 border-x border-gray-300 text-left bg-gray-50">성별</th>
            <th className="p-3 border-x border-gray-300 text-left bg-gray-50">학년</th>
            <th className="p-3 border-x border-gray-300 text-left bg-gray-50"></th>
          </tr>
        </thead>
        <tbody>
          {supporters.map((supporter, index) => (
            <tr key={index}>
              <td className="p-3 border-x border-gray-300 border-b">{index + 1}순위</td>
              <td className="p-3 border-x border-gray-300 border-b">{supporter.name}</td>
              <td className="p-3 border-x border-gray-300 border-b">{supporter.department}</td>
              <td className="p-3 border-x border-gray-300 border-b">{supporter.gender}</td>
              <td className="p-3 border-x border-gray-300 border-b">{supporter.grade}</td>
              <td className="p-3 border-x border-gray-300 border-b">
                <button
                  onClick={() => onSelect(index.toString())}
                  className="px-2 py-1 text-sm bg-primary text-white rounded hover:bg-primary/80"
                >
                  선택
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupporterCandidateTable;