import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TheLegendOfZeldaDataSource, TheLegendOfZeldaItem } from './the-legend-of-zelda-datasource';

@Component({
  selector: 'app-the-legend-of-zelda',
  templateUrl: './the-legend-of-zelda.component.html',
  styleUrls: ['./the-legend-of-zelda.component.css']
})
export class TheLegendOfZeldaComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TheLegendOfZeldaItem>;
  dataSource: TheLegendOfZeldaDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['tema', 'comentario', 'usuario'];

  constructor() {
    this.dataSource = new TheLegendOfZeldaDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
