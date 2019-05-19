import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';

import "./styles.css";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Cell = styled.div`
  border: 1px solid black;
  padding:5px;
  ${props => props.size && 
  css`
    flex: props.size;
  `};
`;

const Tile = ({title, body, size}) => (
  <Cell size={size}>
    <h1>{title}</h1>
    <p>{body}</p>
  </Cell>
)

const data = [
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
]

function App() {
  return (
    <div className="App">
      <Container>
        {data.map(t => 
          <Tile 
            title={`Tile ${t}`}
            body='Some interesting text goes here'
          />
        )}
      </Container>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
