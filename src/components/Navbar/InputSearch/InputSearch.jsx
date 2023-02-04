import { useState, useEffect } from "react";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import ModalCard from "./../../ModalCard/ModalCard";
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "10ch",
      "&:focus": {
        width: "25ch",
      },
    },
  },
}));

function InputSearch() {
  const [pokeData, setPokeData] = useState([]);
  const [query, setQuery] = useState("");
  const [activModal, setActivModal] = useState(false);

  return (
    <form>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={(event) => setQuery(event.target.value)}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            if (query.length > 0) {
              fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`)
                .then((res) => res.json())
                .then((data) => {
                  setPokeData(data);
                  activModal ? setActivModal(false) : setActivModal(true);
                })
                .catch((err) => console.error(err));
            }
          }
        }}
      />
      <ModalCard activate={activModal} pokeData={pokeData} />
    </form>
  );
}
export default InputSearch;
