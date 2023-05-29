import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { GodOfWarDataSource, GodOfWarItem } from './god-of-war-datasource';

@Component({
  selector: 'app-god-of-war',
  templateUrl: './god-of-war.component.html',
  styleUrls: ['./god-of-war.component.css'],
})
export class GodOfWarComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<GodOfWarItem>;
  dataSource: GodOfWarDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['tema', 'comentario', 'usuario'];

  constructor() {
    this.dataSource = new GodOfWarDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
