'use strict';

var util      =  require('util')
  , stream    =  require('stream')
  , Transform =  stream.Transform
  ;

module.exports = PowerTransform;

util.inherits(PowerTransform, Transform);

// TODO: should probably guess from the upstream if it should be in objectMode or not

/**
 * Transforms numbers into the power of each number.
 *
 * @name PowerTransform
 * @function
 * @param {Object} opts options
 * @param {Number=} opts.throttle number of milliseconds to take to transform each number into its power  
 * @return {TransformStream} transform
 */
function PowerTransform (opts) {
  if (!(this instanceof PowerTransform)) return new PowerTransform(opts);

  opts = opts || {};
  Transform.call(this, opts);
  this.throttle = opts.throttle || 0;
  this._opts = opts;
}

PowerTransform.prototype._transform = function (chunk, encoding, cb) {
  var self = this;
  function respond () {
    var objectMode = self._opts.objectMode;
    var num = objectMode ? chunk : parseInt(chunk, 10)
      , pow = num * num

    self.push(objectMode ? pow : '' + pow)
    cb();
  }
  return this.throttle ? setTimeout(respond, this.throttle) : respond();
}
