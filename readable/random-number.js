'use strict';

var util = require('util')
  , stream = require('stream')
  , Readable = stream.Readable

module.exports = RandomNumberReadable;

util.inherits(RandomNumberReadable, Readable);

/**
 * Generates random numbers between the given min and max values.
 * 
 * @name RandomNumberReadable
 * @function
 * @param {Object} opts options
 * @param {Number=} opts.min minimum value to generate
 * @param {Number=} opts.max maximum value to generate
 * @param {Number=} opts.throttle number of milliseconds to take to generate each number  
 * @return {ReadableStream} readable
 */
function RandomNumberReadable (opts) {
  if (!(this instanceof RandomNumberReadable)) return new RandomNumberReadable(opts);
  opts = opts || {};
  Readable.call(this, opts);

  this._min = opts.min || 0;
  this._max = opts.max || 100;
  this.throttle = opts.throttle || 0;

  this._opts = opts;
}

RandomNumberReadable.prototype._read = function () {
  var push = function () { 
    this.push( this._opts.objectMode ? this._next() : '' + this._next()); 
  }.bind(this);
  setTimeout(push, this.throttle);
}

RandomNumberReadable.prototype._next = function () {
  return Math.floor(Math.random() * (this._max - this._min + 1)) + this._min
}
