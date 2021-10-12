import { FunctionComponent } from "react";
import NavbarComponent from "./NavbarComponent";

interface LayoutComponentProps {}

const LayoutComponent: FunctionComponent<LayoutComponentProps> = ({
  children,
}) => {
  return (
    <>
      <header>
        <NavbarComponent />
      </header>
      <main>{children}</main>
    </>
  );
};

export default LayoutComponent;
