import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  template: `
    <input
      type="text"
      #input
      placeholder="What needs to be done?"
      (keyup.enter)="add.emit(input.value)"
    />
    <button (click)="add.emit(input.value)">Add</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTodoComponent {
  @Output() add = new EventEmitter<string>();
}
