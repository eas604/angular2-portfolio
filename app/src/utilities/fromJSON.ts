import {OnInit} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http'
import {LangSvc} from '../lang/lang.svc'
import {Serializable} from './utilities'

export class FromJSON implements OnInit {
    
    constructor(private _http: Http, private _lang: LangSvc, 
        public path: string, public vm: Serializable) {        
    }    
    
    ngOnInit(): void {
        this.getJSON();
        this._lang.emitter.subscribe((data) => {
            this.getJSON();
        });
    }  
    
    getJSON(): void {
        this._http.get(this.path).subscribe(res => {
            this._lang.getStringAsync().then(l => 
                this.vm.fromJSON(res.json()[l])
            );
        });       
    }    
        
}