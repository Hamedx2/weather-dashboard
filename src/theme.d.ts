import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeBackground {
    page?: string;
    loginImage?: string;
    weatherCard?: string;
    card?: string;
    loginCard?: string;
  }
  interface TypeText {
    chart?: string;
  }
}
