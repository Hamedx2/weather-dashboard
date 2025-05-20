import { Button, ButtonGroup, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

function NavbarSettingsSection({
  header,
  btn1text,
  btn2text,
  btn1icon,
  btn2icon,
  handleBtn1Click,
  handleBtn2Click,
  activeBtn,
}: {
  header: string;
  btn1text: string;
  btn2text: string;
  btn1icon: React.ReactNode | null;
  btn2icon: React.ReactNode | null;
  handleBtn1Click: () => void;
  handleBtn2Click: () => void;
  activeBtn: number;
}) {
  return (
    <Stack
      direction="column"
      sx={{
        gap: 1,
        padding: "10px 0",
        borderBottom: "1px solid",
        borderColor: "#ccc",
      }}
    >
      <Typography variant="subtitle1" color="text.primary">
        {header}
      </Typography>
      <Stack direction="row">
        <ButtonGroup fullWidth size="small">
          <Button
            onClick={handleBtn1Click}
            startIcon={btn1icon ? btn1icon : null}
            sx={{
              color: activeBtn === 1 ? "primary.main" : grey[500],
              borderColor: activeBtn === 1 ? "primary.main" : grey[500],
              "&:hover": {
                color: "primary.main",
                borderColor: "primary.main",
              },
            }}
          >
            {btn1text}
          </Button>
          <Button
            onClick={handleBtn2Click}
            startIcon={btn2icon ? btn2icon : null}
            sx={{
              color: activeBtn === 2 ? "primary.main" : grey[500],
              borderColor: activeBtn === 2 ? "primary.main" : grey[500],
              "&:hover": {
                color: "primary.main",
                borderColor: "primary.main",
              },
            }}
          >
            {btn2text}
          </Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
}

export default NavbarSettingsSection;
