import {test} from 'node:test';
import assert from 'node:assert/strict';
import {add} from './add.mjs';
test('add returns the sum of two numbers', () => {
  assert.equal(add(2, 3), 5);
  assert.equal(add(-4, 2), -2);
});
