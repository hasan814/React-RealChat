import { IMessageProps } from "@/types/modules";

const Message: React.FC<IMessageProps> = ({ text, isFromAgent }) => {
  return (
    <div
      className={`p-2 my-1 rounded-lg max-w-[75%] ${
        isFromAgent
          ? "bg-blue-500 text-white self-end ml-auto"
          : "bg-gray-200 text-black"
      }`}
    >
      {text}
    </div>
  );
};

export default Message;
