import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TabsDemoComponent } from './tabs/tabs-demo.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ModalDemoComponent } from './modal/modal-demo.component';
import { StepperDemoComponent } from './stepper/stepper-demo.component';
import { SelectDemoComponent } from './select/select-demo.component';
import { PaginationDemoComponent } from './pagination/pagination-demo.component';

import { TableDemoComponent } from  './table/table-demo.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsDemoComponent
  },
  {
    path: 'datepicker',
    component: DatepickerComponent
  }, {
    path: 'modal',
    component: ModalDemoComponent
  }, {
    path: 'stepper',
    component: StepperDemoComponent
  }, {
    path: 'select',
    component: SelectDemoComponent
  }, {
    path: 'pagination',
    component: PaginationDemoComponent
  }, {
    path: 'table',
    component: TableDemoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRouterModule { }
