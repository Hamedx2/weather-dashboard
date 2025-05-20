import { MenuItem, TextField } from "@mui/material";
import { useState, type ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { useGetLocation } from "../../../utils/contexts/DashboardBodyContext";

function NavbarSelect() {
  const [activeLocation, setActiveLocation] = useState("sf");
  const { t } = useTranslation();
  const locationContext = useGetLocation();
  const handleSetLocation = locationContext?.handleSetLocation;

  function handleClick(value: {
    name: string;
    lat: string;
    lon: string;
    value: string;
  }) {
    handleSetLocation?.(value || { name: "", lat: "", lon: "", value: "" });
  }

  function handleSetActiveLocation(event: ChangeEvent<HTMLInputElement>) {
    setActiveLocation(event.target.value);
  }

  const items =
    (t("dashboard.navbar.locations", {
      returnObjects: true,
    }) as Array<{ name: string; value: string; lat: string; lon: string }>) ||
    [];

  return (
    <TextField
      variant="outlined"
      select
      size="small"
      sx={{
        width: "300px",
        textTransform: "capitalize",
      }}
      value={activeLocation}
      onChange={handleSetActiveLocation}
      label={t("dashboard.navbar.label")}
      name="selectLocation"
    >
      {items.map((item) => (
        <MenuItem
          key={item.name}
          value={item.value}
          sx={{ textTransform: "capitalize" }}
          onClick={() =>
            handleClick({
              name: item.name,
              value: item.value,
              lat: item.lat,
              lon: item.lon,
            })
          }
        >
          {item.name}
        </MenuItem>
      ))}
    </TextField>
  );
}

export default NavbarSelect;
