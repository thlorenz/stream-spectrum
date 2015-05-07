'use strict';

var util = require('util')
  , stream = require('stream')
  , Readable = stream.Readable

module.exports = NumberReadable;

util.inherits(NumberReadable, Readable);

/**
 * Generates increasing numbers between the given from and to values.
 * 
 * @name NumberReadable
 * @function
 * @param {Object} opts options
 * @param {Number=} opts.from start value to generate
 * @param {Number=} opts.to end value to generate
 * @param {Number=} opts.throttle number of milliseconds to take to generate each number  
 * @return {ReadableStream} readable
 */
function NumberReadable (opts) {
  if (!(this instanceof NumberReadable)) return new NumberReadable(opts);
  Readable.call(this, opts);
  opts = opts || {};
  this.idx = opts.from || 0;
  this.to = opts.to;
  this.throttle = opts.throttle || 0;
  this._opts = opts;
}

NumberReadable.prototype._read = function () {
  var self = this;
  if (self.idx > self.to) return self.push(null);
  function push () { 
    self.push(self._opts.objectMode ? self.idx++ : '' + self.idx++); 
  }

  setTimeout(push, self.throttle);
}
