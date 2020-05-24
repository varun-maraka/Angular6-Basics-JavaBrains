import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloDateComponent } from './hello-date.component';

describe('HelloDateComponent', () => {
  let component: HelloDateComponent;
  let fixture: ComponentFixture<HelloDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
