import type { NextPage } from "next";
import { useState } from "react";
import socketIOClient from "socket.io-client";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { Message } from "@chatapp/shared";
import MessageListComponent from "../components/MessageListComponent";
import Head from "next/head";
import NavbarComponent from "../components/NavbarComponent";

export const ENDPOINT = "http://localhost:4000";

const Home: NextPage = () => {
  const [socket, setSocket] = useState(socketIOClient(ENDPOINT));

  const handleSend = (msg: Message, { resetForm }: FormikHelpers<Message>) => {
    if (msg.content) {
      console.log("Sending Message", msg);
      socket.emit("message", msg);
      resetForm();
    }
  };

  const initialValues: Message = {
    content: "",
  };
  return (
    <>
      <Head>
        <title>Home | Simple Chatapp</title>
      </Head>

      <div className="h-full flex flex-col">
        <header>
          <NavbarComponent />
        </header>
        <br />

        <main className="flex-grow flex justify-center overflow-y-auto">
          <div className="container">
            <MessageListComponent socket={socket} />
          </div>
        </main>

        <footer>
          <div className="p-3 bg-gray-200">
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
        </footer>
      </div>
    </>
  );
};

export default Home;
