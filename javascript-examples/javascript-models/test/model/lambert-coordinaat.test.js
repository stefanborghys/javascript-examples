import LambertCoordinaat from "../../src/model/lambert-coordinaat";

describe('Lambert Coordinaat', () => {

    test('of - tekst', () => {
        expect(LambertCoordinaat.of("test")).toBeUndefined();
    });

    test('of - null', () => {
        expect(LambertCoordinaat.of(null)).toBeUndefined();
    });

    test('of - undefined', () => {
        expect(LambertCoordinaat.of(undefined)).toBeUndefined();
    });

    test('of - lege string', () => {
        expect(LambertCoordinaat.of('')).toBeUndefined();
    });

    test('of - geldige coordinaat', () => {
        let lambertCoordinaat = LambertCoordinaat.of("123456.78, 345232.04");

        expect(lambertCoordinaat).not.toBeNull();
        expect(lambertCoordinaat.x).toBe(123456.78);
        expect(lambertCoordinaat.y).toBe(345232.04);
        expect(lambertCoordinaat.toString()).toBe("123456.78, 345232.04");
    });

    test('of - geldige coordinaat met haakjes, gescheiden door puntkomma', () => {
        let lambertCoordinaat = LambertCoordinaat.of("(123456.78; 345232.04)");

        expect(lambertCoordinaat).not.toBeNull();
        expect(lambertCoordinaat.x).toBe(123456.78);
        expect(lambertCoordinaat.y).toBe(345232.04);
        expect(lambertCoordinaat.toString()).toBe("123456.78, 345232.04");
    });

});