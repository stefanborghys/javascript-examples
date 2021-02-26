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
     * @param {Number} x - The x-coordinate
     * @param {Number} y - The y-coordinate
     * 
     * @private
     * @since 1.0.0
     */
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    /**
     * Get the x-coordinate numerical value.
     * 
     * @example <caption>Get the x-coordinate.</caption> 
     * // returns 104719.27
     * lambertCoordinaat.x
     * 
     * @public
     * @since 1.0.0
     * @function
     * @return {Number} Returns the x-coordinate's value
     */
    get x() {
        return this._x;
    }

    /**
     * Get the y-coordinate numerical value.
     * 
     * @example <caption>Get the y-coordinate.</caption> 
     * // returns 192387.25
     * lambertCoordinaat.y
     * 
     * @public
     * @since 1.0.0
     * @function
     * @return {Number} Returns the y-coordinate's value
     */
    get y() {
        return this._y;
    }
    
    /**
     * Represents the coordinate as a String value.
     * 
     * @example <caption>Get the coordinate as a String value.</caption> 
     * // returns '104719.27, 192387.25'
     * lambertCoordinaat.toString();
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
     * The regular expression allows following rules in this sequence:
     * - optional unlimited number of spaces, before the start of the coordinate  
     * - optional left parenthesis '('
     * - mandatory x-coordinate. Which can be a decimal or integer, with 1-6 digits before the decimal point and an unlimited number after. 
     * - mandatory separator, which can be a comma ',' or semicolon ';' 
     * - optional unlimited number of spaces 
     * - mandatory y-coordinate. Which can be a decimal or integer, with 1-6 digits before the decimal point and an unlimited number after. 
     * - optional right parenthesis ')'
     *
     * @example <caption>Creation of a Lambert-coördinaat, comma separated with a space in between.</caption>
     * LambertCoordinaat.of('104719.27, 192387.25')
     * @example <caption>Creation of a Lambert-coördinaat, comma separated.</caption>
     * LambertCoordinaat.of('104719.27,192387.25')
     * @example <caption>Creation of a Lambert-coördinaat, semicolon separated with a space in between.</caption>
     * LambertCoordinaat.of('104719.27; 192387.25')
     * @example <caption>Creation of a Lambert-coördinaat, comma separated with a space in between. And surrounded by parentheses.</caption>
     * LambertCoordinaat.of('(104719.27, 192387.25)')
     * @example <caption>Creation of a Lambert-coördinaat, comma separated with a space in between. Containing only integers.</caption>
     * LambertCoordinaat.of('104719, 192387')
     *
     * @param {string} value - String value to create a new LambertCoordinaat of
     * @return {LambertCoordinaat|undefined} Returns a new LambertCoordinaat when valid, otherwise 'undefined'
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

/**
 * Lambert-coördinaat module.
 * @module
 */
export default LambertCoordinaat;