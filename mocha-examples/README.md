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