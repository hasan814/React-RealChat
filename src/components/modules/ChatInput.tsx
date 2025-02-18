import { IChatInputProps } from "@/types/modules";
import { useState } from "react";

const ChatInput: React.FC<IChatInputProps> = ({ onSend }) => {
  // ============== States ===============
  const [text, setText] = useState("");

  // ============== Submit Function ===============
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSend(text);
      setText("");
    }
  };

  // ============== Rendering ===============
  return (
    <form onSubmit={handleSubmit} className="mt-4 flex items-center gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Type your message..."
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;
