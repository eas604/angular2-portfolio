import {Component, OnInit} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http'
import {LangSvc} from '../lang/lang.svc'
import {Serializable, enumToString, enumsToString}
    from '../utilities/utilities'

class HeroVM extends Serializable {
    public title: string;
    public bullets: string[];
}

@Component ({
    selector: 'hero',
    templateUrl: 'app/src/hero/hero.html'    
})
export class HeroComponent { 
    
    public vm: HeroVM = new HeroVM();

    constructor(private _http: Http, private _lang: LangSvc) {        
    }
    
    ngOnInit(): void {
        this.getHero();
        this._lang.emitter.subscribe((data) => {
            this.getHero();
        });
    }
    
    getHero() : void {
        this._http.get('app/src/hero/hero.json').subscribe(res => {
            this._lang.getStringAsync().then(l => 
                this.vm.fromJSON(res.json()[l])
            );
        });         
    }
}