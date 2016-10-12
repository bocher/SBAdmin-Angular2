import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ADMIN_ROUTES } from './admin.routings';
import { DashboardModule } from './dashboard/dashboard.module';
import { SampleFormModule } from './form/form.module';
import { TablesModule } from './tables/tables.module';
import { SampleChartsModule } from './charts/charts.module';
import { BcomponentModule } from './bcomponent/bcomponent.module';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule,
    ADMIN_ROUTES,
    DashboardModule,
    SampleFormModule,
    TablesModule,
    SampleChartsModule,
    BcomponentModule
  ],
  declarations: [AdminComponent]
})

export class AdminModule { }
