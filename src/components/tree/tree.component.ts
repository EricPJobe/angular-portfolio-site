import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
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
  @Output() treeEvent: EventEmitter<any> = new EventEmitter();

  node: TreeNode = {
    ident: '',
    name: '',
  };

  handleNodeEvent(node: TreeNode) {
    if(node.children) {
      node.expanded = !node.expanded;
    } 
  }
}
