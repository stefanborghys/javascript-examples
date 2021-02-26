class LambertCoordinaat {

    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }
    
    toString() {
        return this._x + ', ' + this._y;
    }

    static of(value) {
        if (!value || (!value instanceof String)) {
            return undefined;
        }
        const REGEX = /^\s*\(?(?<x>\d{1,6}\.\d{1,2}|\d{1,6})\d*[,;]\u0020*(?<y>\d{1,6}\.\d{1,2}|\d{1,6})\d*\)?/;
        const resultaat = value.match(REGEX);
        if (resultaat) {
            const x = Number(resultaat.groups.x);
            const y = Number(resultaat.groups.y);
            return new LambertCoordinaat(x, y);
        }
        return undefined;
    }

}

export default LambertCoordinaat;