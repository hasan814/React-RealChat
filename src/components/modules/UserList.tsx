import { IUserListProps } from "@/types/modules";
import { useSocket } from "@/context/SocketProvider";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const UserList: React.FC<IUserListProps> = ({ onSelectUser }) => {
  // ================= States ====================
  const { users = [], conversations = new Map() } = useSocket() || {};
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  // ================= Rendering ====================
  return (
    <ul className="border rounded p-3 bg-white shadow-md">
      {users.length === 0 ? (
        <p className="text-center text-gray-500">No active users</p>
      ) : (
        users.map((user) => {
          const conversation = conversations.get(user.clientId);
          const unreadCount = conversation?.unread || 0;

          return (
            <li
              key={user.clientId}
              className={`flex justify-between items-center p-2 rounded cursor-pointer ${
                selectedUser === user.clientId
                  ? "bg-blue-100"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => {
                setSelectedUser(user.clientId);
                onSelectUser(user.clientId);
              }}
            >
              <div>
                <span className="font-medium">{user.name}</span>
                {unreadCount > 0 && (
                  <span className="ml-2 px-2 py-1 bg-red-500 text-white text-xs rounded-full">
                    {unreadCount} unread
                  </span>
                )}
              </div>
              <Button>Chat</Button>
            </li>
          );
        })
      )}
    </ul>
  );
};

export default UserList;
