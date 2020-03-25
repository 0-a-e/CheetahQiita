import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VqrPage } from './vqr.page';

describe('VqrPage', () => {
  let component: VqrPage;
  let fixture: ComponentFixture<VqrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VqrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VqrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
