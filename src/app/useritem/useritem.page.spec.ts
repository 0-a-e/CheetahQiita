import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UseritemPage } from './useritem.page';

describe('UseritemPage', () => {
  let component: UseritemPage;
  let fixture: ComponentFixture<UseritemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseritemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UseritemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
