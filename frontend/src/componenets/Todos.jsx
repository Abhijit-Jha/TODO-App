
export function Todos({todo}) {

  return (
    <div>
      {todo.map(function(todos) {
        return (
          <div>
            <h1>{todos.title}</h1>
            <h3>{todos.description}</h3>
            <button>
              {todos.completed === true ? "Completed" : "Mark as Completed"}
            </button>
            <button onClick={deleteTodo}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
