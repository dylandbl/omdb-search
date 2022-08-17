import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const PosterListContainer = styled.div`
  min-height: 640px;
  // four gaps + five posters.
  width: calc(12px * 4 + 170px * 5);

  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const PosterContainer = styled.div`
  width: 170px;
`;

export const PosterImage = styled.img`
  margin-bottom: -4px;
  text-align: center;
  // min-height required for situations where the image isn't shown.
  min-height: 250px;
  height: 250px;
  width: 170px;

  border-left: 2px solid #1976d2;
  border-top: 2px solid #1976d2;
  border-right: 2px solid #1976d2;
  border-radius: 3px 3px 0 0;
`;

export const PosterFooter = styled(Button)`
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: 0.85rem;
  width: 100%;
  text-transform: none;
  text-align: left;
  display: inline;

  padding: 8px;
  border-radius: 0 0 3px 3px;
`;
