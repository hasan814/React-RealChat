import { useEffect, useState } from "react";
import { IChatBoxProps } from "@/types/modules";
import { useSocket } from "@/context/SocketProvider";
import { toast } from "sonner";

import ChatInput from "./ChatInput";
import Message from "./Message";

const ChatBox: React.FC<IChatBoxProps> = ({
  role,
  clientId,
  messages: initialMessages,
  onSend,
}) => {
  // ============== Context ============
  const { socket, conversations = new Map() } = useSocket() || {};

  // ============== States ============
  const [messages, setMessages] = useState(initialMessages);

  // ============== Effect ============
  useEffect(() => {
    if (!socket) return;

    // Fetch the current conversation from context
    const currentConversation = conversations.get(clientId);
    setMessages(currentConversation?.messages || []);

    // Listen for new messages
    socket.on("message", (message: any) => {
      if (message.clientId === clientId) {
        setMessages((prev) => {
          if (!prev.some((msg) => msg.id === message.id)) {
            return [...prev, message];
          }
          return prev;
        });
        toast.info(
          `📩 New message from ${message.isFromAgent ? "Agent" : "User"}`
        );
      }
    });

    return () => {
      socket.off("message");
    };
  }, [socket, clientId, conversations]);

  // ================= Handling Send Message =================
  const handleSendMessage = (text: string) => {
    if (onSend) {
      onSend(clientId, text, role === "agent");
    }
  };

  // ============== Rendering ============
  return (
    <div className="border rounded p-4 bg-white shadow-md h-80 overflow-y-auto sm:h-[400px]">
      {messages.map((msg) => (
        <Message key={msg.id} text={msg.text} isFromAgent={msg.isFromAgent} />
      ))}
      <ChatInput onSend={handleSendMessage} />
    </div>
  );
};

export default ChatBox;
