import { Component, Input } from '@angular/core';
import { TreeNode } from '../../types/page';
import { NgFor, NgIf } from '@angular/common';
import { TreeNodeComponent } from '../tree-node/tree-node.component';

@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [NgFor, NgIf, TreeNodeComponent],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.css'
})
export class TreeComponent {
  @Input() nodes: TreeNode[] | undefined = [];

  toggleNode(node: TreeNode): void {
    node.expanded = !node.expanded;
  }
}
