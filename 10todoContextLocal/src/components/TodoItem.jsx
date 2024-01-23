import React, { useState } from "react";
import {  useTodo } from "../context";

function TodoItem({ todo1 }) {
    
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo1.todo);
    const { updateTodo, deleteTodo, toggleCompleted } = useTodo();
    
    const editTodo = (e) => {
      if (!todoMsg) return;
      updateTodo(todo1.id, { ...todo1, todo: todoMsg });
      setIsTodoEditable(false);
    }

    const toggleComplete = (e) => {
      toggleCompleted(todo1.id);
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo1.isCompleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo1.isCompleted}
                onChange={toggleComplete}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo1.isCompleted ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo1.isCompleted) return;

                    if (isTodoEditable) {
                        console.log("kya karis")
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={(todo1.isCompleted)}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo1.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
