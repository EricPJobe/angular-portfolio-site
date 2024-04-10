import { Routes } from '@angular/router';
import { CodeEditorComponent } from '../pages/code-editor/code-editor.component';
import { EducationComponent } from '../pages/education/education.component';
import { LanguagesComponent } from '../pages/languages/languages.component';
import { PhilosophyComponent } from '../pages/philosophy/philosophy.component';

export const routes: Routes = [
    { path: '', redirectTo:'/work-history', pathMatch: 'full'},
    { path: 'work-history', component: CodeEditorComponent },
    { path: 'education', component: EducationComponent },
    { path: 'languages', component: LanguagesComponent },
    { path: 'philosophy', component: PhilosophyComponent },
];
