import { LogOut } from "../LogOut/LogOut";
import { Link } from "react-router-dom";
import { Div, Nav } from "./UserNav.styled";

export const UserNav = () => {
  return (
    <Div>
      <LogOut />
      <Nav>
        <Link to="/user">UserPage</Link>
      </Nav>
    </Div>
  );
};
