import { Button } from "@material-tailwind/react";
import "./metro.scss";
import { Link } from "react-router-dom";

export default function MetroPage() {
  return (
    <>
      <div className="showcase">
        <i class="fa-solid fa-coins"></i>
        <i class="fa-brands fa-viacoin"></i>
        <i class="fa-brands fa-bitcoin"></i>
        <div className="left">
          <h1>WELCOME</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            atque provident at aspernatur officia debitis sapiente sed
            repudiandae, est ex, cupiditate aliquam odit. Porro tempora fugiat
            saepe. Perspiciatis facilis natus, asperiores laudantium sunt aut
            numquam, maiores animi similique quidem excepturi.
          </p>
          <Link to={"/login"}>
            <Button
              variant="outlined"
              color="white"
              className="text-[white] bg-[#05A987]"
            >
              Login
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
