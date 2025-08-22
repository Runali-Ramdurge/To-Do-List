import { useParams, useNavigate } from "react-router-dom";
import { getTodos } from "../utils/localstorage";

export default function TodoDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const todos = getTodos();
  const todo = todos.find((t) => t.id === id);

  if (!todo) return <p>Todo not found.</p>;

  return (
    <div>
      <h2 className="text-xl font-bold">{todo.title}</h2>
      <p className="mt-2">{todo.description}</p>
      <button
        onClick={() => navigate(-1)}
        className="mt-4 px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
      >
        Back
      </button>
    </div>
  );
}