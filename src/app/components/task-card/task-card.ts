import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

export interface Task {
  title: string;
  content: string;
  status: 'todo' | 'inProgress' | 'done';
}

@Component({
  selector: 'app-task-card',
  imports: [MatCardModule, MatChipsModule],
  templateUrl: './task-card.html',
  styleUrl: './task-card.scss',
})
export class TaskCard {
  public title = input.required<string>();
  public status = input<Task['status']>('todo');
}
