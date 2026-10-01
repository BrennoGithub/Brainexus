import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Cursos } from './components/cursos/cursos';
import { Login } from './components/login/login';
import { Aula } from './components/aula/aula';
import { Aluno } from './components/aluno/aluno';
import { Cadastro } from './components/cadastro/cadastro';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'cursos',
        component: Cursos
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'aula',
        component: Aula
    },
    {
        path: 'aluno',
        component: Aluno
    },
    {
        path: 'cadastro',
        component: Cadastro
    }
];
