import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPagingSampleComponent } from './grid-paging-sample.component';

describe('GridPagingSampleComponent', () => {
  let component: GridPagingSampleComponent;
  let fixture: ComponentFixture<GridPagingSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridPagingSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPagingSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
