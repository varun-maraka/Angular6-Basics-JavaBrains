import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingChile1ProfileComponent } from './setting-chile1-profile.component';

describe('SettingChile1ProfileComponent', () => {
  let component: SettingChile1ProfileComponent;
  let fixture: ComponentFixture<SettingChile1ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingChile1ProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingChile1ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
