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
  // public handleActionOnFFS(id: number | string, action: string) {
  //   const treeController = this.treeFFS.getControllerByNodeId(id);
  //   if (treeController && typeof treeController[action] === 'function') {
  //     treeController[action]();
  //   } else {
  //     console.log('There isn`t a controller for a node with id - ' + id);
  //   }
  // }
  //
  // public renameFFS(id: number | string) {
  //   const treeController = this.treeIcon.getControllerByNodeId(id);
  //   if (treeController) {
  //     treeController.rename('unicode.pf');
  //   } else {
  //     console.log('There isn`t a controller for a node with id - ' + id);
  //   }
  // }
  //
  // public setChildrenFFS(id: number | string) {
  //   const treeController = this.treeFFS.getControllerByNodeId(id);
  //   if (treeController && typeof treeController.setChildren === 'function') {
  //     treeController.setChildren([
  //       {value: 'apache2', id: 82, children: []},
  //       {value: 'nginx', id: 83, children: []},
  //       {value: 'dhcp', id: 84, children: []},
  //       {value: 'dpkg', id: 85, children: []},
  //       {value: 'gdb', id: 86, children: []}
  //     ]);
  //   } else {
  //     console.log('There isn`t a controller for a node with id - ' + id);
  //   }
  // }
  //
  // public addChildFFS(id: number | string, newNode: TreeModel) {
  //   newNode.id = ++this.lastFFSNodeId;
  //   const treeController = this.treeFFS.getControllerByNodeId(id);
  //   if (treeController) {
  //     treeController.addChild(newNode);
  //   } else {
  //     console.log(`Controller is absent for a node with id: ${id}`);
  //   }
  // }
  //
  // public checkFolder(id: number): void {
  //   const treeController = this.treeFFS.getControllerByNodeId(id);
  //   if (treeController) {
  //     treeController.check();
  //   } else {
  //     console.log(`Controller is absent for a node with id: ${id}`);
  //   }
  // }
  //
  // public uncheckFolder(id: number): void {
  //   const treeController = this.treeFFS.getControllerByNodeId(id);
  //   if (treeController) {
  //     treeController.uncheck();
  //   } else {
  //     console.log(`Controller is absent for a node with id: ${id}`);
  //   }
  // }
}
