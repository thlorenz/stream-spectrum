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
 * @param opts {Options} 
 *  - debug {Boolean} if true written values are logged to the console
 *  - throttle {Number} number of milliseconds to delay each written chunk
 * @return {Stream} writable
 */
function TarpitWritable (opts) {
  if (!(this instanceof TarpitWritable)) return new TarpitWritable(opts);
  Writable.call(this, opts);

  this._debug = opts.debug;
  this.throttle = opts.throttle || 0;
}

TarpitWritable.prototype._write = function (chunk, encoding, cb) {
  if (this._debug) console.error('writing ', chunk);

  setTimeout(cb, this.throttle);
}
