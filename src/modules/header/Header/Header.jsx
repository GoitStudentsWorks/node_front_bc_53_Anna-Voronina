import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { Headers } from "./Header.styled";
export const Header = () => {
  return (
    <>
      <Headers>
        <Logo />
        <Navigation />
      </Headers>
    </>
  );
};
