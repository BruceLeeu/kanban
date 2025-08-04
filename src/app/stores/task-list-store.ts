import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Task } from '../components/task-card/task-card';

type TaskListState = {
  todo: Array<Task>;
  inProgress: Array<Task>;
  done: Array<Task>;
};

const initialState: TaskListState = {
  todo: [],
  inProgress: [],
  done: [],
};

export const TaskListStore = signalStore(
  withState(initialState),
  withMethods((store) => ({
    addTask(newTask: Task): void {
      patchState(store, (state) => {
        state[newTask.status].push(newTask);
        return state;
      });
    },
  }))
);
