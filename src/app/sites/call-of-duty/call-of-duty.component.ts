import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CallOfDutyDataSource, CallOfDutyItem } from './call-of-duty-datasource';

@Component({
  selector: 'app-call-of-duty',
  templateUrl: './call-of-duty.component.html',
  styleUrls: ['./call-of-duty.component.css']
})
export class CallOfDutyComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<CallOfDutyItem>;
  dataSource: CallOfDutyDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['tema', 'comentario', 'usuario'];

  constructor() {
    this.dataSource = new CallOfDutyDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
