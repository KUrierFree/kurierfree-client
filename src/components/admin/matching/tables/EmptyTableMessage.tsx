interface EmptyTableMessageProps {
    colSpan?: number;
    message?: string;
  }
  
  const EmptyTableMessage = ({
    colSpan = 1,
    message = "데이터가 없습니다.",
  }: EmptyTableMessageProps) => {
    return (
      <div role="row" className="flex w-full">
        <div
          role="cell"
          className="py-3 px-4 text-center text-gray-500 flex-shrink-0 flex items-center h-[48px] w-full"
          style={{ gridColumn: `span ${colSpan} / span ${colSpan}` }}
        >
          {message}
        </div>
      </div>
    );
  };
  
export default EmptyTableMessage;