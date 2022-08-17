import { Button, TextField } from "@mui/material";
import { FormEvent, useEffect, useRef, useState } from "react";
import { URI, URL_TOKEN } from "../constants/api";
import { ErrorDiv, Form, SearchContainer } from "../styles/searchStyles";
import { PosterList } from "./Poster";

interface IMoveResult {
  Poster: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export const Search = () => {
  const textRef = useRef<HTMLInputElement>(null);
  const [posterList, setPosterList] = useState<IMoveResult[]>([]);
  const [initialSearchComplete, setInitialSearchComplete] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    const query = textRef.current?.value.trim();
    if (query === "") return;
    const queryUrl = `${URI}?s=${query}&type=movie${URL_TOKEN}`;

    // Returns results from page one by default. One page includes 10 items.
    const result = await fetch(queryUrl)
      .then((res) => res.json())
      .then((data) => data);

    console.log(result);

    if (result.Response === "True") {
      setError("");
      setPosterList(result.Search);
      setInitialSearchComplete(true);
    } else {
      setError(result.Error);
    }
  };

  useEffect(() => {
    if (initialSearchComplete) {
      console.log(textRef.current);
    }
  }, [initialSearchComplete, textRef]);

  return (
    <SearchContainer>
      <ErrorDiv>{error}</ErrorDiv>
      <Form onSubmit={(e) => handleSearch(e)}>
        <TextField inputRef={textRef} placeholder="Search a movie title..." />
        <Button onClick={(e) => handleSearch(e)} variant="contained">
          Search
        </Button>

        <PosterList posters={posterList} />
      </Form>
    </SearchContainer>
  );
};
