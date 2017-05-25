import testRunner from 'mocha-cases';
import testCases from './test-cases';
import titleCase from '../src/title-case';

describe('titleCase', () => {
  testRunner({
    name: 'should turn {value} into {expected}.',
    values: testCases.map(case2 => case2.input),
    expected: testCases.map(case2 => case2.expect),
  }, titleCase);
});
