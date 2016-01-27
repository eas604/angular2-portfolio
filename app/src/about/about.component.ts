import {Component, View, OnInit} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http'
import {LangSvc, Language} from '../lang/lang.svc'
import {Serializable, enumToString, enumsToString}
    from '../utilities/utilities'

class AboutVM extends Serializable {
    public title: string;
    public messages: string[];
}

@Component ({
    selector: 'about'
})
@View({
    templateUrl: 'app/src/about/about.html'
})
export class AboutComponent implements OnInit {    
    
    public vm: AboutVM = new AboutVM();
    
    constructor(private _http: Http, private _lang: LangSvc) {
    }
    
    ngOnInit() {
       this.getAbout();
    //    this._lang.emitter.subscribe((data) => {
    //        this.getAbout();
    //    });
       setTimeout(this._lang.getString, 3000);
    }
    
    getAbout(): void {
        this._http.get('app/src/about/about.json').subscribe(res => {
            this._lang.getStringAsync().then(l => 
                this.vm.fromJSON(res.json()[l])
            );
        });       
    }
}