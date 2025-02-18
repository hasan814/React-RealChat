export interface IMessageProps {
  text: string;
  isFromAgent: boolean;
}


export interface IChatInputProps {
  onSend: (text: string) => void;
}


export interface IUserListProps {
  onSelectUser: (clientId: string) => void;
}


export interface IChatBoxProps {
  role: "client" | "agent";
  clientId: string;
  messages: { id: string; text: string; isFromAgent: boolean }[];
  onSend: (clientId: string, text: string, isAgent: boolean) => void;
}


export interface IMessage {
  id: string;
  text: string;
  isFromAgent: boolean;
}

export interface IChatInputProps {
  onSend: (text: string) => void;
}

