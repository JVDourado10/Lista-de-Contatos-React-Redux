import styled from "styled-components";

export const Novo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  align-items: center;

  & h3 {
    color: brown;
  }

  & form {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    & label {
      font-weight: bold;
      color: gray;
    }

    & input {
      margin-right: 1rem;
      padding-left: .5rem;
      border-radius: 4px;
      height: 36px;
      border: 2px solid gray
    }

    & button {
      cursor: pointer;
      border-radius: 4px;
      padding: .5rem 1rem;
      border-color: green;
      background-color: green;
      color: white;
    }
  }
`