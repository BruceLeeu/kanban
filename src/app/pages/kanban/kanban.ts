import { Component, signal } from '@angular/core';
import { Taskbar } from '../../components/taskbar/taskbar';
import { MatCardModule } from '@angular/material/card';
import { Task, TaskCard } from '../../components/task-card/task-card';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kanban',
  imports: [Taskbar, MatCardModule, TaskCard, DragDropModule],
  templateUrl: './kanban.html',
  styleUrl: './kanban.scss',
})
export class Kanban {
  public todos = signal<Array<Task>>([
    {
      title: 'Mijn Taak Titel',
      content: 'Dit moet er gebeuren',
      status: 'todo',
    },
    {
      title: 'Mijn Tweede Taak Titel',
      content: 'Dit moet er ook nog gebeuren',
      status: 'todo',
    },
  ]);
  public inProgresses = signal<Array<Task>>([
    {
      title: 'DE Taak Titel',
      content: 'Dit moet er gebeuren',
      status: 'todo',
    },
    {
      title: 'DE Tweede Taak Titel',
      content: 'Dit moet er ook nog gebeuren',
      status: 'todo',
    },
  ]);
  public dones = signal<Array<Task>>([
    {
      title: 'EEN Taak Titel',
      content: 'Dit moet er gebeuren',
      status: 'todo',
    },
    {
      title: 'EEN Tweede Taak Titel',
      content: 'Dit moet er ook nog gebeuren',
      status: 'todo',
    },
  ]);

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
