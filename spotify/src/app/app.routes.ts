import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CreditsComponent } from './credits/credits.component';
import { LoginComponent } from './login/login.component';
import { NoteFoundComponent } from './note-found/note-found.component';

export const routes: Routes = [
    {path: '',component: HomeComponent },
    {path: 'search', component: SearchComponent},
    {path: 'credit', component: CreditsComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', component: NoteFoundComponent},
];
