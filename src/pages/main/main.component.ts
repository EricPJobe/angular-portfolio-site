import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Page } from '../../types/page';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgFor],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  @Input() openPages: Page[] = [];
  @Output() onClose = new EventEmitter<string>();

  closePage(page: string) {
    this.onClose.emit(page);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  } 
}
