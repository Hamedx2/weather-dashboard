import { Box } from "@mui/material";

function LoginImage({
  src,
  bottom,
  right,
  left,
}: {
  src: string;
  bottom: string | null;
  right: string | null;
  left: string | null;
}) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        "&::before": {
          content: '""',
          position: "absolute",
          width: "30%",
          height: "30%",
          borderRadius: "50%",
          backgroundColor: "rgba(0,0,0,0.5)",
          opacity: "0.3",
          boxShadow: "0 0 20px 10px rgba(0,0,0,0.6)",
          zIndex: 0,
          bottom: bottom ? `${Number(bottom) + 15}` + "px" : "auto",
          left: left ? `${Number(left) + 50}` + "px" : "auto",
          right: right ? `${Number(right) + 50}` + "px" : "auto",
        },
      }}
    >
      <Box
        component="img"
        src={src}
        alt="animated weather condition image"
        sx={{
          position: "absolute",
          width: "220px",
          bottom: bottom ? bottom + "px" : "auto",
          left: left ? left + "px" : "auto",
          right: right ? right + "px" : "auto",
        }}
      />
    </Box>
  );
}

export default LoginImage;
