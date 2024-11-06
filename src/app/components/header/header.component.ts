import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatFormFieldModule, MatInputModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() searchEvent = new EventEmitter<string>();

  private isInputElement(
    target: EventTarget | null
  ): target is HTMLInputElement {
    return target !== null && (target as HTMLInputElement).value !== undefined;
  }

  onSearch(event: Event) {
    if (this.isInputElement(event.target)) {
      this.searchEvent.emit(event.target.value);
    }
  }
}
