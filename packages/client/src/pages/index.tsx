import type { NextPage } from "next";
import { useState } from "react";
import socketIOClient from "socket.io-client";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { Message } from "@chatapp/shared";
import MessageListComponent from "../components/MessageListComponent";

export const ENDPOINT = "http://localhost:4000";

const Home: NextPage = () => {
  const [socket, setSocket] = useState(socketIOClient(ENDPOINT));

  const handleSend = (msg: Message, { resetForm }: FormikHelpers<Message>) => {
    console.log("Sending Message", msg);
    socket.emit("message", msg);
    resetForm();
  };

  const initialValues: Message = {
    content: "",
  };
  return (
    <div className="bg-gray-100 flex justify-center">
      <div className="container">
        <MessageListComponent socket={socket} />

        <div className="fixed left-0 bottom-0 w-full p-3 bg-gray-200">
          <Formik initialValues={initialValues} onSubmit={handleSend}>
            <Form className="flex justify-between">
              <Field
                className="px-5 flex-grow text-xl rounded"
                name="content"
                placeholder="Type Message here..."
                autoComplete="off"
              />
              <button
                className="mx-5 py-3 px-5 rounded bg-gray-300 hover:bg-gray-400"
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
