import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrcComponent } from './frc.component';
import {LoaderModule} from '../../../controllers/loader/loader.module';
import {RouterTestingModule} from '@angular/router/testing';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';

describe('FrcComponent', () => {
  let component: FrcComponent;
  let fixture: ComponentFixture<FrcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrcComponent ],
      imports: [ LoaderModule, RouterTestingModule, AngularFireModule.initializeApp(environment.firebaseConfig), AngularFireDatabaseModule ]
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
