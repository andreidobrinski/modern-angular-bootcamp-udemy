import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UsernameAvailableResponse {
  available: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com';

  constructor(private http: HttpClient) {}

  usernameAvailable(username: string) {
    return this.http
      .post<UsernameAvailableResponse>(
        `${this.rootUrl}/auth/username`,
        { username }
      )
  }

  signup(credentials: any) {
    return this.http
      .post<any>(
        `${this.rootUrl}/auth/signup`,
        credentials
      )
  }
}
