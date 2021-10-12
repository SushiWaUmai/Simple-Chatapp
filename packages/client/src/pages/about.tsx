import { NextPage } from "next";

const AboutPage: NextPage = () => {
  return (
    <div className="container mx-auto">
      <div>
        <p>This project was made with</p>
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
    </div>
  );
};

export default AboutPage;
