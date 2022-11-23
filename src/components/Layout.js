import NavbarComponent from "./NavBar";
import Cartwidget from "./CartWidget";

export const Layout = ({ children }) => {
  return (
    <main className="container">
      <NavbarComponent>
        <Cartwidget />
      </NavbarComponent>
      {children}
    </main>
  );
};
