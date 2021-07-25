import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common';
import { environment } from 'src/environments/environment.prod';
import { User } from '../user';
import { Repository } from '../repository';
@Injectable({
  providedIn: 'root'
})
export class GithubRequestServiceService {
  user!:User;
  repository!:Repository;
  repoData:any = [];
  newUserData: any = []
  

  constructor(private http: HttpClient) {
    this.user = new User ("", 0,"","");
    this.repository = new
      Repository("", "", "", "")
  }
}
