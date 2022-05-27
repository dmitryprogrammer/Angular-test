import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {filter, map, Observable} from 'rxjs';

import {UserModel, UsersModel} from '../models/users.models';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public readonly URL: string = '/assets/data/mocked-data.json';

  constructor(private http: HttpClient) {
  }

  public getUsers(): Observable<UsersModel> {
    return this.http.get<UsersModel>(this.URL).pipe(filter((users: UsersModel) => Boolean(users)));
  }

  public getUserById(userId: string | number): Observable<UserModel> {
    return this.getUsers().pipe(map((users: UsersModel): UserModel => users.find(({id}: UserModel) => id === userId)));
  }
}
