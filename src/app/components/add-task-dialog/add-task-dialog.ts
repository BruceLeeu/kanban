import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Task } from '../task-card/task-card';
import { MatSelectModule } from '@angular/material/select';
import { TaskListStore } from '../../stores/task-list-store';

@Component({
  selector: 'app-add-task-dialog',
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButton,
    MatSelectModule,
  ],
  providers: [TaskListStore],
  templateUrl: './add-task-dialog.html',
  styleUrl: './add-task-dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTaskDialog {
  readonly store = inject(TaskListStore);

  newTaskFormGroup = new FormGroup({
    title: new FormControl<Task['title'] | null>(null, Validators.required),
    content: new FormControl<Task['content'] | null>(null, Validators.required),
    status: new FormControl<Task['status']>('todo', Validators.required),
  });

  addTask() {
    this.store.addTask({
      title: this.newTaskFormGroup.value.title!,
      content: this.newTaskFormGroup.value.content!,
      status: this.newTaskFormGroup.value.status!,
    });
  }
}
