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


  getUser(username:string){
    interface ApiResponse{
      bio:string ,
      public_repos:number, 
      login:string,
      avatar_url:string }
    
    
      let promise = new Promise<void>((resolve,reject)=>{
        this.http.get<ApiResponse>("https://api.github.com/users/"+ username).toPromise().then(response=>{
        this.user.bio = response.bio
        this.user.public_repos = response.public_repos
        this.user.login = response.login
        this.user.avatar_url = response.avatar_url

        resolve()
      },
        error=>{
        reject(error)
      }
      )
}
