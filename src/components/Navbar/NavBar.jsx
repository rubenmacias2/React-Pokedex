import * as React from "react";
import {
  styled,
  alpha,
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import PokeIcon from "../../assets/pokebola.png";
import InputSearch from "./InputSearch/InputSearch";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export default function Navbar() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img src={PokeIcon} style={{ width: "35px", margin: "10px" }} />
                Pokedex
              </div>
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <InputSearch />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
