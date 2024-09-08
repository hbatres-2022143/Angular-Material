import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

interface User {
  id: number;
  name: string;
  age: number;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'age'];
  dataSource = new MatTableDataSource<User>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

const ELEMENT_DATA: User[] = [
  { id: 1, name: 'Hermes', age: 28 },
  { id: 2, name: 'Alejandro', age: 32 },
  { id: 3, name: 'Weslly', age: 23 },
  { id: 4, name: 'Lester', age: 21 },
  { id: 5, name: 'Hernan', age: 36 },
  { id: 6, name: 'Sebastian', age: 29 },
  { id: 7, name: 'Douglas', age: 41 },
  { id: 8, name: 'Joshua', age: 27 },
  { id: 9, name: 'Carlos', age: 34 },
  { id: 10, name: 'Angel', age: 25 },
  { id: 11, name: 'Edgar', age: 30 },
  { id: 12, name: 'Marco', age: 22 },
];
