import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popups-home',
  templateUrl: './popups-home.component.html',
  styleUrls: ['./popups-home.component.css'],
})
export class PopupsHomeComponent implements OnInit {
  modalState: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.modalState = !this.modalState;
  }
}
