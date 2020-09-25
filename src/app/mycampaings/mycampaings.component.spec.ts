import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycampaingsComponent } from './mycampaings.component';

describe('MycampaingsComponent', () => {
  let component: MycampaingsComponent;
  let fixture: ComponentFixture<MycampaingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycampaingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycampaingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
