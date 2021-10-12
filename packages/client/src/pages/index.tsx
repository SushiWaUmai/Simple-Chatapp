import type { NextPage } from "next";
import { ReactNode, useEffect, useMemo, useState } from "react";
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
    <div>
      <h1 className="text-xl">Hello World</h1>

      {msgList}

      <Formik initialValues={initialValues} onSubmit={handleSend}>
        <Form>
          <Field name="content" placeholder="Type Message here..." />
          <button type="submit">Send</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Home;
