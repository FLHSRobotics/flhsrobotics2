import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtcComponent } from './ftc.component';

describe('FtcComponent', () => {
  let component: FtcComponent;
  let fixture: ComponentFixture<FtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
