import {Component, OnInit} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http'
import {LangSvc, Language} from '../lang/lang.svc'
import {Serializable} from '../utilities/serializable'
    
class Job extends Serializable {
    public title: string;
    public fromDate: Date;
    public company: string;
    public description: string;
    
    constructor(public toDate?: Date) {
        super();
    }
}

class ExperienceVM extends Serializable {
    public title: string;
    public since: string;    
    public jobs: Job[];
}

@Component ({
    selector: 'experience',
    templateUrl: 'app/src/experience/experience.html'
})
export class ExperienceComponent {
    
    public vm: ExperienceVM = new ExperienceVM();
    
    constructor(private _http: Http, private _lang: LangSvc) {        
    }

    ngOnInit(): void {
        this.getJSON();
        this._lang.emitter.subscribe((data) => {
            this.getJSON();
        });
    }   

    getJSON(): void {
        this._http.get('app/src/experience/experience.json').subscribe(res => {
            this._lang.getStringAsync().then(l => {
                let data = res.json()[l];
                this.vm.title = data.title;
                this.vm.since = l === 'English' ? 'Since' : 'De'; 
                this.vm.jobs = [];                
                for (var job of data.jobs) {
                    let j = new Job();
                    j.fromJSON(job);
                    this.vm.jobs.push(j);
                }
            });
        });       
    }
}