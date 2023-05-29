import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DarkSoulsDataSource, DarkSoulsItem } from './dark-souls-datasource';

@Component({
  selector: 'app-dark-souls',
  templateUrl: './dark-souls.component.html',
  styleUrls: ['./dark-souls.component.css']
})
export class DarkSoulsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DarkSoulsItem>;
  dataSource: DarkSoulsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['tema', 'comentario', 'usuario'];

  constructor() {
    this.dataSource = new DarkSoulsDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
