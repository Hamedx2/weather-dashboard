import { Box, IconButton, Paper } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useEffect, useRef, useState } from "react";
import NavbarSettingsContent from "./NavbarSettingsContent";

function NavbarSettings() {
  const [openSettings, setOpenSettings] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
        setOpenSettings(false);
      }
    }

    if (openSettings) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openSettings]);

  function handleToggleSettings() {
    setOpenSettings((isOpen) => (isOpen ? false : true));
  }

  return (
    <Box position="relative" ref={boxRef}>
      <IconButton
        onClick={handleToggleSettings}
        size="small"
        sx={{
          border: "1px solid",
          borderColor: openSettings ? "primary.main" : "text.secondary",
          color: openSettings ? "primary.main" : "",
          width: 40,
          height: 40,
          borderRadius: 2,
          transition: "all 0.3s",
          "&:hover": {
            color: "primary.main",
            borderColor: "primary.main",
          },
        }}
      >
        <SettingsIcon />
      </IconButton>
      <Paper
        sx={{
          zIndex: "10",
          height: openSettings ? 240 : 0,
          opacity: openSettings ? 1 : 0,
          width: 220,
          position: "absolute",
          backgroundColor: "background.page",
          top: "110%",
          right: "10%",
          overflow: "hidden",
          transition: "height 0.5s ease, opacity 0.5s ease",
        }}
      >
        <NavbarSettingsContent />
      </Paper>
    </Box>
  );
}

export default NavbarSettings;
