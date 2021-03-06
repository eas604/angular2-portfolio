import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http'

import {LangSvc} from '../lang/lang.svc'
import {NavComponent} from '../nav/nav.component'
import {HeroComponent} from '../hero/hero.component'
import {AboutComponent} from '../about/about.component'
import {ExperienceComponent} from '../experience/experience.component'
import {EducationComponent} from '../education/education.component'
import {ProjectsComponent} from '../projects/projects.component'
import {ContactComponent} from '../contact/contact.component'


@Component ({
    selector: 'portfolio-app',
    templateUrl: 'app/src/main/main.html',
    directives: [
        NavComponent,
        HeroComponent, 
        AboutComponent, 
        ExperienceComponent,
        ProjectsComponent,
        EducationComponent,
        ContactComponent
    ],
    providers: [HTTP_PROVIDERS, LangSvc]
})
export class MainComponent { }