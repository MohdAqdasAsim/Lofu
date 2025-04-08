"use client";
import { useEffect, useState } from "react";

interface Task {
  text: string;
  completed: boolean;
}

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  // Load tasks from localStorage
  useEffect(() => {
    const storedTasks = localStorage.getItem("lofu-tasks");
    if (storedTasks) setTasks(JSON.parse(storedTasks));
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("lofu-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (index: number) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <section className="w-full max-w-2xl bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg text-textColor">
      <h2 className="text-xl font-semibold mb-4">📋 Study Checklist</h2>

      <ul className="space-y-3">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`flex items-center justify-between px-4 py-2 rounded-xl cursor-pointer bg-white/10 ${
              task.completed ? "opacity-60 line-through" : ""
            }`}
          >
            <span onClick={() => toggleTask(index)} className="flex-1">
              {task.text}
            </span>
            <button
              onClick={() => removeTask(index)}
              className="text-red-400 hover:text-red-300 ml-4"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex gap-2">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg bg-white/10 text-textColor focus:outline-none"
          type="text"
          placeholder="Add a task..."
        />
        <button
          onClick={addTask}
          className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-lg text-white"
        >
          Add
        </button>
      </div>
    </section>
  );
};

export default TaskList;
