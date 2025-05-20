import { grey } from "@mui/material/colors";

const lightPalette = {
  background: {
    page: "#F3FAFE",
    loginImage: "#D3E1E7",
    loginCard: "#fff",
    card: "#E1E9EE",
    weatherCard: "#CDD9E0",
  },
  text: {
    primary: "#003464",
    secondary: "#BBC1C4",
    badge: "#3D4852",
    chart: grey[900],
  },
};

const darkPalette = {
  background: {
    page: "#151D32",
    loginImage: "#404961",
    card: "#292F45",
    weatherCard: "#3F4861",
    loginCard: "#292F45",
  },
  text: {
    primary: "#F3F4F7",
    secondary: "#757575",
    badge: grey[300],
    chart: grey[100],
  },
};

export { lightPalette, darkPalette };
