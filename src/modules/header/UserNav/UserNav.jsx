import { Link } from "react-router-dom";
import { Div, Nav } from "./UserNav.styled";
import { Logout } from "../../../shared/components/Logout/Logout";

export const UserNav = () => {
  return (
    <Div>
      <Logout variant="header" />
      <Nav>
        <Link to="/user">UserPage</Link>
      </Nav>
    </Div>
  );
};
