import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFilteringSampleComponent } from './grid-filtering-sample.component';

describe('GridFilteringSampleComponent', () => {
  let component: GridFilteringSampleComponent;
  let fixture: ComponentFixture<GridFilteringSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridFilteringSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridFilteringSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
