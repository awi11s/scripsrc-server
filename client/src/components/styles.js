import styled from "styled-components";

export const Input = styled.input.attrs({
  type: "text",
})`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 4px;
  margin: 1em;
  padding: 1em;
`;

export const ContentBtn = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const Element = styled.div`
    display: flex;
    margin: 0;
`;

export const Header = styled.div`
    display: inline-block;
    justify-content: center;
`;
