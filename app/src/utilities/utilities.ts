export class Serializable {
    fromJSON(jsonObj: any) {
        for (var propName in jsonObj) {
            this[propName] = jsonObj[propName]
        }
    }
}