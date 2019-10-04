import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtcAboutComponent } from './ftc-about.component';

describe('FtcAboutComponent', () => {
  let component: FtcAboutComponent;
  let fixture: ComponentFixture<FtcAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtcAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtcAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
