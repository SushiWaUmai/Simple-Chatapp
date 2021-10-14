import { Message } from "@chatapp/shared";
import { FunctionComponent, ReactNode, useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";

interface MessageListComponentProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

const MessageListComponent: FunctionComponent<MessageListComponentProps> = ({
  socket,
}) => {
  const [msgs, setmsgs] = useState<Message[]>([]);

  useEffect(() => {
    socket.on("message", (text: Message) => {
      setmsgs((prev) => {
        return [...prev, text];
      });
    });
  }, []);

  return (
    <div className="text-xl">
      {msgs?.length > 0 ? (
        <ul>
          {msgs
            .map<ReactNode>((msg, i) => {
              return (
                <li key={i}>
                  <div
                    className={`flex ${
                      msg.senderID === socket.id
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div className="py-1 px-3 my-1 bg-green-300 rounded">
                      {msg.content}
                    </div>
                  </div>
                </li>
              );
            })
            .reduce((prev, current) => (
              <>
                {prev}
                {current}
              </>
            ))}
        </ul>
      ) : (
        <p>Chat history empty</p>
      )}
    </div>
  );
};

export default MessageListComponent;
