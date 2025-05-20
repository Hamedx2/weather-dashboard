import { Box, Stack, Typography } from "@mui/material";

function WeatherCard({
  day,
  iconName,
  degree,
}: {
  day: string;
  iconName: string;
  degree: number;
}) {
  const cardImageSrc = `/images/dashboard/icons/${iconName}.png`;
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={4}
      bgcolor="background.weatherCard"
      sx={{
        width: "100px",
        height: "260px",
        borderRadius: "24px",
      }}
    >
      <Typography
        variant="h6"
        sx={(theme) => ({
          paddingBottom: "10px",
          borderBottom: "2px solid",
          borderImage: `linear-gradient(to left, ${theme.palette.background.weatherCard}, #7e7e7e, ${theme.palette.background.weatherCard}) 1`,
        })}
      >
        {day}
      </Typography>
      <Box
        component="img"
        alt="weather condition image"
        src={cardImageSrc}
        width="80%"
      />
      <Typography variant="h6">{`${degree}°C`}</Typography>
    </Stack>
  );
}

export default WeatherCard;
