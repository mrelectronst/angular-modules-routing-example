import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { ListsHomeComponent } from './lists-home/lists-home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ItemlistsComponent } from './itemlists/itemlists.component';

@NgModule({
  declarations: [ListsHomeComponent, StatisticsComponent, ItemlistsComponent],
  imports: [CommonModule, ListsRoutingModule, SharedModule],
  exports: [ListsHomeComponent],
})
export class ListsModule {}
