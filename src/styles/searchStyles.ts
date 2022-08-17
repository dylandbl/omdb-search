import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const SearchContainer = styled.div``;

export const ErrorDiv = styled.div`
  height: 21px;
  margin-bottom: 4px;
  text-align: center;
  color: red;
  font-weight: 500;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const CustomButton = styled(Button)`
  width: 128px;
`;
