import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimFormComponent } from './claim-form.component';

describe('ClaimFormComponent', () => {
  let component: ClaimFormComponent;
  let fixture: ComponentFixture<ClaimFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
