import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceholdersRoutingModule } from './placeholders-routing.module';
import { PlaceholdersHomeComponent } from './placeholders-home/placeholders-home.component';
import { SegmentComponent } from './segment/segment.component';

@NgModule({
  declarations: [PlaceholdersHomeComponent, SegmentComponent],
  imports: [CommonModule, PlaceholdersRoutingModule, SharedModule],
  exports: [
    // PlaceholdersHomeComponent
  ],
})
export class PlaceholdersModule {}
