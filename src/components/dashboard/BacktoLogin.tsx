import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function BacktoLogin() {
  const { t } = useTranslation();
  return (
    <Box height="100vh">
      <Typography
        variant="h4"
        color="text.primary"
        margin="0 auto"
        py="50px"
        textAlign="center"
      >
        {t("dashboard.backtoLogin")}
      </Typography>
    </Box>
  );
}

export default BacktoLogin;
