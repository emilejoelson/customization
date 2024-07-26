import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'customize-pallete';

  @ViewChild('menu') menu!: ElementRef;

  public contextMenu(event: any) {
    event.preventDefault();
    this.menu.nativeElement.style.display = 'block';
    this.menu.nativeElement.style.top = event.pageY + 'px';
    this.menu.nativeElement.style.left = event.pageX + 'px';
  }

  public disappearContext() {
    this.menu.nativeElement.style.display = 'none';
  }

  public stopProgragration(event: any) {
    event.stopProgragration();
  }
}
