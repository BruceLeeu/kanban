import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TaskListStore } from '../../stores/task-list-store';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskDialog } from '../add-task-dialog/add-task-dialog';

@Component({
  selector: 'app-taskbar',
  imports: [MatButtonModule],
  providers: [TaskListStore],
  templateUrl: './taskbar.html',
  styleUrl: './taskbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Taskbar {
  readonly store = inject(TaskListStore);
  readonly dialog = inject(MatDialog);

  openAddTaskDialog() {
    this.dialog.open(AddTaskDialog);
  }
}
