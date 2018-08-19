import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSiblingComponent } from './service-sibling.component';

describe('ServiceSiblingComponent', () => {
  let component: ServiceSiblingComponent;
  let fixture: ComponentFixture<ServiceSiblingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceSiblingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceSiblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
