import { Component, EventEmitter, Output } from '@angular/core';
import { TreeNode } from '../../types/page';
import { TreeComponent } from '../tree/tree.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [TreeComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Output() pageSelected = new EventEmitter<string>();

  nodes: TreeNode[] = [
    {
      name: 'Employment history',
      children: [
        { name: 'Poetic Digital' },
        { name: 'Privily.io' },
        { name: 'Apache Corp.' },
      ],
    },
    {
      name: 'Education',
      children: [
        { name: 'Ph.D. - The University of Chicago' },
        { name: 'M.A. - The University of Chicago' },
        { name: 'B.A. - Oklahoma Baptist University' },
      ],
    },
  ];
  selectPage(page: string): void {
    this.pageSelected.emit(page);
  }
}
