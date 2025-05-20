import { Stack } from "@mui/material";
import TodayCardInfo from "./TodayCardInfo";
import TodayCardIcon from "./TodayCardIcon";

function TodayCard() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      height="100%"
      sx={{
        padding: "20px 30px",
      }}
    >
      <TodayCardInfo />
      <TodayCardIcon />
    </Stack>
  );
}

export default TodayCard;
