import { TextField } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [posterList, setPosterList] = useState<IMovieResult[]>([]);
  const [error, setError] = useState("");

  const handleSearch = useCallback(async () => {
    if (searchQuery === "") {
      setError("");
      setPosterList([]);
      return;
    }

    const trimmedQuery = searchQuery.trim();
    const queryUrl = `${URI}?s=${trimmedQuery}&type=movie${URL_TOKEN}`;
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
  }, [searchQuery]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  return (
    <Body>
      <SearchContainer>
        <ErrorDiv>{error}</ErrorDiv>
        <Form>
          <TextField
            onChange={(e) => setSearchQuery(e.target.value.trim())}
            placeholder="Search a movie title..."
          />
          <PosterList posters={posterList} />
        </Form>
      </SearchContainer>
    </Body>
  );
};
