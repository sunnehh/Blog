import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paging-component',
  templateUrl: './paging-component.component.html',
  styleUrls: ['./paging-component.component.css'],
})
export class PagingComponent implements OnInit {
  @Input() page!: number;
  @Output() newPage = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  pageClick(currentPage: number) {
    this.newPage.emit(currentPage);
  }

  nextClick() {
    this.newPage.emit(this.page + 1);
  }

  prevClick() {
    this.newPage.emit(this.page - 1 < 0 ? 0 : this.page - 1);
  }
}
