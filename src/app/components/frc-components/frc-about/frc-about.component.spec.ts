import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrcAboutComponent } from './frc-about.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';

describe('FrcAboutComponent', () => {
  let component: FrcAboutComponent;
  let fixture: ComponentFixture<FrcAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrcAboutComponent ],
      imports: [AngularFireModule.initializeApp(environment.firebaseConfig), AngularFireDatabaseModule]
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
