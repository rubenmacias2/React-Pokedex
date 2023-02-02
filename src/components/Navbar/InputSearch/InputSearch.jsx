import { useState } from "react";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

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
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        fetch(
          `https://pokeapi.co/api/v2/pokemon/${document
            .getElementById("search")
            .value.toLowerCase()}`
        )
          .then((res) => res.json())
          .then((data) => {
            setPokeData(data);
          })
          .catch((err) => console.error(err));
        console.log(pokeData);
      }}
    >
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        id="search"
      />
    </form>
  );
}
export default InputSearch;
