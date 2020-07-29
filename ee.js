/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

function ersatzEllip(seq, max, end, gap) {
  var parts = ersatzEllip.split(seq, max, end, gap);
  // We want to support data types that don't have .join(), so…
  seq = parts[0];
  if (parts.length > 1) { seq = seq.concat(parts.gap, parts[1]); }
  return seq;
}

ersatzEllip.split = function eeCore(seq, max, end, gap) {
  max = +(max || 0);
  if (max < 1) { max = 72; }
  if (!gap) { gap = '…'; }
  if (seq.length <= max) {
    max = [seq];
    max.head = seq;
    return max;
  }
  max -= (+gap.length || 0);
  if ((!end) && (end !== 0)) { end = Math.floor(max / 2); }
  if ((end > 0) && (end < 1)) {
    // No else required b/c the Math.floor above returns integers, hopefully.
    end = Math.round(end * max);
  }
  // end might have become 0 due to Math.round, so check again:
  if (end > 0) {
    max -= end;
    end = seq.slice(-end);
  } else {
    end = seq.slice(0, 0);
  }
  seq = seq.slice(0, max);
  max = [seq, end];
  max.head = seq;
  max.tail = end;
  max.gap = gap;
  return max;
};

module.exports = ersatzEllip;
