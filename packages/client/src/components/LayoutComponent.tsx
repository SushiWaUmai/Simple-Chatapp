import { FunctionComponent } from "react";
import NavbarComponent from "./NavbarComponent";
import Head from "next/head";

interface LayoutComponentProps {}

const LayoutComponent: FunctionComponent<LayoutComponentProps> = ({
  children,
}) => {
  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta lang="en" />
      </Head>
      <header>
        <NavbarComponent />
      </header>
      <main>{children}</main>
    </>
  );
};

export default LayoutComponent;
