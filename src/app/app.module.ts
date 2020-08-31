import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridPagingSampleComponent } from './grid/grid-paging-sample/grid-paging-sample.component';
import { FormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { 
	IgxAvatarModule,
	IgxBadgeModule,
	IgxButtonModule,
	IgxGridModule,
	IgxIconModule,
	IgxInputGroupModule,
	IgxProgressBarModule,
	IgxRippleModule,
	IgxSwitchModule,
	IgxCheckboxModule,
	IgxDatePickerModule,
	IgxDialogModule,
	IgxComboModule,
	IgxToastModule,
 } from "igniteui-angular";
 import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { GridFilteringSampleComponent } from './grid/grid-filtering-sample/grid-filtering-sample.component';
import { GridSortingIndicatorsComponent } from './grid/grid-sorting-indicators/grid-sorting-indicators.component';
import { GridEditingSampleComponent } from './grid/grid-editing-sample/grid-editing-sample.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GridPagingSampleComponent,
    GridFilteringSampleComponent,
    GridSortingIndicatorsComponent,
    GridEditingSampleComponent,
    AppNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxAvatarModule,
		IgxBadgeModule,
		IgxButtonModule,
		IgxGridModule,
		IgxIconModule,
		IgxInputGroupModule,
		IgxProgressBarModule,
		IgxRippleModule,
		IgxSwitchModule,
		HttpClientModule,
		IgxCheckboxModule,
		IgxDatePickerModule,
		IgxDialogModule,
		IgxToastModule,
		IgxComboModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
