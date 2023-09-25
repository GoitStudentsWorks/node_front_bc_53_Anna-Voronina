import { List } from "./Nav.styled";
import { StyledLink } from "./Nav.styled";
import PropTypes from "prop-types";

export const Nav = ({ variant = null }) => {
  return (
    <List $variant={variant}>
      <li>
        <StyledLink to="/news" $variant={variant}>
          News
        </StyledLink>
      </li>
      <li>
        <StyledLink to="/notices" $variant={variant}>
          Find pet
        </StyledLink>
      </li>
      <li>
        <StyledLink to="/friends" $variant={variant}>
          Our friends
        </StyledLink>
      </li>
    </List>
  );
};

Nav.propTypes = {
  variant: PropTypes.string,
};
