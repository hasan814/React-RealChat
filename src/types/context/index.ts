import { Socket } from "socket.io-client";

export interface IUserProps {
  clientId: string;
  name: string;
}

export interface IConversationProps {
  clientId: string;
  messages: IMessageProps[];
  unread: number;
}

export interface IMessageProps {
  id: string;
  text: string;
  clientId: string;
  timestamp: Date;
  isFromAgent: boolean;
}

export interface ISocketContextType {
  socket: Socket | null;
  users: IUserProps[];
  conversations: Map<string, IConversationProps>;
  sendMessage: (clientId: string, text: string, isAgent: boolean) => void;
}