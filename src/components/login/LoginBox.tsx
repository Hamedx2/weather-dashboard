import { Paper } from "@mui/material";
import LoginImage from "./LoginImageBox";
import LoginForm from "./LoginForm";

function LoginBox() {
  return (
    <Paper
      sx={{
        display: "grid",
        gridTemplateColumns: "1.1fr 1fr",
        height: "490px",
        maxWidth: "960px",
        borderRadius: "12px",
        backgroundColor: "background.loginCard",
      }}
      elevation={3}
    >
      <LoginForm />
      <LoginImage />
    </Paper>
  );
}

export default LoginBox;
