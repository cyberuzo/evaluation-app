import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GridPagingSampleComponent } from './grid/grid-paging-sample/grid-paging-sample.component';
import { GridFilteringSampleComponent } from './grid/grid-filtering-sample/grid-filtering-sample.component';
import { GridSortingIndicatorsComponent } from './grid/grid-sorting-indicators/grid-sorting-indicators.component';
import { GridEditingSampleComponent } from './grid/grid-editing-sample/grid-editing-sample.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: GridPagingSampleComponent
  },
  {
    path: 'paging',
    pathMatch: 'full',
    component: GridPagingSampleComponent
  },
  {
    path: 'filtering',
    pathMatch: 'full',
    component: GridFilteringSampleComponent
  },
  {
    path: 'sorting',
    pathMatch: 'full',
    component: GridSortingIndicatorsComponent
  },
  {
    path: 'editing',
    pathMatch: 'full',
    component: GridEditingSampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
