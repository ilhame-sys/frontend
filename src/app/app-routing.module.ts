import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { OrganizationComponent } from './component/organization/organization.component';
import { CauseComponent } from './component/cause/cause.component';
import { ArticleComponent } from './component/article/article.component';
import { ContactComponent } from './component/contact/contact.component';
import { MembershipComponent } from './component/membership/membership.component';

const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'organization',
    component: OrganizationComponent,
  },
  {
    path: 'cause',
    component: CauseComponent,
  },
  {
    path: 'article',
    component: ArticleComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'membership',
    component: MembershipComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
