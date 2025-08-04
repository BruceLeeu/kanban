import { Component } from '@angular/core';
import { Taskbar } from '../../components/taskbar/taskbar';

@Component({
  selector: 'app-kanban',
  imports: [Taskbar],
  templateUrl: './kanban.html',
  styleUrl: './kanban.scss',
})
export class Kanban {}
