/**
 * @author stefan borghys
 * @since 1.0.0
 * 
 * @public
 * @class
 * @classdesc Represents the Belgian Lambert Coördinaat.
 * @hideconstructor
 */
class LambertCoordinaat {

    /**
     * Create a new LambertCoordinaat based on it's x and y values.
     * 
     * @param {*} x - x-coordinate
     * @param {*} y - y-coordinate
     * 
     * @private
     * @since 1.0.0
     */
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    /**
     * Get the x-coordinate.
     * 
     * @public
     * @since 1.0.0
     * @function
     * @return {Number} Returns an x-coordinate
     */
    get x() {
        return this._x;
    }

    /**
     * Get the y-coordinate.
     * 
     * @public
     * @since 1.0.0
     * @function
     * @return {Number} Returns an y-coordinate
     */
    get y() {
        return this._y;
    }
    
    /**
     * Represents the coordinate as a String value.
     * 
     * @example '104719.27, 192387.25'
     * 
     * @public
     * @since 1.0.0
     * @function
     * @return {string} Returns a String value of the coordinate in following format 'x, y'     
     */
    toString() {
        return this._x + ', ' + this._y;
    }

     /**
     * Creates a new LambertCoordinaat based upon a regular expression. 
     * When the input value is invalid or not of type String, 'undefined' will be returned!
     *
     * The regular expression allows following:
     * - optioneel ongelimiteerd aantal spaties voor de start van het coördinaat
     * - optioneel linker haakje '('
     * - verplichte x-coördinaat, welke een decimaal of geheel getal kan zijn met 1-6 getallen voor de komma en een ongelimiteerd aantal na
     * - verplicht scheidingsteken, welke een komma ',' of puntkomma ';' kan zijn
     * - optionele ongelimiteerd aantal spaties
     * - verplichte y-coördinaat, welke een decimaal of geheel getal kan zijn met 1-6 getallen voor de komma en een ongelimiteerd aantal na
     * - optioneel rechter haakje ')'
     *
     * @example LambertCoordinaat.of('104719.27, 192387.25')
     * @example LambertCoordinaat.of('104719.27,192387.25')
     * @example LambertCoordinaat.of('104719.27; 192387.25')
     * @example LambertCoordinaat.of('104719.27, 192387.25)')
     * @example LambertCoordinaat.of('(104719.27, 192387.25')
     * @example LambertCoordinaat.of('104719, 192387')
     *
     * @param {string} value - String value to create a new LambertCoordinaat of
     * @return {LambertCoordinaat|undefined} Returns a new LambertCoordinaat when valid, otherwise undefined
     * 
     * @since 1.0.0
     * @static
     * @instance
     * @function of
     */
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