import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  rows: any = [];
  columns = [
    { name: 'name', prop: 'name' },
    { name: 'edit', prop: 'id' },
    { name: 'delete', prop: 'id' },
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('../../assets/tracks.json').subscribe((data) => {
      this.rows = data;
      console.log(this.rows);
    });
  }

  onclick(value: any) {
    console.log(value);
  }
}
