/** Allow for serializing a class instance from JSON */
export class Serializable {
    fromJSON(jsonObj: any) {
        for (var propName in jsonObj) {
            // Todo: need better way of reliably deserializing dates
            if (propName.toLowerCase().includes('date')) {
                this[propName] = new Date(jsonObj[propName]);
            } else {
                this[propName] = jsonObj[propName];
            }
        }
    }
}

/** Get the string representation of any enum value, should it exist. */
export function enumToString<T> (val: number, en: T) { return en[val]; }
export function enumsToString<T> (vals: number[], en: T) {
    var result: string[] = [];
    vals.forEach(v => {
        result.push(enumToString(v, en));
    });
    return result;    
}