import {Component, EventEmitter, inject, Inject, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NewTaskData} from '../task/task.model';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})

export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  private taskSevice = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  onAddTask() {
    this.taskSevice.addTasks({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    }, this.userId);
    this.close.emit();
  }
}
