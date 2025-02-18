import { createContext, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { toast } from "sonner";

import {
  IConversationProps,
  IMessageProps,
  ISocketContextType,
  IUserProps,
} from "@/types/context";

const SocketContext = createContext<ISocketContextType | null>(null);

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [users, setUsers] = useState<IUserProps[]>([]);
  const [conversations, setConversations] = useState<
    Map<string, IConversationProps>
  >(new Map());

  useEffect(() => {
    const newSocket = io("http://localhost:2000");
    setSocket(newSocket);
    toast.success("✅ Connected to chat server!");

    // Listen for new users
    newSocket.on("user-connected", (user) => {
      setUsers((prev) => [...prev, user]);
    });

    newSocket.on("message", (message: IMessageProps) => {
      setConversations((prev) => {
        const updatedConversations = new Map(prev);
        const conversation = updatedConversations.get(message.clientId) || {
          clientId: message.clientId,
          messages: [],
          unread: 0,
        };

        conversation.messages.push(message);
        updatedConversations.set(message.clientId, conversation);

        return updatedConversations;
      });

      toast.info(`📩 New message from ${message.clientId}`);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const sendMessage = (clientId: string, text: string, isAgent: boolean) => {
    if (!socket) return;
    const event = isAgent ? "agent-message" : "user-message";
    socket.emit(event, { clientId, text });
  };

  return (
    <SocketContext.Provider
      value={{ socket, users, conversations, sendMessage }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => {
  return useContext(SocketContext);
};
