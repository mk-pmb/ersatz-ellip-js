// -*- coding: utf-8, tab-width: 2 -*-

import assert from 'assert';

import ellip from '.';

const eq = assert.deepStrictEqual;
function ar(x) { return x && Array.from(x); }

function t(input, opt, want) {
  const { max, end, gap } = opt;
  eq(ellip(input, max, end, gap), want);
  eq(ellip(ar(input), max, end, ar(gap)), ar(want));
}

const hw = 'Hello World!';
t(hw, { max: 10 },              'Hello…rld!');
t(hw, { max: 10, gap: '...' },  'Hell...ld!');
t(hw, { max: 9 },               'Hell…rld!');
t(hw, { max: 8, end: 0 },       'Hello W…');
t(hw, { max: 8, end: 0.25 },    'Hello…d!');





console.info('+OK usage test passed.');
