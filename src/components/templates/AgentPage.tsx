import { useEffect, useState } from "react";
import { useSocket } from "@/context/SocketProvider";
import { IMessage } from "@/types/modules";
import { Alert } from "@/components/ui/alert";
import { toast } from "sonner";

import UserList from "../modules/UserList";
import ChatBox from "../modules/ChatBox";

const AgentPage = () => {
  // ================= Context =================
  const {
    socket,
    users = [],
    conversations = new Map(),
    sendMessage,
  } = useSocket() || {};

  // ================= States =================
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [currentMessages, setCurrentMessages] = useState<IMessage[]>([]);

  // ================= Effect =================
  useEffect(() => {
    if (socket) {
      socket.emit("register-agent");
    }
  }, [socket]);

  useEffect(() => {
    if (selectedUser) {
      setCurrentMessages(conversations.get(selectedUser)?.messages || []);
    }
  }, [conversations, selectedUser]);

  // ================= Select Function =================
  const handleSelectUser = (clientId: string) => {
    setSelectedUser(clientId);
    const user = users.find((u) => u.clientId === clientId);
    if (user) {
      toast.info(`📩 Chat opened with ${user.name}`);
    }
    setCurrentMessages(conversations.get(clientId)?.messages || []);
  };

  // ================= Rendering =================
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Agent Dashboard</h1>
      <Alert>✅ You are managing the chat.</Alert>

      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        {/* Left Side - User List */}
        <div className="w-full sm:w-1/3">
          <h2 className="text-lg font-semibold">Active Users</h2>
          {users.length === 0 ? (
            <p className="text-gray-500">No active users</p>
          ) : (
            <UserList onSelectUser={handleSelectUser} />
          )}
        </div>

        {/* Right Side - Chat Window */}
        <div className="w-full sm:w-2/3">
          {selectedUser ? (
            <>
              <h2 className="text-lg font-semibold mt-4">
                Chat with {users.find((u) => u.clientId === selectedUser)?.name}
              </h2>
              <ChatBox
                role="agent"
                clientId={selectedUser}
                messages={currentMessages}
                onSend={sendMessage || (() => {})}
              />
            </>
          ) : (
            <p className="text-gray-500">Select a user to start chatting</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgentPage;
