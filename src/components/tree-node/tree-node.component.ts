import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TreeNode } from '../../types/page';

@Component({
  selector: 'app-tree-node',
  standalone: true,
  imports: [],
  templateUrl: './tree-node.component.html',
  styleUrl: './tree-node.component.css'
})
export class TreeNodeComponent {
  @Input() node!: TreeNode;
  @Output() toggle = new EventEmitter<void>();
}
