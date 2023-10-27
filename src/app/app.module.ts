import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AboutComponent } from './components/about/about.component';
import { HardskillsComponent } from './components/hardskills/hardskills.component';
import { ProjectComponent } from './components/project/project.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { FormationComponent } from './components/formation/formation.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageProjetComponent } from './pages/page-projet/page-projet.component';
import { ListProjetsComponent } from './components/list-projets/list-projets.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AccueilComponent,
    AboutComponent,
    HardskillsComponent,
    ProjectComponent,
    HobbiesComponent,
    FormationComponent,
    FooterComponent,
    PageProjetComponent,
    ListProjetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'projets', component: PageProjetComponent },
    ])]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
