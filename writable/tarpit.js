'use strict';

var util = require('util')
  , stream = require('stream')
  , Writable = stream.Writable

module.exports = TarpitWritable;

util.inherits(TarpitWritable, Writable);

/**
 * Just drops the values written to it.
 * Simulates processing time via throttle value
 *
 * @name TarpitWritable
 * @function
 * @param {Object} opts options
 * @param {Boolean=} opts.debug if true written values are logged to the console
 * @param {Number=}  opts.throttle number of milliseconds to delay each written chunk
 * @return {WritableStream} writable
 */
function TarpitWritable (opts) {
  if (!(this instanceof TarpitWritable)) return new TarpitWritable(opts);
  Writable.call(this, opts);

  opts = opts || {};
  this._debug = opts.debug;
  this.throttle = opts.throttle || 0;
}

TarpitWritable.prototype._write = function (chunk, encoding, cb) {
  if (this._debug) console.error('writing ', chunk);

  setTimeout(cb, this.throttle);
}
