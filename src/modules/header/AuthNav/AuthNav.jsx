import { Items, LinkStyles, List } from "./AuthNav.styled";
import icon from "../../../shared/icons/sprite.svg";

const routes = [
  { path: "/login", text: "Log IN" },
  { path: "/register", text: " Registration" },
];
export const AuthNav = () => {
  return (
    <>
      <List>
        {routes.map((route) => (
          <Items key={route.path}>
            <LinkStyles to={route.path}>
              {route.text}
              {route.path === "/login" && (
                <svg>
                  <use xlinkHref={icon + "#pawprint"}> </use>
                </svg>
              )}
            </LinkStyles>
          </Items>
        ))}
      </List>
    </>
  );
};
