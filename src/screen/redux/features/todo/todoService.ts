
const getTodos = async () => {
    const data = await fetch('https://dummyjson.com/todos?limit=4');
    const response = await data.json();
    return response;
  };
const addTodo = async (body:any) => {
    const data = await fetch('https://dummyjson.com/todos/add',{
      method: 'POST',
      body: JSON.stringify(body)
    });
    const response = await data.json();
    return response;
  };

  const deleteTodo = async (todoId:number)=> {
    const data = await fetch(`https://dummyjson.com/todos/${todoId}`, {
      method: 'DELETE',
    });
    const response = await data.json();
    return response;
  };

const todoService = {getTodos,addTodo,deleteTodo};
export default todoService;
