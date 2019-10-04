import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrcComponent } from './frc.component';

describe('FrcComponent', () => {
  let component: FrcComponent;
  let fixture: ComponentFixture<FrcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
