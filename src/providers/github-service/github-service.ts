import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { User } from '../../models/user.interface';
import { USER_LIST } from '../../moks/user.moks';
import { Repository } from '../../models/repository.interface';
import { REPOSITORY_LIST } from '../../moks/repository.moks';
/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubServiceProvider {
  private baseUrl: string = 'https://api.github.com/users';
  private reposUrl: string = 'repos';

  constructor(private http: HttpClient) {
    console.log('Hello GithubServiceProvider Provider');
  }

  getUserInformation(username: string): Observable<User> {
    return this.http.get(`${this.baseUrl}/${username}`)
      .do(this.logData)
      .catch(this.handleError)
  }

  getRepositoryInformation(username: string): Observable<Repository[]> {
    return this.http.get(`${this.baseUrl}/${username}/${this.reposUrl}`)
      .do(this.logData)
      .catch(this.handleError)
  }

  mockGetRepositoryInformation(username: string): Observable<Repository[]> {
    return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.name === username));
  }

  // Finding the username from within USER_LIST, equal to the Username passed in. Returning the result as on Observable.

  mockGetUserInformation(username: string): Observable<User> {
    return Observable.of(USER_LIST.filter(user => user.name === username)[0]);
  }

  private logData(response: HttpResponse<any>) {
    console.log(response);
  }

  private handleError(error: HttpErrorResponse) {
    return Observable.throw(error.error || "Server error.")
  }

}
