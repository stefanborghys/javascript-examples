# Mocha JS

JavaScript test framework running on Node JS and in the browser.

Website: [https://mochajs.org](https://mochajs.org)  
Github: [https://github.com/mochajs/mocha](https://github.com/mochajs/mocha)  

## Command-Line
Command-line usage: [https://mochajs.org/#command-line-usage](https://mochajs.org/#command-line-usage)  

### Filter tests 

#### --grep
Only run tests who match given string or regexp against the `describe`'s test name(s).

```
describe('my-test-cases', async () => {
    ...
});
```

`npm run mocha --grep my-test-cases`

## Test Configuration

### Exclusive Tests `.only()`

Exclusive tests: [mochajs.org/#exclusive-tests](https://mochajs.org/#exclusive-tests)

Allows to run only the specified suite(s) or test-case(s) by appending `.only()` to the function.

```
describe.only('Test suite', () => {

    // Only test cases in this suite will be run ...

});
```

```
describe('Test suite', () => {

    it.only('Test case 1', () => {
        // This test will be run ...
    });

    it('Test case 1', () => {
        // This test will NOT run ...
    });

});
```

### Inclusive Tests `.skip()`

Inclusive tests: [mochajs.org/#inclusive-tests](https://mochajs.org/#inclusive-tests)

Allows to skip the specified suite(s) or test-case(s) by appending `.skip()` to the function.  
Skipped test case(s) will be marked as 'pending' in the report.

```
describe.skip('Test suite', () => {

    // Skip all test cases in this suite, tests will NOT be run ...

});
```

```
describe('Test suite', () => {

    it.skip('Test case 1', () => {
        // This test will NOT run ...
    });

    it('Test case 1', () => {
        // This test will be run ...
    });

});
```
