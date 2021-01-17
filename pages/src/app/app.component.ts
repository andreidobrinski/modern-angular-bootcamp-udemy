import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'Nature',
      url: 'https://source.unsplash.com/featured/?nature'
    },
    {
      title: 'Space',
      url: 'https://source.unsplash.com/featured/?space'
    },
    {
      title: 'Trees',
      url: 'https://source.unsplash.com/featured/?trees'
    },
    {
      title: 'Water',
      url: 'https://source.unsplash.com/featured/?water'
    }
  ];
}
