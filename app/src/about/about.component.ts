import {Component, View} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http'
import {Serializable} from '../utilities/utilities'

class AboutVM extends Serializable {
    public title: string;
    public messages: string[];
}

@Component ({
    selector: 'about'             // CSS selector and element name
})
@View({
    templateUrl: 'app/src/about/about.html'
})
export class AboutComponent {
    
    private vm: AboutVM = new AboutVM();
    
    constructor(http: Http) {
        // TODO: internationalize
        http.get('app/src/about/about.json').subscribe(res => {
           this.vm.fromJSON(res.json().english); 
        });        
    }
}