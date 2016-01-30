import {Component, OnInit} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http'
import {LangSvc, Language} from '../lang/lang.svc'
import {Serializable, enumToString, enumsToString}
    from '../utilities/utilities'

class Link extends Serializable {
    public title: string = '';
    public url: string = '';
}

class NavVM extends Serializable {
    public brand: Link;
    public links: Link[];
    public languages: string;
}

@Component ({
    selector: 'nav',
    templateUrl: 'app/src/nav/nav.html'
})
export class NavComponent {
    
    private vm: NavVM = new NavVM();
    private languages: string[];
    private _curLang: string = 'English';
    
    constructor(private _http: Http, private _lang: LangSvc) {        
    }

    ngOnInit(): void {
        this.vm.brand = new Link();
        this.languages = enumsToString([Language.English, Language.Español], Language);
        this.getJSON();
        this._lang.emitter.subscribe((data) => {
            this.getJSON();
        });
    }   

    getJSON(): void {
        this._http.get('app/src/nav/nav.json').subscribe(res => {
            this._lang.getStringAsync().then(l => 
                this.vm.fromJSON(res.json()[l])
            );
        });       
    }
}