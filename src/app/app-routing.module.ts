import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomizePaletteComponent } from './customize-palette/customize-palette.component';
import { TextEditorComponent } from './text-editor/text-editor.component';

const routes: Routes = [
  {
    path:"customize-pallete",component:CustomizePaletteComponent
  }
  ,{
    path:"text-editor",component:TextEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
