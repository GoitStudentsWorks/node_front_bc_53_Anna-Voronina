import { LinkStyles, List } from "./AuthNav.styled";
import icon from "../../../shared/icons/sprite.svg";
import PropTypes from "prop-types";
const routes = [
  { path: "/login", text: "Log IN" },
  { path: "/register", text: " Registration" },
];
export const AuthNav = ({ variant = null }) => {
  return (
    <>
      <List $variant={variant}>
        {routes.map((route) => (
          <li key={route.path}>
            <LinkStyles to={route.path}>
              {route.text}
              {route.path === "/login" && (
                <svg>
                  <use xlinkHref={icon + "#pawprint"}> </use>
                </svg>
              )}
            </LinkStyles>
          </li>
        ))}
      </List>
    </>
  );
};
AuthNav.propTypes = {
  variant: PropTypes.string,
};
