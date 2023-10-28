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
    <input type="text" #newTodo (keyup.enter)="onAdd(newTodo)" />
    <button (click)="onAdd(newTodo)">Add</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTodoComponent {
  @Output() add = new EventEmitter<string>();

  onAdd(el: HTMLInputElement): void {
    this.add.emit(el.value);
    el.value = '';
  }
}
