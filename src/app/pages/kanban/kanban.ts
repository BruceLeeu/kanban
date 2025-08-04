import { Component } from '@angular/core';
import { Taskbar } from '../../components/taskbar/taskbar';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-kanban',
  imports: [Taskbar, MatCardModule],
  templateUrl: './kanban.html',
  styleUrl: './kanban.scss',
})
export class Kanban {}
