import { IMovieResult } from "../scenes/Search";
import {
  PosterImage,
  PosterListContainer,
  PosterFooter,
  PosterContainer,
} from "../styles/posterStyles";

interface PosterListProps {
  posters: IMovieResult[];
}

interface PosterProps {
  title: string;
  posterPath: string;
  release: string;
}

export const Poster = (props: PosterProps) => {
  const { title, posterPath, release } = props;
  return (
    <PosterContainer>
      <PosterImage
        src={posterPath}
        alt={"Theatrical poster for '" + title + "'"}
        title={title}
      />
      <PosterFooter variant="contained" title={title}>
        {title}
        <br />({release})
      </PosterFooter>
    </PosterContainer>
  );
};

export const PosterList = (props: PosterListProps) => {
  const { posters } = props;

  return (
    <PosterListContainer>
      {posters.map((movie, index) => (
        <Poster
          key={index + "-" + movie.imdbID}
          title={movie.Title}
          posterPath={movie.Poster}
          release={movie.Year}
        />
      ))}
    </PosterListContainer>
  );
};
