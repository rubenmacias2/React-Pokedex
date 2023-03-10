import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useState, useEffect } from "react";
import Pokecard from "./Pokecard/Pokecard";
import { blueGrey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: { main: blueGrey[900] },
  },
});

export default function LayoutGrid() {
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=15"
  );
  const [pokeNext, setPokeNext] = useState("");
  const [pokeBack, setPokeBack] = useState([]);
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPokeNext(data.next);
        setPokeBack(data.previous);
        setPokeList(data.results);
      })
      .catch((err) => console.error(err));
  });

  return (
    <Container fixed>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {pokeList.map((e) => (
            <Pokecard key={e.name} url={e.url} />
          ))}
        </Grid>
      </Box>
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          style={{
            marginTop: "10px",
            marginBottom: "10px",
            marginRight: "5px",
          }}
          onClick={() => {
            setUrl(pokeBack);
          }}
        >
          Aterior
        </Button>
        <Button
          variant="contained"
          style={{ marginTop: "10px", marginBottom: "10px" }}
          onClick={() => {
            setUrl(pokeNext);
          }}
        >
          Siguiente
        </Button>
      </ThemeProvider>
    </Container>
  );
}
