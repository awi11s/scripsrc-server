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

export const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

export const Element = styled.div`
    display: flex;
`;

export const Header = styled.div`
    text-align: center;
    margin: auto;
`;
