import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubComponent } from './github/github/github.component';
import { GithubFormComponent } from './github-form/github-form/github-form.component';
import { GithubResultComponent } from './github-result/github-result/github-result.component';

const routes: Routes = [
  {path:'github',component:GithubComponent},
  { path: 'githubform', component: GithubFormComponent },
{path:'githubresult',component:GithubResultComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
