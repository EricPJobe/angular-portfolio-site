import { Component, EventEmitter, Output } from '@angular/core';
import { TreeNode } from '../../types/page';
import { TreeComponent } from '../tree/tree.component';

@Component({
  selector: 'app-languages-sidebar',
  standalone: true,
  imports: [TreeComponent],
  templateUrl: './languages-sidebar.component.html',
  styleUrl: './languages-sidebar.component.css'
})
export class LanguagesSidebarComponent {
  @Output() pageSelected = new EventEmitter<TreeNode>();

  nodes: TreeNode[] = [
    {
      ident: 'languages',
      name: 'Languages',
      children: [
        { ident: 'hebrew', name: 'Hebrew' },
        { ident: 'aramaic', name: 'Aramaic' },
        { ident: 'greek', name: 'Greek' },
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
