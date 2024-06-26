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
  @Output() pageSelected = new EventEmitter<TreeNode>();

  nodes: TreeNode[] = [
    {
      ident: 'employment',
      name: 'Employment history',
      children: [
        { ident: 'poetic', name: 'Poetic Digital' },
        { ident: 'privily', name: 'Privily.io' },
        { ident: 'apache', name: 'Apache Corp.' },
      ],
    },
  ];

  handleTreeEvent() {
    console.log("Tree Event");
  }

  selectPage(node: TreeNode): void {
    console.log("Sidebar pageSelect: " + node.name);
    // this.pageSelected.emit(node);
  }
}
