import {Component, View} from 'angular2/core';

class AboutVM {
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
    
    constructor() {
        // TODO: load from JSON, internationalize
        this.vm.title = 'About';
        this.vm.messages = [
            'I\'m a software engineer from Mobile, Alabama. I have done enterprise back-end, GIS, HIT, and web development using a variety of technologies.',
            'My recent work has been in AngularJS, Python and C#, using the MVVM and MVC patterns.',
            'I also speak Spanish and run absurdly long distances at near glacial speeds.'       
        ];
    }
}