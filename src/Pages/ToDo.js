import React from "react";
import { useForm } from "react-hook-form";
import fetcher from "../api/axios.config";

const ToDo = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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
    </div>
  );
};

export default ToDo;
