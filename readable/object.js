'use strict';

var stream = require('stream');
var util = require('util');

var Readable = stream.Readable;

module.exports = ObjectReadable;

util.inherits(ObjectReadable, Readable);

/**
 * Generates objects with a count property that increases between the given from and to values.
 * 
 * @name ObjectReadable
 * @function
 * @param {Object} opts options
 * @param {Number=} opts.from start value to generate
 * @param {Number=} opts.to end value to generate
 * @param {Number=} opts.throttle number of milliseconds to take to generate each number  
 * @return {ReadableStream} readable
 */
function ObjectReadable (opts) {
  if (!(this instanceof ObjectReadable)) return new ObjectReadable(opts);

  opts = opts || {};
  opts.objectMode = true;
  Readable.call(this, opts);

  this.idx = opts.from || 0;
  this.to = opts.to;
  this.throttle = opts.throttle || 0;
  this._opts = opts;
}

ObjectReadable.prototype._read = function () {
  var self = this;
  if (self.idx > self.to) return self.push(null);
  function push () { 
    self.push({ foo: 'bar', beep: { boop: 'beep-boop' }, count: self.idx++ });
  }

  setTimeout(push, self.throttle);
};
