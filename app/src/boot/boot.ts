import {bootstrap} from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from 'angular2/http'

import {MainComponent} from '../main/main.component'
import {LangSvc} from '../lang/lang.svc'

// import {HeroComponent} from '../hero/hero.component'
// import {AboutComponent} from '../about/about.component'
// import {EducationComponent} from '../education/education.component'
// import {ProjectsComponent} from '../projects/projects.component'

bootstrap(MainComponent, [HTTP_PROVIDERS, LangSvc]);
// bootstrap(HeroComponent);
// bootstrap(AboutComponent);
// bootstrap(EducationComponent);
// bootstrap(ProjectsComponent);