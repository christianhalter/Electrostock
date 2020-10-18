import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PcbPage } from './pcb.page';

describe('PcbPage', () => {
  let component: PcbPage;
  let fixture: ComponentFixture<PcbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcbPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PcbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
