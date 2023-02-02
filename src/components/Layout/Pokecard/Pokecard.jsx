import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { useState, useEffect } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const typeColors = {
  electric: "#FFEA70",
  normal: "#B09398",
  fire: "#FF675C",
  water: "#0596C7",
  ice: "#AFEAFD",
  rock: "#999799",
  flying: "#7AE7C7",
  grass: "#4A9681",
  psychic: "#FFC6D9",
  ghost: "#561D25",
  bug: "#A2FAA3",
  poison: "#795663",
  ground: "#D2B074",
  dragon: "#DA627D",
  steel: "#1D8A99",
  fighting: "#2F2F2F",
  default: "#2A1A1F",
};

function Pokecard({ url }) {
  const [pokeName, setPokeName] = useState("");
  const [pokeSprite, setPokeSprite] = useState("");
  const [pokeType1, setPokeType1] = useState("");
  const [pokeType2, setPokeType2] = useState("");
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPokeName(data.name);
        setPokeSprite(data.sprites);
        setPokeType1(data.types[0].type);
        setPokeType2(data.types[1].type);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <Grid xs={4} md={4}>
      <Item>
        <div
          style={{
            textAlign: "center",
            minheight: "100px",
            maxWidth: "100px",
            borderRadius: "100%",
            background: `radial-gradient(${typeColors[pokeType1.name]} 35%,
              ${
                pokeType2.name
                  ? typeColors[pokeType2.name]
                  : typeColors[pokeType1.name]
              } 33%)`,
          }}
        >
          <img
            src={pokeSprite.front_default}
            style={{
              height: "100px",
            }}
          />
        </div>
        <h3>{pokeName}</h3>
      </Item>
    </Grid>
  );
}

export default Pokecard;
