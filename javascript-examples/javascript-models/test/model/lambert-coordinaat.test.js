import LambertCoordinaat from "../../src/model/lambert-coordinaat";

describe('Lambert-Coördinaat', () => {

    test('A Lambert-coördinaat based on a free text value, results in: "undefined"', () => {
        expect(LambertCoordinaat.of('test')).toBeUndefined();
        expect(LambertCoordinaat.of('Gent')).toBeUndefined();
      });

    test('A Lambert-coördinaat based on an "null" value, results in: "undefined"', () => {
        expect(LambertCoordinaat.of(null)).toBeUndefined();
    });

    test('A Lambert-coördinaat based on an "undefined" value, results in: "undefined"', () => {
        expect(LambertCoordinaat.of(undefined)).toBeUndefined();
    });

    test('A Lambert-coördinaat based on an empty string value, results in: "undefined"', () => {
        expect(LambertCoordinaat.of('')).toBeUndefined();
    });

    test('A Lambert-coördinaat based on an space value, results in: "undefined"', () => {
        expect(LambertCoordinaat.of(' ')).toBeUndefined();
    });

    const expectLambertCoordinaat = function(lambertCoordinaat, expectedX, expectedY) {
        expect(lambertCoordinaat).not.toBeUndefined();
        expect(lambertCoordinaat.x).toBe(expectedX);
        expect(lambertCoordinaat.y).toBe(expectedY);
        expect(lambertCoordinaat.toString()).toBe(expectedX + ', ' + expectedY);
    };

    test('A Lambert-coördinaat based on a valid coordinate, results in a LambertCoordinaat', () => {
        expectLambertCoordinaat(LambertCoordinaat.of('104719.27, 192387.25'), 104719.27, 192387.25);
    });

    test('A Lambert-coördinaat based on a valid coordinate with whole numbers, results in a LambertCoordinaat', () => {
        expectLambertCoordinaat(LambertCoordinaat.of('123456, 34523'), 123456, 34523);
        expectLambertCoordinaat(LambertCoordinaat.of('104, 19'), 104, 19);
    });

    test('A Lambert-coördinaat based on a valid coordinate with parentheses and separated by a semicolon , results in a LambertCoordinaat', () => {
        expectLambertCoordinaat(LambertCoordinaat.of('(123456.78; 345232.04)'), 123456.78, 345232.04);
    });

    test('A Lambert-coördinaat based on a valid x-coordinate without a decimal number, results in a LambertCoordinaat', () => {
        expectLambertCoordinaat(LambertCoordinaat.of('104719, 192387.25'), 104719, 192387.25);
    });

    test('A Lambert-coördinaat based on a valid x and y-coordinate without a decimal number, results in a LambertCoordinaat', () => {
        expectLambertCoordinaat(LambertCoordinaat.of('104719, 192387'), 104719, 192387);
    });

    test('A Lambert-coördinaat based on a valid y-coordinate without a decimal number, results in a LambertCoordinaat', () => {
        expectLambertCoordinaat(LambertCoordinaat.of('104719.27, 192387'), 104719.27, 192387);
    });

    test('A Lambert-coördinaat based on a valid coordinate separated by a semicolon, results in a LambertCoordinaat', () => {
        expectLambertCoordinaat(LambertCoordinaat.of('104719.27; 192387.25'), 104719.27, 192387.25);
    });

    test('A Lambert-coördinaat based on a valid coordinate separated by a comma, results in a LambertCoordinaat', () => {
        expectLambertCoordinaat(LambertCoordinaat.of('104719.27, 192387.25'), 104719.27, 192387.25);
    });

    test('A Lambert-coördinaat based on a valid coordinate surrounded with brackets, results in a LambertCoordinaat', () => {
        expectLambertCoordinaat(LambertCoordinaat.of('(104719.27; 192387.25)'), 104719.27, 192387.25);
    });

    test('A Lambert-coördinaat based on a valid coordinate starting with a single parenthesis, results in a LambertCoordinaat', () => {
        expectLambertCoordinaat(LambertCoordinaat.of('(104719.27; 192387.25'), 104719.27, 192387.25);
    });

    test('A Lambert-coördinaat based on a valid coordinate ending with a single parenthesis, results in a LambertCoordinaat', () => {
        expectLambertCoordinaat(LambertCoordinaat.of('104719.27; 192387.25)'), 104719.27, 192387.25);
    });

    test('A Lambert-coördinaat based on a valid coordinate with spaces in front of it, results in a LambertCoordinaat', () => {
        expectLambertCoordinaat(LambertCoordinaat.of(' 104719.27; 192387.25)'), 104719.27, 192387.25);
        expectLambertCoordinaat(LambertCoordinaat.of('     104719.27; 192387.25)'), 104719.27, 192387.25);
    });

    test('A Lambert-coördinaat based on a valid coordinate without a space after the separator, results in a LambertCoordinaat', () => {
        expectLambertCoordinaat(LambertCoordinaat.of('104719.27;192387.25)'), 104719.27, 192387.25);
    });

    test('A Lambert-coördinaat based on a valid coordinate with multiple spaces after the separator, results in a LambertCoordinaat', () => {
        expectLambertCoordinaat(LambertCoordinaat.of('104719.27;     192387.25)'), 104719.27, 192387.25);
    });

    test('A Lambert-coördinaat based on a valid coordinate with 3 or more decimal places, results in a LambertCoordinaat', () => {
        expectLambertCoordinaat(LambertCoordinaat.of('104719.271, 192387.252'), 104719.27, 192387.25);
        expectLambertCoordinaat(LambertCoordinaat.of('104719.2712, 192387.2545'), 104719.27, 192387.25);
        expectLambertCoordinaat(LambertCoordinaat.of('104719.27123, 192387.25456'), 104719.27, 192387.25);
    });

});