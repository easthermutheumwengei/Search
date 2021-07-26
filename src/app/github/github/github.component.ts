import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/user';
import { GithubRequestService } from '../../github-http/github-request.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  User!: User;
  myUsername!: "easthermutheumwengei";
  repoInfo = [];
  GithubRequestService!: GithubRequestService;

  constructor(githubRequestService: GithubRequestService) {
    this.GithubRequestService = githubRequestService;
  }

  ngOnInit(): void {
    this.repoInfo = this.GithubRequestService.repoData;
  }

}
