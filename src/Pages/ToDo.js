import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import fetcher from "../api/axios.config";

const ToDo = () => {
  const [task, setTask] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const deleteTask = async (id) => {
    await fetcher.delete(`/delete-task/${id}`);
    let newTask;
    task.forEach((item, index, arr) => {
      if (index !== id) {
        newTask.push(item);
      }
      setTask(newTask);
    });
    console.log(id);
  };

  useEffect(() => {
    fetch("http://localhost:5000/get-task")
      .then((res) => res.json())
      .then((data) => setTask(data));
    console.log(task);
  });

  const onSubmit = async (data) => {
    const res = await fetcher.post("/insert-task", data);
    console.log(res);
    reset();
  };

  return (
    <div className="mt-12">
      <h1 className="flex justify-center items-center text-5xl font-bold text-primary mb-12">
        Todo List
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex  items-center justify-center"
      >
        <input
          {...register("task", { required: true })}
          placeholder="Enter Task"
          className="w-64 h-12 border border-zinc-900 rounded-lg"
        />
        {errors.task && <p>task is required.</p>}
        <input
          type="submit"
          value={"add task"}
          className="border w-24 h-12 text-primary ml-8 rounded-2xl"
        />
      </form>
      <div class="overflow-x-auto w-full px-32 mt-16">
        <table class="table w-full">
          <thead>
            <tr>
              <th>
                <label></label>
              </th>
              <th>Task</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {task.map((t) => (
            <tbody key={t._id}>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>

                <td>{t.task}</td>
                <td>
                  <button class="btn btn-ghost btn-xs">+</button>
                </td>
                <td>
                  <button
                    class="btn btn-ghost btn-xs"
                    onClick={() => deleteTask(t._id)}
                  >
                    X
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ToDo;
