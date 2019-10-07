import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutreachComponent } from './outreach.component';
import {LoaderModule} from '../../controllers/loader/loader.module';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';

describe('OutreachComponent', () => {
  let component: OutreachComponent;
  let fixture: ComponentFixture<OutreachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutreachComponent ],
      imports: [ LoaderModule, AngularFireModule.initializeApp(environment.firebaseConfig), AngularFireDatabaseModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutreachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
