import React, { useEffect } from "react";
import fetcher from "../api/axios.config";

const CompletedTask = () => {
  useEffect(() => {
    fetcher
      .get("http://localhost:5000/task")
      .then((res) => console.log(res.data));
  }, []);
  return (
    <div>
      <h1>completed task</h1>
    </div>
  );
};

export default CompletedTask;
