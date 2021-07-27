import { Component, OnInit } from '@angular/core';
import { GithubRequestService } from 'src/app/github-http/github-request.service';
import { User } from 'src/app/user';
// import { NavbarComponent } from 'src/app/navbar/navbar/navbar.component';

@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  styleUrls: ['./github-form.component.css']
})
export class GithubFormComponent implements OnInit {
  // username!: string;
  // user!: User;
  githubRequestService!: GithubRequestService;
  
  submitUsername(value:any) {
    this.githubRequestService.getUser(value.username)
  }
  
  constructor(githubRequestService: GithubRequestService) {
    this.githubRequestService = githubRequestService;
   }

  ngOnInit(): void {
  }

}
