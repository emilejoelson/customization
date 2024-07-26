import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {
  DiagramComponent,
  NodeModel,
  ConnectorModel,
  PaletteModel,
  SymbolPreviewModel,
  DiagramEvent,

} from '@syncfusion/ej2-angular-diagrams';

@Component({
  selector: 'app-customize-palette',
  templateUrl: './customize-palette.component.html',
  styleUrls: ['./customize-palette.component.css'],
})
export class CustomizePaletteComponent implements AfterViewInit {
  @ViewChild('diagram', { static: true })
  public diagram!: DiagramComponent;

  ngAfterViewInit() {
    
  }
  
  public symbolPreviewSettings: SymbolPreviewModel = {
    height: 250,
    width: 250,
    offset: {
      x: 0.5,
      y: 0.5,
    },
  };

  public symbolePalette: Array<PaletteModel> = [
    {
      id: 'basic',
      expanded: false,
      symbols: this.getBasicShapes(),
      title: 'Basic Shapes',
    },
    {
      id: 'flow',
      symbols: this.getFlowShapes(),
      title: 'Flow Shapes',
    },
    {
      id: 'connectors',
      symbols: this.getConnectors(),
      title: 'Connectors',
    },
  ];

  public getFlowShapes(): Array<NodeModel> {
    return [
      { id: 'Terminator', shape: { type: 'Flow', shape: 'Terminator' } },
      { id: 'Process', shape: { type: 'Flow', shape: 'Process' } },
      { id: 'Decision', shape: { type: 'Flow', shape: 'Decision' } },
      {
        id: 'PreDefinedProcess',
        shape: { type: 'Flow', shape: 'PreDefinedProcess' },
      },
    ];
  }

  public getConnectors(): Array<ConnectorModel> {
    return [
      {
        id: 'Link1',
        type: 'Orthogonal',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'Arrow' },
      },
      {
        id: 'Link2',
        type: 'Orthogonal',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'None' },
      },
      {
        id: 'Link3',
        type: 'Straight',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'Arrow' },
      },
      {
        id: 'Link4',
        type: 'Straight',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'None' },
      },
      {
        id: 'Link5',
        type: 'Bezier',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'Arrow' },
      },
      {
        id: 'Link6',
        type: 'Bezier',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'None' },
      },
    ];
  }

  public getBasicShapes(): Array<NodeModel> {
    return [
      { id: 'Rectangle', shape: { type: 'Basic', shape: 'Rectangle' } },
      { id: 'Ellipse', shape: { type: 'Basic', shape: 'Ellipse' } },
      { id: 'Hexagon', shape: { type: 'Basic', shape: 'Hexagon' } },
      { id: 'Parallelogram', shape: { type: 'Basic', shape: 'Parallelogram' } },
    ];
  }

  public paletteExpandingAction(args: any): void {
    if (args.palette.id === 'flow') {
      args.cancel = true;
    }
  }

  public onDiagramCreated(): void {
    console.log('Diagram created', this.diagram);
  }

  public onNodeSelected(event: any): void {
    console.log('Node Selected event triggered', event);
    const selectedNode = event.newValue;
    console.log('Node Selected:', selectedNode);
  }
  
}
