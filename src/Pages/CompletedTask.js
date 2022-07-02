import React, { useEffect, useState } from "react";


const CompletedTask = () => {
  const [task, setTask] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/get-task")
      .then((res) => res.json())
      .then((data) => setTask(data));
  }, []);
  return (
    <div className=" mt-6">
      <h1 className="text-3xl font-bold  text-center text-primary mb-3">
        Completed task
      </h1>

      <div class="overflow-x-auto  px-32 mt-16 flex justify-center items-center">
        <table class="table w-50%">
          <thead>
            <tr>
              <th>Task</th>
            </tr>
          </thead>
          {task.map((t) => (
            <tbody key={t._id}>
              <tr>
                <td>{t.task}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default CompletedTask;
