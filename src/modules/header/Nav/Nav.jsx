import { Item, List } from "./Nav.styled";
import { StyledLink } from "./Nav.styled";
import PropTypes from "prop-types";

export const Nav = ({ variant = null }) => {
  return (
    <List $variant={variant}>
      <Item>
        <StyledLink to="/news">News</StyledLink>
      </Item>
      <Item>
        <StyledLink to="/notices">Find pet</StyledLink>
      </Item>
      <Item>
        <StyledLink to="/friends">Our friends</StyledLink>
      </Item>
    </List>
  );
};

Nav.propTypes = {
  variant: PropTypes.string,
};
