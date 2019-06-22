import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { OrganizationComponent } from './component/organization/organization.component';
import { MembershipComponent } from './component/membership/membership.component';
import { DonationComponent } from './component/donation/donation.component';
import { ContactComponent } from './component/contact/contact.component';
import { ArticleComponent } from './component/article/article.component';
import { ArticleSingleComponent } from './component/article/article-single/article-single.component';
import { CauseComponent } from './component/cause/cause.component';
import { CauseSingleComponent } from './component/cause/cause-single/cause-single.component';
import { ArticleService } from './service/article.service';
import { CauseService } from './service/cause.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    OrganizationComponent,
    MembershipComponent,
    DonationComponent,
    ContactComponent,
    ArticleComponent,
    ArticleSingleComponent,
    CauseComponent,
    CauseSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ArticleService, CauseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
