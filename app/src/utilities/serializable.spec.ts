import {Serializable} from './serializable'

describe('Serializable tests', function() {

    class foo extends Serializable {
        mystring: string;
        mynum: number;
        mydate: Date;
    }

    let myfoo = new foo();
    let jsonstr = `{
        "mystring": "Hello",
        "mynum": 8675309, 
        "mydate": "2016-09-14"
    }`;
    let jsonobj = JSON.parse(jsonstr);
    let d = new Date(2016, 8, 13);           
    
    beforeAll( () => {
        myfoo = new foo();
        myfoo.fromJSON(jsonobj);      
    });

    it('deserializes a string', () => {
        expect(myfoo.mystring).toBe('Hello');
    });
    
    it('deserializes a number', () => {
        expect(myfoo.mynum).toEqual(8675309);        
    });
    
    it('deserializes a date: year', () => {
        expect(myfoo.mydate.getFullYear()).toEqual(d.getFullYear());
    });
    
    it('deserializes a date: month', () => {
        expect(myfoo.mydate.getMonth()).toEqual(d.getMonth());
    });    
    
    it('deserializes a date: day', () => {
        expect(myfoo.mydate.getDay()).toEqual(d.getDay());
    });    

});