import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuprivadoComponent } from './menuprivado.component';

describe('MenuprivadoComponent', () => {
  let component: MenuprivadoComponent;
  let fixture: ComponentFixture<MenuprivadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuprivadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuprivadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
