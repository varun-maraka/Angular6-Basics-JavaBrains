import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingChild2ContactComponent } from './setting-child2-contact.component';

describe('SettingChild2ContactComponent', () => {
  let component: SettingChild2ContactComponent;
  let fixture: ComponentFixture<SettingChild2ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingChild2ContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingChild2ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
