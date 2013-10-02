# stream-spectrum

A variety of streams to be used in samples and/or tests.

The following streams exist:

## readable

###*readable/number*

`require(stream-spectrum/readable/number)`

```
/**
 * Generates increasing numbers between the given from and to values.
 * 
 * @name NumberReadable
 * @function
 * @param opts {Options}
 *  - from: {Number} start value to generate
 *  - to: {Number} end value to generate
 *  - throttle: {Number} number of milliseconds to take to generate each number  
 * @return {Stream} readable
 */
NumberReadable (opts)
 ```

###*readable/random-number*

`require(stream-spectrum/readable/random-number)`

```
/**
 * Generates random numbers between the given min and max values.
 * 
 * @name RandomNumberReadable
 * @function
 * @param opts {Options}
 *  - min: {Number} minimum value to generate
 *  - max: {Number} maximum value to generate
 *  - throttle: {Number} number of milliseconds to take to generate each number  
 * @return {Stream} readable
 */
RandomNumberReadable (opts)
```

## transform

`require(stream-spectrum/transform/power)`

###*transform/power*

```
/**
 * Transforms numbers into the power of each number.
 *
 * @name PowerTransform
 * @function
 * @param opts {Options}
 *  - throttle {Number} number of milliseconds to take to transform each number into its power  
 * @return {Stream} transform
 */
function PowerTransform (opts)
```

## writables

`require(stream-spectrum/writable/tarpit)`

```
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
```

## Installation

    npm install stream-spectrum

## API


## License

MIT
