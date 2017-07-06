import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FolhaCamaraComponent, FolhaCamaraService } from '.';
import { Ng2TableModule } from 'ng2-table';
import { PaginationModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    Ng2TableModule,
    PaginationModule.forRoot()
  ],
  declarations: [FolhaCamaraComponent],
  exports: [FolhaCamaraComponent],
  providers: [FolhaCamaraService]
})
export class FolhaCamaraModule { }
