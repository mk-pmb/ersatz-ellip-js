
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

This module exports one function with one method:

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
Make sure your `gap` has a length greater than or equal to 0.
(Versions before 1.0.3 had required a positive length.)



### ersatzEllip.split(seq, max, end, gap)

Just the splitting part. Returns an Array with one or two subsequences.
Usecases include encoding the subsequences individually and then joining
them with a `gap` that shall not be encoded.

If there is a second part, the array will also carry a property `gap` that
holds the effective `gap` value that was used to calculate part lengths.

For your destructuring convenience, the result array will also carry its
parts as additional properties `head` and (if applicable) `tail`.




Usage
-----

see [test.usage.mjs](test.usage.mjs).




Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
