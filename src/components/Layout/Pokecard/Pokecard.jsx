import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { useState, useEffect } from "react";
import ModalCard from "../../ModalCard/ModalCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const typeColors = {
  fairy: "#fcece3",
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
  const [pokeTypes, setPokeTypes] = useState("");
  const [pokeData, setPokeData] = useState([]);
  const [activModal, setActivModal] = useState(false);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPokeName(data.name);
        setPokeSprite(data.sprites);
        setPokeTypes(data.types.map((e) => e.type.name));
        setPokeData(data);
      })
      .catch((err) => console.error(err));
  }, [url]);
  return (
    <Grid xs={4} md={4}>
      <Item
        onClick={() =>
          activModal ? setActivModal(false) : setActivModal(true)
        }
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "10px",
            background: `radial-gradient(${typeColors[pokeTypes[0]]} 40%,
              ${
                pokeTypes[1]
                  ? typeColors[pokeTypes[1]]
                  : typeColors[pokeTypes[0]]
              } 33%)`,
            borderRadius: "100%",
            minWidth: "120px",
            minHeight: "120px",
          }}
        >
          <img
            src={pokeSprite.front_default}
            style={{
              height: "100px",
            }}
          />
        </div>
        <ModalCard activate={activModal} pokeData={pokeData} />
        <h3>{pokeName.charAt(0).toUpperCase() + pokeName.substring(1)}</h3>
      </Item>
    </Grid>
  );
}

export default Pokecard;
