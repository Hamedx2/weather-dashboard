import { Box } from "@mui/material";
import LoginBox from "../components/login/LoginBox";
import LoginLanguageSelect from "../components/login/LoginLanguageSelect";
import { useWeather } from "../utils/contexts/WeatherContext";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function Login() {
  const weatherContext = useWeather();
  const name = weatherContext?.name;
  const navigate = useNavigate();

  useEffect(
    function () {
      if (name !== "") {
        navigate("/dashboard");
      }
    },
    [name, navigate]
  );

  if (name !== "") return;
  return (
    <Box
      sx={{
        height: "100vh",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "1.5rem",
        paddingTop: "3rem",
        overflow: "hidden",
      }}
    >
      <LoginBox />
      <LoginLanguageSelect />
    </Box>
  );
}

export default Login;
