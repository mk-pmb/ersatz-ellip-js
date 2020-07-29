// -*- coding: utf-8, tab-width: 2 -*-

import assert from 'assert';

import ellip from '.';

const eq = assert.deepStrictEqual;
function ar(x) { return x && Array.from(x); }

function t(input, opt, want, arrWant) {
  const { max, end, gap } = opt;
  eq(ellip(input, max, end, gap), want);
  eq(ellip(ar(input), max, end, ar(gap)), arrWant || ar(want));
}

const hw = 'Hello World!';
t(hw, { max: 10 },              'Hello…rld!');
t(hw, { max: 10, gap: '' },     'Helloorld!',
  // NB:  In array mode, our "t" function covnerts the gap to an
  //      array that is not empty but contains one element, ''.
  ['H', 'e', 'l', 'l', 'o', '', 'o', 'r', 'l', 'd', '!']);

t(hw, { max: 10, gap: '...' },  'Hell...ld!');
t(hw, { max: 9 },               'Hell…rld!');
t(hw, { max: 8, end: 0 },       'Hello W…');
t(hw, { max: 8, end: 0.25 },    'Hello…d!');


function arr2dict(x) { return Object.assign({ length: x.length }, x); }
function splat(...args) { return arr2dict(ellip.split(...args)); }

eq(splat(hw, 16), {
  length: 1,
  0: hw,
  head: hw,
});
eq(splat(hw, 10), {
  length: 2,
  0: 'Hello',
  1: 'rld!',
  gap: '…',
  head: 'Hello',
  tail: 'rld!',
});
eq(splat(hw, 10, undefined, ''), {
  length: 2,
  0: 'Hello',
  1: 'orld!',
  gap: '',
  head: 'Hello',
  tail: 'orld!',
});
eq(splat(hw, 9, 0, '::'), {
  length: 2,
  0: 'Hello W',
  1: '',
  head: 'Hello W',
  tail: '',
  gap: '::',
});





console.info('+OK usage test passed.');
