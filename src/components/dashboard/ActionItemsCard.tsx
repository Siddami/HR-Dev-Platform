import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { getPriorityColor } from "../../mockdata/priorities";

interface Task {
  id: number;
  title: string;
  priority: "high" | "medium" | "low";
  leftChecked: boolean;
  rightChecked: boolean;
}

export default function ActionItemsCard() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Approve 3 leave requests",
      priority: "high",
      leftChecked: false,
      rightChecked: false,
    },
    {
      id: 2,
      title: "Schedule interviews for Marketing position",
      priority: "medium",
      leftChecked: true,
      rightChecked: false,
    },
    {
      id: 3,
      title: "Send benefits enrollment reminder",
      priority: "low",
      leftChecked: false,
      rightChecked: false,
    },
  ]);

  const toggleLeft = (id: number) =>
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, leftChecked: !t.leftChecked } : t,
      ),
    );

  const toggleRight = (id: number) =>
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, rightChecked: !t.rightChecked } : t,
      ),
    );

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold mb-4">Action Items</h3>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center gap-3">
            <input
              type="checkbox"
              className="mt-1 w-4 h-4 text-black border-gray-300 rounded focus:ring-black accent-black"
              checked={task.leftChecked}
              onChange={() => toggleLeft(task.id)}
            />
            <div className="flex-1 flex justify-between items-center">
              <p
                className={
                  task.leftChecked
                    ? "text-gray-400 line-through"
                    : "text-gray-700"
                }
              >
                {task.title}
              </p>
              <div className="flex items-center gap-3">
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-md capitalize ${getPriorityColor(task.priority)}`}
                >
                  {task.priority}
                </span>
                <div
                  onClick={() => toggleRight(task.id)}
                  className={`w-5 h-5 rounded-full border flex items-center justify-center cursor-pointer transition-colors ${
                    task.rightChecked
                      ? "bg-green-500 border-green-500"
                      : "border-gray-300 hover:border-green-500"
                  }`}
                >
                  {task.rightChecked && (
                    <FaCheck className="text-white text-xs" />
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button className="mt-6 w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/80 transition">
        View All Tasks
      </button>
    </div>
  );
}
