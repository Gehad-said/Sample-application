import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatySlipComponent } from './treaty-slip.component';

describe('TreatySlipComponent', () => {
  let component: TreatySlipComponent;
  let fixture: ComponentFixture<TreatySlipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreatySlipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatySlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
