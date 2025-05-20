import { Box } from "@mui/material";
import Navbar from "../components/dashboard/navbar/Navbar";
import Footer from "../components/dashboard/footer/Footer";
import { useWeather } from "../utils/contexts/WeatherContext";
import { useNavigate } from "react-router";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import DashboardBody from "../components/dashboard/body/DashboardBody";
import { LocationProvider } from "../utils/contexts/DashboardBodyContext";

function Dashboard() {
  const navigate = useNavigate();
  const weatherContext = useWeather();
  const name = weatherContext?.name || "";
  const { t } = useTranslation();
  const hasshownToast = useRef(false);

  useEffect(
    function () {
      if (name === "") {
        navigate("/login");
      } else if (!hasshownToast.current) {
        toast.success(`${t("dashboard.welcome")} ${name} !`, {
          style: {
            borderRadius: "10px",
            padding: "20px 40px",
            fontSize: "18px",
            fontWeight: "500",
          },
        });
      }
      hasshownToast.current = true;
    },
    [navigate, name, t]
  );

  if (name === "") return;

  return (
    <Box sx={{ position: "relative" }}>
      <LocationProvider>
        <Navbar />
        <DashboardBody />
        <Footer />
      </LocationProvider>
    </Box>
  );
}

export default Dashboard;
