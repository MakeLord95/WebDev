import AddTask from "./components/AddTask.js";
import TaskList from "./components/TaskList.js";
import { TasksProvider } from "./components/TasksContext.js";

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
