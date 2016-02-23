import {Component, OnInit} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http'
import {LangSvc} from '../lang/lang.svc'
import {FromJSON} from '../utilities/fromJSON'
import {Serializable} from '../utilities/serializable'

class HeroVM extends Serializable {
    public title: string;
    public bullets: string[];
}

@Component ({
    selector: 'hero',
    templateUrl: 'app/src/hero/hero.html'    
})
export class HeroComponent extends FromJSON { 
    
    constructor(http: Http, lang: LangSvc) {
        super(http, lang, 'app/src/hero/hero.json', new HeroVM());
    }

}