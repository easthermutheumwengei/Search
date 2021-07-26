import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/user';
import { GithubRequestService } from 'src/app/github-http/github-request.service';

@Component({
  selector: 'app-github-result',
  templateUrl: './github-result.component.html',
  styleUrls: ['./github-result.component.css']
})
export class GithubResultComponent implements OnInit {
  user!: User;
  repoInfo: any = []
  githubRequestService!: GithubRequestService;


  constructor(githubRequestService: GithubRequestService) {
    this.githubRequestService = githubRequestService;
   }

  ngOnInit(): void {
    this.user = this.githubRequestService.user;
    this.repoInfo = this.githubRequestService.repoData;
  }

}
