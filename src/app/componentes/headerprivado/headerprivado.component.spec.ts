import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderprivadoComponent } from './headerprivado.component';

describe('HeaderprivadoComponent', () => {
  let component: HeaderprivadoComponent;
  let fixture: ComponentFixture<HeaderprivadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderprivadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderprivadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
