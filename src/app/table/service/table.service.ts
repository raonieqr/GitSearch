import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/table';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private httpClient: HttpClient) { }

  getUser(user: string): Observable<User[]> {
    return this.httpClient.get<User[]>(`https://api.github.com/users/${user}`);
  }
}
