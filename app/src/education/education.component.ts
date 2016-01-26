import {Component, View} from 'angular2/core';

class Degree {
    constructor(public name: string, public concentration: string, 
            public school: string, public minors?: string[]) {      
    }
}

class EducationVM {
    public title: string;
    public degrees: Degree[];
}

@Component ({
    selector: 'education'             // CSS selector and element name
})
@View({
    templateUrl: 'app/src/education/education.html'
})
export class EducationComponent {
    
    private vm: EducationVM = new EducationVM();
    
    constructor() {
        // TODO: load from JSON, internationalize
        this.vm.title = 'Education';
        var master = new Degree(
            'Master of Science',
            'Information Systems',
            'The University of South Alabama'
        );
        var bachelor = new Degree(
            'Bachelor of Arts',
            'Spanish',
            'The University of South Alabama',
            ['Information Technology', 'Political Science']
        );
        this.vm.degrees = [master, bachelor];
    }
}