import { ElementRef, Injectable } from '@angular/core';
import { CapturedNode } from './captured-node';
import { NodeDraggableEvent } from './draggable.events';
import { Subject } from 'rxjs';

@Injectable()
export class NodeDraggableService {
  public draggableNodeEvents$: Subject<NodeDraggableEvent> = new Subject<NodeDraggableEvent>();

  private capturedNode: CapturedNode | any;

  public fireNodeDragged(captured: CapturedNode, target: ElementRef): void {
    if (!captured.tree || captured.tree.isStatic()) {
      return;
    }

    this.draggableNodeEvents$.next(new NodeDraggableEvent(captured, target));
  }

  public captureNode(node: CapturedNode): void {
    this.capturedNode = node;
  }

  public getCapturedNode(): CapturedNode {
    return this.capturedNode;
  }

  public releaseCapturedNode(): void {
    this.capturedNode = null;
  }
}
