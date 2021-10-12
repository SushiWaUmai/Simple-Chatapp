import type { NextPage } from "next";
import { ReactNode, useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { Message } from "@chatapp/shared";

export const ENDPOINT = "http://localhost:4000";

const Home: NextPage = () => {
  const [msgs, setmsgs] = useState<Message[]>([]);
  const [socket, setSocket] = useState(socketIOClient(ENDPOINT));

  useEffect(() => {
    socket.on("message", (text: Message) => {
      console.log("Received", text);
      setmsgs((prev) => {
        return [...prev, text];
      });
    });
  }, []);

  let msgList;
  if (msgs.length > 0) {
    msgList = (
      <ul>
        {msgs
          .map<ReactNode>((msg, i) => {
            return <li key={i}>{msg.content}</li>;
          })
          .reduce((prev, current) => (
            <>
              {prev}
              {current}
            </>
          ))}
      </ul>
    );
  } else {
    msgList = <p>Chat history empty</p>;
  }

  const handleSend = (msg: Message, { resetForm }: FormikHelpers<Message>) => {
    console.log("Sending Message", msg);
    socket.emit("message", msg);
    resetForm();
  };

  const initialValues: Message = { content: "", sender: "" };
  return (
    <div className="flex justify-center">
      <div className="mx-auto">
        {msgList}

        <div className="fixed left-0 bottom-0 w-full p-3 bg-gray-200">
          <Formik initialValues={initialValues} onSubmit={handleSend}>
            <Form className="flex justify-between">
              <Field
                className="px-5 flex-grow text-xl"
                name="content"
                placeholder="Type Message here..."
              />
              <button
                className="mx-5 py-3 px-5 bg-gray-300 hover:bg-gray-400"
                type="submit"
              >
                Send
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Home;
