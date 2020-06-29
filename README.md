
<!--#echo json="package.json" key="name" underline="=" -->
ersatz-ellip
============
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
An ellipsis function that&#39;s usually good enough. Works with strings,
arrays and similar.
<!--/#echo -->



API
---

This module exports one function:

### ersatzEllip(seq[, max[, end[, gap]]])

Return a possibly shortened version of input `seq` that is at most `max` long,
either as a number of elements, or as a fraction, in which case it means
that fraction of the original length.
Note that the fraction has to be strictly smaller than 1, because otherwise
there's no need to use this function.

Works with any input that has suitable `.length`, `.slice` and `.concat`,
e.g. strings or arrays.

`end` allows to modify how much of the preview length shall be used for
elements from the back, thereby reducing how many elements are copied
from the front. Like with `max`, can be a fraction.

If `seq` needs to be shortened, the copied part(s) are glued together with
`gap`, which defaults to `…`.
Make sure your `gap` has a positive length.




Usage
-----

see [test.usage.mjs](test.usage.mjs):




Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
