/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTodos } from "../redux/slices/todoSlice";

export default function PhotoList() {
  const dispatch = useDispatch();
  const { todos } = useSelector(state => state.todo);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        dispatch(setTodos(data));
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
