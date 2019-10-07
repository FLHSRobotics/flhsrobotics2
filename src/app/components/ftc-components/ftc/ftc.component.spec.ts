import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtcComponent } from './ftc.component';
import {LoaderModule} from '../../../controllers/loader/loader.module';
import {RouterTestingModule} from '@angular/router/testing';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';

describe('FtcComponent', () => {
  let component: FtcComponent;
  let fixture: ComponentFixture<FtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtcComponent ],
      imports: [ LoaderModule, RouterTestingModule, AngularFireModule.initializeApp(environment.firebaseConfig), AngularFireDatabaseModule, AngularFirestoreModule ]
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
