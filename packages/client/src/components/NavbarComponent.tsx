import { FunctionComponent } from "react";
import Link from "next/link";

interface NavbarComponentProps {}

const NavbarComponent: FunctionComponent<NavbarComponentProps> = () => {
  return (
    <div className="p-3 bg-gray-300">
      <div className="flex justify-between">
        <span className="inline-block">
          <Link href="/">
            <h1 className="select-none transform hover:scale-105">Simple Chatapp</h1>
          </Link>
        </span>
        <span className="inline-block">
          <Link href="/about">
            <h1 className="select-none transform hover:scale-105">About</h1>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default NavbarComponent;
