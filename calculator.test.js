const mathOperations = require("./calculator");

describe("Calculator tests", () => {

        beforeAll(() => {
            console.log("beforeAll called");
        });

        afterAll(() => {
            console.log("afterAll called");
        });
        beforeEach(() => {
            console.log("beforeEach called");
            input1 = 1;
            input2 = 2;
        });
        afterEach(() => {
            console.log("afterEach called");
        });
        test('adding 1 + 2 should return 3', () => {

        var result = mathOperations.sum(input1,input2)
        expect(result).toBe(3);
    
    });
    test("substracting 2 from 10 should return 8", () => {
        var result = mathOperations.diff(10,2)
        expect(result).toBe(8);
    });
    test("multiplying 2 and 8 should return 16", () => {
        var result = mathOperations.product(2,8)
        expect(result).toBe(16);
    });
    test("equality matchers", () => {
        expect(mathOperations.product(2,2)).toBe(4);
        expect(mathOperations.diff(4,2)).not.toBe(1);
    });
    test("truthy operators", () => {
        var name ="Software testing help"
        var n = null
        expect(n).toBeNull()
        expect(name).not.toBeNull
        expect(name).toBeTruthy()
        expect(n).toBeFalsy()
        expect(0).toBeFalsy()
    });
    test("numeric operators", () => {
        var num1 = 100;
        var num2 = -20;
        var num3 = 0;
        expect(num1).toBeGreaterThan(10)
        expect(num2).toBeLessThanOrEqual(0)
        expect(num3).toBeGreaterThanOrEqual(0)
    });
    test("string matchhers", () => {
        var string1 = "software testing help - a great resource for testers"
        expect(string1).toMatch(/test/);
        expect(string1).not.toMatch(/abc/)
    })
})