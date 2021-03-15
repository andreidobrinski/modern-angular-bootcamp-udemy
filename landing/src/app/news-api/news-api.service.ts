import { Injectable } from '@angular/core';
import { newsKey } from '../../../apiKey';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private url = 'https://newsapi.org/v2/top-headlines';
  private pageSize = 10;
  private apiKey = newsKey;
  private country = 'ca';

  constructor() { }
}
