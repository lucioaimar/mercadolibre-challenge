import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="flex">
    <button
      class="bg-gray-200 disabled:opacity-50 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l"
      (click)="previous()"
      [disabled]="currentPage === 1"
    >
      Anterior
    </button>
    <div class="flex gap-2">
      <button
        class="bg-gray-200 disabled:opacity-50 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4"
        *ngFor="let pageNumber of [].constructor(pageTotal); let i = index"
        (click)="goToPage(i + 1)"
        [disabled]="currentPage === i + 1"
      >
        {{ i + 1}}
      </button>
    </div>
    <button
      class="bg-gray-200 disabled:opacity-50 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r"
      (click)="next()"
      [disabled]="currentPage === pageTotal"
    >
      Siguiente
    </button>
  </div>`,
  styles: [],
})
export class PaginatorComponent {
  @Input() currentPage: number = 1;
  @Input() pageTotal: number = 1;
  @Output() pageChange = new EventEmitter<number>();

  next() {
    this.currentPage++;
    this.pageChange.emit(this.currentPage);
  }

  previous() {
    this.currentPage--;
    this.pageChange.emit(this.currentPage);
  }

  goToPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.pageChange.emit(this.currentPage);
  }
}
