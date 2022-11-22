import NavbarComponent from "./NavBar";
import Cartwidget from "./CartWidget";

export const Layout = ({ children }) => {
  return (
    <main>
      <NavbarComponent>
        <Cartwidget />
      </NavbarComponent>
      {children}
    </main>
  );
};
