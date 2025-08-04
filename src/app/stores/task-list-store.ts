import { signalStore, withState } from '@ngrx/signals';
import { Task } from '../components/task-card/task-card';

type TaskListState = {
  todos: Array<Task>;
  inProgresses: Array<Task>;
  dones: Array<Task>;
};

const initialState: TaskListState = {
  todos: [],
  inProgresses: [],
  dones: [],
};

export const TaskListStore = signalStore(withState(initialState));
