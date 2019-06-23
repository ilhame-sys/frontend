import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { OrganizationComponent } from './component/organization/organization.component';
import { CauseComponent } from './component/cause/cause.component';
import { ArticleComponent } from './component/article/article.component';
import { ContactComponent } from './component/contact/contact.component';
import { DonationComponent } from './component/donation/donation.component';
import { MembershipComponent } from './component/membership/membership.component';
import { ArticleSingleComponent } from './component/article/article-single/article-single.component';

const routes: Routes = [
  {
    path: '',
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
    path: 'article/show/:id',
    component: ArticleSingleComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'donation',
    component: DonationComponent,
  },
  {
    path: 'membership',
    component: MembershipComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
