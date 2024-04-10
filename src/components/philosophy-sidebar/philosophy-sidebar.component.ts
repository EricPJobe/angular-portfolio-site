import { Component, EventEmitter, Output } from '@angular/core';
import { TreeNode } from '../../types/page';
import { TreeComponent } from '../tree/tree.component';

@Component({
  selector: 'app-philosophy-sidebar',
  standalone: true,
  imports: [TreeComponent],
  templateUrl: './philosophy-sidebar.component.html',
  styleUrl: './philosophy-sidebar.component.css'
})
export class PhilosophySidebarComponent {
  @Output() pageSelected = new EventEmitter<TreeNode>();

  nodes: TreeNode[] = [
    {
      ident: 'philosophy',
      name: 'Philosophy',
      children: [
        { ident: 'hegel', name: 'G. W. F. Hegel' },
        { ident: 'schelling', name: 'F. J. W. Schelling' },
        { ident: 'freud', name: 'Sigmund Freud' },
        { ident: 'lacan', name: 'Jacques Lacan' },
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
