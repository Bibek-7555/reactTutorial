import { useEffect, useState } from 'react'
import {TodoProvider, useTodo} from './context'
import './App.css'
import TodoForm from './components/TodoForm';
import TodoItem from "./components/TodoItem";


function App() {
  const [todos, setTodos] = useState([]);
  console.log('Initial todos state:', todos);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, {id: Date.now(),...todo}])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id? todo : prevTodo))
  }

  const deleteTodo = (id) => {
    console.log("Udibaba");
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  }

  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, isCompleted: !prevTodo.isCompleted }
          : prevTodo
      )
    );
  }

  /**
   * useEffect hook to get todos from localStorage on initial render.
   * Checks if localStorage has todos, parses the JSON string to a todos array,
   * and updates the todos state with the parsed array.
   * Empty dependency array to only run on initial render.
   */
  useEffect(() => {
    const localTodos =JSON.parse(localStorage.getItem("todos"));
    console.log('Loaded todos from localStorage:', localTodos);
    if (localTodos && localTodos.length > 0) {
      setTodos(localTodos);
    }
  }, []);

  useEffect(() => {
    console.log('Saving todos to localStorage:', todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted }}>
           <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo1={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
      </TodoProvider>
  )
}

export default App
