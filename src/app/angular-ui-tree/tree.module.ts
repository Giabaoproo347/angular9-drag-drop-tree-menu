import './rxjs-imports';

import { NgModule } from '@angular/core';
import { TreeComponent } from './tree.component';
import { TreeInternalComponent } from './tree-internal.component';
import { CommonModule } from '@angular/common';
import { TreeService } from './tree.service';
import {NodeDraggableDirective} from 'ng2-tree/src/draggable/node-draggable.directive';
import {NodeEditableDirective} from 'ng2-tree/src/editable/node-editable.directive';
import {NodeMenuComponent} from 'ng2-tree/src/menu/node-menu.component';
import {SafeHtmlPipe} from 'ng2-tree/src/utils/safe-html.pipe';
import {NodeDraggableService} from 'ng2-tree/src/draggable/node-draggable.service';
import {NodeMenuService} from 'ng2-tree/src/menu/node-menu.service';

@NgModule({
  imports: [CommonModule],
  declarations: [
    NodeDraggableDirective,
    TreeComponent,
    NodeEditableDirective,
    NodeMenuComponent,
    TreeInternalComponent,
    SafeHtmlPipe
  ],
  exports: [TreeComponent],
  providers: [NodeDraggableService, NodeMenuService, TreeService]
})
export class TreeModule {}
