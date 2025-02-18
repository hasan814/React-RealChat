import { useEffect, useState } from "react";
import { useSocket } from "@/context/SocketProvider";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import ChatBox from "../modules/ChatBox";

const ClientPage = () => {
  // ================ Context =================
  const { socket, sendMessage } = useSocket() || {};

  // ================ States ==============
  const [name, setName] = useState("");
  const [registered, setRegistered] = useState(false);
  const [messages, setMessages] = useState([]);

  // ================ Effect ==============
  useEffect(() => {
    if (!socket) return;
    socket.on("message", (message) => {
      setMessages((prev) => [...prev, message]);
    });
    return () => {
      socket.off("message");
    };
  }, [socket]);

  // ================ Register Function ==============
  const handleRegister = () => {
    if (!socket || !name.trim()) return;
    const clientId = socket.id;
    socket.emit("register-user", { clientId, name });
    socket.emit(
      "get-client-conversations",
      { clientId },
      ({ success, data }) => {
        if (success) setMessages(data.messages);
        setRegistered(true);
      }
    );
    toast.success(`🎉 Welcome, ${name}!`);
  };

  // ================ Rendering ==============
  return (
    <div className="p-4 max-w-full sm:max-w-md mx-auto">
      {!registered ? (
        <>
          <input
            className="border p-2 w-full mb-4"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button onClick={handleRegister}>Register</Button>
        </>
      ) : (
        <ChatBox
          role="client"
          clientId={socket.id}
          messages={messages}
          onSend={sendMessage}
        />
      )}
    </div>
  );
};

export default ClientPage;
