import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Tema } from 'src/app/models/Tema';
import { AppComponent } from '../../app.component';
import { TableDataSource } from './table-datasource';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Tema>;
  @Input() juegos: any[];

  dataSource: TableDataSource;
  lst: Tema[] = [];

  filterForm = this.fb.group({
    tema: [null],
  });

  private urlBase = AppComponent.url;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['tema', 'juego'];

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.dataSource = new TableDataSource([]);
    this.juegos = [];
  }

  ngAfterViewInit(): void {
    this.refreshData();
  } 

  refreshData() {
    this.http.get<any>(this.urlBase).subscribe((data) => {
      // this.lst = data;
      this.initTableData(data);
    });
  }

  initTableData(data: Tema[]) {
    this.dataSource = new TableDataSource(data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  onSubmit(): void {
    this.http
    .post<any>(this.urlBase, {
      tema: this.filterForm.value.tema,
    })
    .subscribe((data) => {
      // this.lst = data;
      this.initTableData(data);
    });
  }
}
