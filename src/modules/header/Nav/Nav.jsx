import { List } from "./Nav.styled";
import { StyledLink } from "./Nav.styled";

export const Nav = () => {
  return (
    <>
      <List>
        <li>
          <StyledLink to="/news">News</StyledLink>
        </li>
        <li>
          <StyledLink to="/notices">Find pet</StyledLink>
        </li>
        <li>
          <StyledLink to="/friends">Our friends</StyledLink>
        </li>
      </List>
    </>
  );
};
