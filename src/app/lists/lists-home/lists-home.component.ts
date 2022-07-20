import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists-home',
  templateUrl: './lists-home.component.html',
  styleUrls: ['./lists-home.component.css'],
})
export class ListsHomeComponent implements OnInit {
  numbers = [
    { value: 50, label: 'Costumers' },
    { value: 3565, label: 'Interests' },
    { value: 33, label: 'Comments' },
  ];
  images = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Interests',
      description: 'Comments Many More',
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Comments',
      description: 'Comments More Many',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
