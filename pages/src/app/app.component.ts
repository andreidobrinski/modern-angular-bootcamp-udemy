import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images = [
    {
      title: 'One',
      url: 'https://source.unsplash.com/random'
    },
    {
      title: 'Two',
      url: 'https://source.unsplash.com/random'
    },
    {
      title: 'Three',
      url: 'https://source.unsplash.com/random'
    },
    {
      title: 'Four',
      url: 'https://source.unsplash.com/random'
    }
  ];
}
