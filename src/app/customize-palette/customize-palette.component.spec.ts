import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizePaletteComponent } from './customize-palette.component';

describe('CustomizePaletteComponent', () => {
  let component: CustomizePaletteComponent;
  let fixture: ComponentFixture<CustomizePaletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomizePaletteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizePaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
