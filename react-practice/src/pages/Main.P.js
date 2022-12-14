/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { string } from "prop-types";
import { useEffect, useState } from "react";

export default function Main() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => res.json())
      .then(data => {
        console.log(data);

        const newData = data.map(el => {
          return {
            ...el,
            test: Math.round(Math.random()),
          };
        });

        console.log(newData);

        setTodos(() => newData);
      });
  }, []);
  return (
    <div css={mainCss}>
      <ul>
        {todos.map(el => (
          <li key={el.id}>
            <div>{el.id}</div>
            <div>{el.title}</div>
            <div>{String(el.completed)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mainCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
