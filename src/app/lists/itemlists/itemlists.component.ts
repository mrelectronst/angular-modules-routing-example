import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-itemlists',
  templateUrl: './itemlists.component.html',
  styleUrls: ['./itemlists.component.css'],
})
export class ItemlistsComponent implements OnInit {
  @Input() items = [];
  constructor() {}

  ngOnInit(): void {}
}
