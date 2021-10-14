import { NextPage } from "next";
import Head from "next/head";
import NavbarComponent from "../components/NavbarComponent";

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | Simple Chatapp</title>
      </Head>
      <div className="flex flex-col">
        <header>
          <NavbarComponent />
        </header>
        <br />

        <main className="flex-grow container px-2 lg:mx-auto">
          <div>
            <p className="text-bold">This project was made with</p>
            <ul className="list-disc mx-5">
              <li>Socket.io</li>
              <li>Express</li>
              <li>Typescript</li>
              <li>Tailwind</li>
              <li>Lerna</li>
              <li>Yarn Workspaces</li>
            </ul>
            <p>Simple-Chatapp October 2021</p>
          </div>
        </main>
      </div>
    </>
  );
};

export default AboutPage;
