import { FunctionComponent } from "react";
import Link from "next/link";
import { ChatAltIcon, InformationCircleIcon } from "@heroicons/react/outline";

interface NavbarComponentProps {}

const NavbarComponent: FunctionComponent<NavbarComponentProps> = () => {
  return (
    <div className="p-3 bg-gray-50 shadow-sm">
      <div className="container lg:mx-auto">
        <div className="flex justify-between">
          <span className="inline-block">
            <Link href="/">
              <div className="btn flex align-middle items-center gap-x-3">
                <ChatAltIcon className="w-10 h-10 inline" />
                <h1 className="text-xl inline">Simple Chatapp</h1>
              </div>
            </Link>
          </span>
          <span className="flex align-middle items-center ">
            <Link href="/about">
              <div className="btn">
                <h1 className="text-lg">About</h1>
              </div>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
