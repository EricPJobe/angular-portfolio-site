import { Component, EventEmitter, Output } from '@angular/core';
import { TreeNode } from '../../types/page';
import { TreeComponent } from '../tree/tree.component';

@Component({
  selector: 'app-education-sidebar',
  standalone: true,
  imports: [TreeComponent],
  templateUrl: './education-sidebar.component.html',
  styleUrl: './education-sidebar.component.css'
})
export class EducationSidebarComponent {
  @Output() pageSelected = new EventEmitter<TreeNode>();

  nodes: TreeNode[] = [
    {
      ident: 'education',
      name: 'Education',
      children: [
        { ident: 'phd', name: 'Ph.D. - The University of Chicago' },
        { ident: 'masters', name: 'M.A. - The University of Chicago' },
        { ident: 'bachelors', name: 'B.A. - Oklahoma Baptist University' },
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
