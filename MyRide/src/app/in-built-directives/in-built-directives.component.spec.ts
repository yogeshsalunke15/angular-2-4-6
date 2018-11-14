import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InBuiltDirectivesComponent } from './in-built-directives.component';

describe('InBuiltDirectivesComponent', () => {
  let component: InBuiltDirectivesComponent;
  let fixture: ComponentFixture<InBuiltDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InBuiltDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InBuiltDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
