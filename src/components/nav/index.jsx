import { Button } from "@material-tailwind/react";
import "./style.scss";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div className="nav">
      <Link to={'/'}>
      <h1>Shoxrux/Abdulloh</h1>
      </Link>
      <div className="btns">
        <Link to={"/users"}>
          <Button variant="outlined">Users</Button>
        </Link>
        <Link to={"/login"}>
          <Button>Log In</Button>
        </Link>
      </div>
    </div>
  );
}
