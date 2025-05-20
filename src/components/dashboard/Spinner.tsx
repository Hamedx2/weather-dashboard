import { CircularProgress, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function Spinner() {
  const { t } = useTranslation();
  return (
    <Stack
      direction="column"
      spacing={4}
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <CircularProgress size="5rem" />
      <Typography variant="h4" textAlign="center">
        {t("dashboard.loading")}
      </Typography>
    </Stack>
  );
}

export default Spinner;
