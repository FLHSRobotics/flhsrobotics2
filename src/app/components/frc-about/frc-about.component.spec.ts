import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrcAboutComponent } from './frc-about.component';

describe('FrcAboutComponent', () => {
  let component: FrcAboutComponent;
  let fixture: ComponentFixture<FrcAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrcAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrcAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
