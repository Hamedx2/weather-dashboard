import { Box } from "@mui/material";
import LoginImage from "./LoginImage";

const images = [
  "/images/admin/rainyMoon.png",
  "/images/admin/rainySun.png",
  "/images/admin/windyMoon.png",
];

function LoginImageBox() {
  return (
    <Box
      sx={{
        backgroundColor: "background.loginImage",
        borderRadius: " 0 12px 12px 0",
        position: "relative",
        display: "grid",
        gridTemplateRows: "1fr 1fr 1fr",
        width: "454px",
      }}
    >
      <LoginImage src={images[0]} right="40" bottom="-20" left={null} />
      <LoginImage src={images[1]} left="40" bottom="0" right={null} />
      <LoginImage src={images[2]} bottom="20" right="40" left={null} />
    </Box>
  );
}

export default LoginImageBox;
