import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    {
      name: 'name',
      age: 41,
      job: 'job',
      employed: true,
    },
    {
      name: 'name2',
      age: 43,
      job: 'job2',
      employed: false,
    },
    {
      name: 'nam3',
      age: 43,
      job: 'job3',
      employed: true,
    },
  ];
  headers = [
    { key: 'employed', label: 'Has a job?' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
