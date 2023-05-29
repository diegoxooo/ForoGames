import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Tema } from 'src/app/models/Tema';
import { TemasService } from '../temas.service';
import { TableDataSource } from './table-datasource';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Tema>;
  dataSource: TableDataSource;
  lst: Tema[] = [];

  private urlBase = 'http://localhost:8080/';

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['tema', 'juego'];

  constructor(private http: HttpClient) {
    this.dataSource = new TableDataSource([]);
  }

  ngAfterViewInit(): void {
    this.refreshData();
  }

  refreshData() {
    this.http.get<any>(this.urlBase).subscribe((data) => {
      console.log(data);
      this.lst = data;
      this.initTableData(data);
    });
  }

  initTableData(data: Tema[]) {
    console.log(data)
    this.dataSource = new TableDataSource(data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
