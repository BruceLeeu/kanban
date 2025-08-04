import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TaskListStore } from '../../stores/task-list-store';

@Component({
  selector: 'app-taskbar',
  imports: [MatButtonModule],
  providers: [TaskListStore],
  templateUrl: './taskbar.html',
  styleUrl: './taskbar.scss',
})
export class Taskbar {
  readonly store = inject(TaskListStore);
}
