import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtcAboutComponent } from './ftc-about.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {FlamelinkService} from '../../../services/flamelink.service';
import {AngularFirestoreModule} from '@angular/fire/firestore';

describe('FtcAboutComponent', () => {
  let component: FtcAboutComponent;
  let fixture: ComponentFixture<FtcAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtcAboutComponent ],
      imports: [ AngularFireModule.initializeApp(environment.firebaseConfig), AngularFireDatabaseModule, AngularFirestoreModule ],
      providers: [ FlamelinkService ]
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
