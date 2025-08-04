import { Component, inject, signal } from '@angular/core';
import { Taskbar } from '../../components/taskbar/taskbar';
import { MatCardModule } from '@angular/material/card';
import { Task, TaskCard } from '../../components/task-card/task-card';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { TaskListStore } from '../../stores/task-list-store';

@Component({
  selector: 'app-kanban',
  imports: [Taskbar, MatCardModule, TaskCard, DragDropModule],
  providers: [TaskListStore],
  templateUrl: './kanban.html',
  styleUrl: './kanban.scss',
})
export class Kanban {
  readonly store = inject(TaskListStore);

  constructor() {
    this.store.todos().push(
      {
        title: 'Mijn Taak Titel',
        content: 'Dit moet er gebeuren',
        status: 'todo',
      },
      {
        title: 'Mijn Tweede Taak Titel',
        content: 'Dit moet er ook nog gebeuren',
        status: 'todo',
      }
    );
  }

  drop(dragDropEvent: CdkDragDrop<Array<Task>>) {
    if (dragDropEvent.previousContainer === dragDropEvent.container) {
      moveItemInArray(
        dragDropEvent.container.data,
        dragDropEvent.previousIndex,
        dragDropEvent.currentIndex
      );
    } else {
      transferArrayItem(
        dragDropEvent.previousContainer.data,
        dragDropEvent.container.data,
        dragDropEvent.previousIndex,
        dragDropEvent.currentIndex
      );
    }
  }
}
