import {defaultsDeep, get, omit} from './utils/fn.utils';
import {NodeMenuItem} from './menu/node-menu.component';

export class FoldingType {
  public static Expanded: FoldingType = new FoldingType('node-expanded');
  public static Collapsed: FoldingType = new FoldingType('node-collapsed');
  public static Empty: FoldingType = new FoldingType('node-empty');
  public static Leaf: FoldingType = new FoldingType('node-leaf');

  // tslint:disable-next-line:variable-name
  public constructor(private _cssClass: string) {
  }

  public get cssClass(): string {
    return this._cssClass;
  }
}

export type ChildrenLoadingFunction = (callback: (children: TreeModel[]) => void) => void;

export interface TreeModel {
  mnuItemId?: string | number;
  menuGroup?: {
    mnuGrpId?: number;
    mnuName?: string;
    desc?: string;
  };
  nameVi?: string;
  nameEn?: string;
  icon?: string;
  img?: string;
  cssClass?: string;
  isQuickMenu?: string;
  parentId?: string;
  children?: TreeModel[];
  lev?: string;
  orderCode?: string;
  roleCode?: string;
  createdDate?: string;
  createdBy?: string;
  modifiedDate?: string;
  modifiedBy?: string;

  loadChildren?: ChildrenLoadingFunction;
  emitLoadNextLevel?: boolean;
  _foldingType?: FoldingType;

  [additionalData: string]: any;
}

export interface CssClasses {
  /* The class or classes that should be added to the expanded node */
  expanded?: string;

  /* The class or classes that should be added to the collapsed node */
  collapsed?: string;

  /* The class or classes that should be added to the empty node */
  empty?: string;

  /* The class or classes that should be added to the expanded to the leaf */
  leaf?: string;
}

export interface Templates {
  /* A template for a node */
  node?: string;

  /* A template for a leaf node */
  leaf?: string;

  /* A template for left menu html element */
  leftMenu?: string;
}

export class TreeModelSettings {

  public static readonly NOT_CASCADING_SETTINGS = ['selectionAllowed'];
  /* cssClasses - set custom css classes which will be used for a tree */
  public cssClasses?: CssClasses;

  /* Templates - set custom html templates to be used in a tree */
  public templates?: Templates;

  public leftMenu?: boolean;


  public rightMenu?: boolean;

  public menuItems?: NodeMenuItem[];


  public static?: boolean;

  public isCollapsedOnInit?: boolean;

  public checked?: boolean;

  public selectionAllowed?: boolean;

  public keepNodesInDOM?: boolean;

  public static merge(child: TreeModel, parent: TreeModel): TreeModelSettings {
    const parentCascadingSettings = omit(get(parent, 'settings'), TreeModelSettings.NOT_CASCADING_SETTINGS);
    return defaultsDeep({}, get(child, 'settings'), parentCascadingSettings, {
      static: false,
      leftMenu: false,
      rightMenu: true,
      isCollapsedOnInit: false,
      checked: false,
      keepNodesInDOM: false,
      selectionAllowed: true
    });
  }
}

export class Ng2TreeSettings {

  rootIsVisible ? = true;
  showCheckboxes ? = false;
  enableCheckboxes ? = true;
}

export enum TreeStatus {
  New,
  Modified,
  IsBeingRenamed
}

export interface RenamableNode {

  setName(name: string): void;

  toString(): string;
}
