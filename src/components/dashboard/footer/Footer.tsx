import {
  AppBar,
  Box,
  Icon,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FooterDate from "./FooterDate";

function Footer() {
  const { t } = useTranslation();
  return (
    <AppBar
      sx={(theme) => ({
        position: "static",
        bottom: "0",
        top: "auto",
        backgroundImage: `linear-gradient(to left, ${theme.palette.background.page}, ${theme.palette.background.weatherCard}, ${theme.palette.background.page})`,
        boxShadow: "none",
      })}
    >
      <Toolbar sx={{ padding: "10px 0" }}>
        <IconButton
          size="small"
          edge="start"
          href="https://nadinsoft.com"
          target="_blank"
        >
          <Box
            component="img"
            alt="Nadin Logo"
            src="/images/dashboard/NadinLogo.png"
            sx={{
              width: "56px",
              borderRadius: "50%",
            }}
          />
        </IconButton>
        <Typography
          component="h6"
          variant="subtitle2"
          color="text.primary"
          px="10px"
          fontSize="small"
          sx={{ flexGrow: "1" }}
        >
          {t("dashboard.footer.copyRightText")}
        </Typography>
        <Stack
          direction="row"
          color="text.primary"
          alignItems="center"
          spacing={0.5}
          sx={{ color: "text.primary" }}
          fontSize="small"
          px={5}
        >
          <Icon>
            <MailOutlineIcon />
          </Icon>
          <Typography variant="subtitle2" fontSize="small">
            {t("dashboard.footer.contact")}{" "}
            <Link
              href="mailto:info@nadin.ir"
              target="_blank"
              underline="none"
              color="inherit"
            >
              info@nadin.ir
            </Link>
          </Typography>
        </Stack>
        <FooterDate />
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
