import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogpComponent } from './dialogp.component';

describe('DialogpComponent', () => {
  let component: DialogpComponent;
  let fixture: ComponentFixture<DialogpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
