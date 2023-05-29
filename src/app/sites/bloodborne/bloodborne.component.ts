import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { BloodborneDataSource, BloodborneItem } from './bloodborne-datasource';

@Component({
  selector: 'app-bloodborne',
  templateUrl: './bloodborne.component.html',
  styleUrls: ['./bloodborne.component.css']
})
export class BloodborneComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<BloodborneItem>;
  dataSource: BloodborneDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['tema', 'comentario', 'usuario'];

  constructor() {
    this.dataSource = new BloodborneDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
