import { Button, TextField } from "@mui/material";
import { FormEvent, useRef, useState } from "react";
import { URI, URL_TOKEN } from "../constants/api";
import { Body, ErrorDiv, Form, SearchContainer } from "../styles/searchStyles";
import { PosterList } from "../components/Poster";

export interface IMovieResult {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export const Search = () => {
  const textRef = useRef<HTMLInputElement>(null);
  const [posterList, setPosterList] = useState<IMovieResult[]>([]);
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

    if (result.Response === "True") {
      setError("");
      setPosterList(result.Search);
    } else {
      setError(result.Error);
    }
  };

  return (
    <Body>
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
    </Body>
  );
};
