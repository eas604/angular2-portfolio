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