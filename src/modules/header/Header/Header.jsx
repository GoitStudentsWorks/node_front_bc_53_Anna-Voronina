import { Container } from "@/shared/components/Container/Container";
import { ButtonMenu } from "../ButtonMenu/ButtonMenu";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { Headers, HeaderNav } from "./Header.styled";

export const Header = () => {
  return (
    <Container>
      <Headers>
        <HeaderNav>
          <Logo />
          <Navigation />
          <ButtonMenu />
        </HeaderNav>
      </Headers>
    </Container>
  );
};
