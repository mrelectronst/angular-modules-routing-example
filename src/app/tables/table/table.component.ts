import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor() {}

  data = [
    { name: 'Can', age: '29', job: 'Endüstri Mühendisi', employed: 'Hayır' },
    { name: 'Osman', age: '30', job: 'Yazılım Mühendisi', employed: 'Hayır' },
    { name: 'Elif', age: '27', job: 'İşletme Mezunu', employed: 'Evet' },
  ];
  headers = [
    { key: 'employed', label: 'Is he/she pleased his/her salary?' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];

  ngOnInit(): void {}
}
