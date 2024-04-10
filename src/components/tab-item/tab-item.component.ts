import { Component, Input, TemplateRef } from '@angular/core';
import { Page } from '../../types/page';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-tab-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './tab-item.component.html',
  styleUrl: './tab-item.component.css'
})
export class TabItemComponent {
  @Input() page!: Page;
  @Input() isActive: boolean = false;
}
