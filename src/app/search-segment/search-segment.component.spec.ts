import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSegmentComponent } from './search-segment.component';

describe('SearchSegmentComponent', () => {
  let component: SearchSegmentComponent;
  let fixture: ComponentFixture<SearchSegmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSegmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
