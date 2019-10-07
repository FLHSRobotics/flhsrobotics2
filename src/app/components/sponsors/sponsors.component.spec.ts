import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorsComponent } from './sponsors.component';
import {LoaderModule} from '../../controllers/loader/loader.module';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';

describe('SponsorsComponent', () => {
  let component: SponsorsComponent;
  let fixture: ComponentFixture<SponsorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorsComponent ],
      imports: [ LoaderModule, AngularFireModule.initializeApp(environment.firebaseConfig), AngularFireDatabaseModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
