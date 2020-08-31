import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSortingIndicatorsComponent } from './grid-sorting-indicators.component';

describe('GridSortingIndicatorsComponent', () => {
  let component: GridSortingIndicatorsComponent;
  let fixture: ComponentFixture<GridSortingIndicatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridSortingIndicatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSortingIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
