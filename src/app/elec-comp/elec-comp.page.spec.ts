import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElecCompPage } from './elec-comp.page';

describe('ElecCompPage', () => {
  let component: ElecCompPage;
  let fixture: ComponentFixture<ElecCompPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElecCompPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElecCompPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
