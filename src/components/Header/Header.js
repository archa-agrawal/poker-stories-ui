import Button from "@mui/material/Button";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <Button className="header-button" variant="contained">
        Register
      </Button>
      <Button className="header-button" variant="contained">
        Login
      </Button>
    </div>
  );
}
