/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

function ersatzEllip(seq, max, end, gap) {
  max = +(max || 0);
  if (max < 1) { max = 72; }
  if (seq.length <= max) { return seq; }
  if (!gap) { gap = '…'; }
  max -= (+gap.length || 0);
  if ((!end) && (end !== 0)) { end = Math.floor(max / 2); }
  if (end > 0) {
    if (end < 1) { end = Math.round(end * max); }
    max -= end;
    end = seq.slice(-end);
  } else {
    end = 0;
  }
  seq = seq.slice(0, max);
  return (end === 0 ? seq.concat(gap) : seq.concat(gap, end));
}

module.exports = ersatzEllip;
