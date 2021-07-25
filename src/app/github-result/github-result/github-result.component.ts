import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/user';
import { GithubRequestService } from '../github-http/github-request-service';

@Component({
  selector: 'app-github-result',
  templateUrl: './github-result.component.html',
  styleUrls: ['./github-result.component.css']
})
export class GithubResultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
