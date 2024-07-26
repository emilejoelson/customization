import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  DiagramModule,
  SymbolPaletteAllModule,
} from '@syncfusion/ej2-angular-diagrams';
import { CustomizePaletteComponent } from './customize-palette/customize-palette.component';
import { ContextMenuModule } from '@syncfusion/ej2-angular-navigations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatMenuModule } from '@angular/material/menu';
import { TextEditorComponent } from './text-editor/text-editor.component';
import {
  RichTextEditorModule,
  ToolbarService,
  TableService,
  QuickToolbarService,
  LinkService,
  ImageService,
  HtmlEditorService,
  MarkdownEditorService,
} from '@syncfusion/ej2-angular-richtexteditor';

@NgModule({
  declarations: [AppComponent, CustomizePaletteComponent, TextEditorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DiagramModule,
    SymbolPaletteAllModule,
    ContextMenuModule,
    MatMenuModule,
    RichTextEditorModule,
  ],
  providers: [
    provideAnimationsAsync(),
    ToolbarService,
    LinkService,
    ImageService,
    HtmlEditorService,
    TableService,
    QuickToolbarService,
    MarkdownEditorService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
