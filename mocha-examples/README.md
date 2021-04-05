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

## Interfaces

Mocha provides interfaces to allow tests being written according to a DSL (Domain Specific Language)
of choice. BDD, TDD, Exports, QUnit en Require-style interfaces are supported.

### BDD 

BDD or Behaviour Driven Development style of testing.

BDD: [mochajs.org/#bdd](https://mochajs.org/#bdd)

```
describe('Array', function() {

    before(function() {
        // before all tests ...
    });

    beforeEach(function() {
        // before each test ...
    });

    afterEach(function() {
        // after each test ...
    });

    after(function() {
        // after all tests ...
    });

    describe('#indexOf()', function() {
        context('when not present', function() {

            it('should not throw an error', function() {
                (function() {
                    [1, 2, 3].indexOf(4);
                }.should.not.throw());
            });

            it('should return -1', function() {
                [1, 2, 3].indexOf(4).should.equal(-1);
            });

        });

        context('when present', function() {

            it('should return the index where the element first appears in the array', function() {
                [1, 2, 3].indexOf(3).should.equal(2);
            });

        });
    });

});
```

### TDD

TDD or Test-driven Development style of testing.

TDD: [mochajs.org/#tdd](https://mochajs.org/#tdd)

```
suite('Array', function() {

    suiteSetup(function() {
        // before all tests
    });

    setup(function() {
        // before each test
    });

    teardown(function() {
        // after each test
    });

    suiteTeardown(function() {
        // after all tests
    });

    suite('#indexOf()', function() {

        test('should return -1 when not present', function() {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
        
    });

});

```

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
