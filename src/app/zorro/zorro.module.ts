import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    NzGridModule,
    NzCardModule,
    NzInputModule,
    NzAlertModule,
    NzListModule,
    NzAvatarModule
  ]
})
export class ZoroModule { }
