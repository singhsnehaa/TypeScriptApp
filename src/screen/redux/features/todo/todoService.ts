const getTodos = async () => {
  const data = await fetch('https://dummyjson.com/todos?limit=5');
  const response = await data.json();
  return response;
};

const todoService = {getTodos};
export default todoService;
