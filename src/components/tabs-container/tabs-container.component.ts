import { NgClass, NgFor, NgTemplateOutlet } from '@angular/common';
import { AfterContentInit, Component, ContentChildren, EventEmitter, Output, QueryList } from '@angular/core';
import { TabItemComponent } from '../../components/tab-item/tab-item.component';

@Component({
  selector: 'app-tabs-container',
  standalone: true,
  imports: [NgFor, TabItemComponent, NgClass, NgTemplateOutlet],
  templateUrl: './tabs-container.component.html',
  styleUrl: './tabs-container.component.css'
})
export class TabsContainerComponent implements AfterContentInit {
  @ContentChildren(TabItemComponent) tabs!: QueryList<TabItemComponent>;
  @Output() closePage: EventEmitter<any> = new EventEmitter<any>();
  activePageIndex: number = -1;

  ngAfterContentInit() {
    this.activePageIndex = 0;
  }

  activateTab(tab: TabItemComponent) {
    this.activePageIndex = this.tabs.toArray().indexOf(tab);
  }

  handleClosePage(pageName: string) {
    this.closePage.emit(pageName)
  }
}
