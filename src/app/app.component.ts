import {Component, OnInit, ViewChild} from '@angular/core';
import {AppService} from './app.service';
import {Ng2TreeSettings, TreeModel} from './angular-ui-tree/tree.types';

declare const alertify: any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  public settings: Ng2TreeSettings = {
    rootIsVisible: false,
    showCheckboxes: false
  };

  public disabledCheckboxesSettings: Ng2TreeSettings = {
    rootIsVisible: false,
    showCheckboxes: false,
    enableCheckboxes: false
  };

  tempsList: any;

  constructor(private appService: AppService) {
  }

  public ffs: any;

  @ViewChild('treeFFS') public treeFFS;
  @ViewChild('treeIcons') public treeIcon;

  public icons: TreeModel;


  public ngOnInit(): void {
    this.appService.getTemps().subscribe(data => {
        this.tempsList = data;
        this.ffs = this.tempsList;
      }
    );

    this.appService.getABCURL().subscribe(data2 => {
      this.icons = data2;
    });
  }

  // private static logEvent(e: NodeEvent, message: string): void {
  //   console.log(e);
  //   alertify.message(`${message}: ${e.node.value}`);
  // }

  // public onNodeRemoved(e: NodeEvent): void {
  //   AppComponent.logEvent(e, 'Removed');
  // }
  //
  // public onNodeMoved(e: NodeEvent): void {
  //   AppComponent.logEvent(e, 'Moved');
  // }
  //
  // public onNodeRenamed(e: NodeEvent): void {
  //   AppComponent.logEvent(e, 'Renamed');
  // }
  //
  // public onNodeCreated(e: NodeEvent): void {
  //   AppComponent.logEvent(e, 'Created');
  // }
  //
  // public onNodeFFSCreated(e: NodeEvent, controller): void {
  //   AppComponent.logEvent(e, 'Created');
  //   if (controller) {
  //     controller.changeNodeId(++this.lastFFSNodeId);
  //   }
  // }
  //
  // public onNodeSelected(e: NodeEvent): void {
  //   AppComponent.logEvent(e, 'Selected');
  // }
  //
  // public onNodeUnselected(e: NodeEvent): void {
  //   AppComponent.logEvent(e, 'Unselected');
  // }
  //
  // public onMenuItemSelected(e: MenuItemSelectedEvent) {
  //   AppComponent.logEvent(e, `You selected ${e.selectedItem} menu item`);
  // }
  //
  // public onNodeExpanded(e: NodeEvent): void {
  //   AppComponent.logEvent(e, 'Expanded');
  // }
  //
  // public onNodeCollapsed(e: NodeEvent): void {
  //   AppComponent.logEvent(e, 'Collapsed');
  // }
  //
  // public handleActionOnFFS(mnuItemId: number | string, action: string) {
  //   const treeController = this.treeFFS.getControllerByNodeId(mnuItemId);
  //   if (treeController && typeof treeController[action] === 'function') {
  //     treeController[action]();
  //   } else {
  //     console.log('There isn`t a controller for a node with mnuItemId - ' + mnuItemId);
  //   }
  // }
  //
  // public renameFFS(mnuItemId: number | string) {
  //   const treeController = this.treeIcon.getControllerByNodeId(mnuItemId);
  //   if (treeController) {
  //     treeController.rename('unicode.pf');
  //   } else {
  //     console.log('There isn`t a controller for a node with mnuItemId - ' + mnuItemId);
  //   }
  // }
  //
  // public setChildrenFFS(mnuItemId: number | string) {
  //   const treeController = this.treeFFS.getControllerByNodeId(mnuItemId);
  //   if (treeController && typeof treeController.setChildren === 'function') {
  //     treeController.setChildren([
  //       {value: 'apache2', mnuItemId: 82, children: []},
  //       {value: 'nginx', mnuItemId: 83, children: []},
  //       {value: 'dhcp', mnuItemId: 84, children: []},
  //       {value: 'dpkg', mnuItemId: 85, children: []},
  //       {value: 'gdb', mnuItemId: 86, children: []}
  //     ]);
  //   } else {
  //     console.log('There isn`t a controller for a node with mnuItemId - ' + mnuItemId);
  //   }
  // }
  //
  // public addChildFFS(mnuItemId: number | string, newNode: TreeModel) {
  //   newNode.mnuItemId = ++this.lastFFSNodeId;
  //   const treeController = this.treeFFS.getControllerByNodeId(mnuItemId);
  //   if (treeController) {
  //     treeController.addChild(newNode);
  //   } else {
  //     console.log(`Controller is absent for a node with mnuItemId: ${mnuItemId}`);
  //   }
  // }
  //
  // public checkFolder(mnuItemId: number): void {
  //   const treeController = this.treeFFS.getControllerByNodeId(mnuItemId);
  //   if (treeController) {
  //     treeController.check();
  //   } else {
  //     console.log(`Controller is absent for a node with mnuItemId: ${mnuItemId}`);
  //   }
  // }
  //
  // public uncheckFolder(mnuItemId: number): void {
  //   const treeController = this.treeFFS.getControllerByNodeId(mnuItemId);
  //   if (treeController) {
  //     treeController.uncheck();
  //   } else {
  //     console.log(`Controller is absent for a node with mnuItemId: ${mnuItemId}`);
  //   }
  // }
}
