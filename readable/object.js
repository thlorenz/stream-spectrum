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
 * @param opts {Options}
 *  - from: {Number} start value to generate
 *  - to: {Number} end value to generate
 *  - throttle: {Number} number of milliseconds to take to generate each number  
 * @return {Stream} readable
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
