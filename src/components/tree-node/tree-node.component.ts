import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TreeNode } from '../../types/page';
import { SelectPageService } from '../../services/select-page.service';

@Component({
  selector: 'app-tree-node',
  standalone: true,
  imports: [],
  templateUrl: './tree-node.component.html',
  styleUrl: './tree-node.component.css'
})
export class TreeNodeComponent {
  @Input() node!: TreeNode;
  @Output() nodeClick: EventEmitter<any> = new EventEmitter();

  constructor(private selectPageService: SelectPageService) {}

  handleClick() {
    if(!this.node.children) {
      console.log("Node clicked, adding page: " + this.node.ident);
      this.selectPageService.addPage(this.node);
    } else {
      console.log("Node clicked, expanding: " + this.node.ident);
      this.nodeClick.emit(this.node);
    }
  }
}
