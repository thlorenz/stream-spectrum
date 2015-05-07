# stream-spectrum

A variety of streams to be used in samples and/or tests.

## Installation

    npm install stream-spectrum

## API


<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>
<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="NumberReadable"><span class="type-signature"></span>NumberReadable<span class="signature">(opts)</span><span class="type-signature"> &rarr; {ReadableStream}</span></h4>
</dt>
<dd>
<div class="description">
<p>Generates increasing numbers between the given from and to values.</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>opts</code></td>
<td class="type">
<span class="param-type">Object</span>
</td>
<td class="description last"><p>options</p>
<h6>Properties</h6>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>from</code></td>
<td class="type">
<span class="param-type">Number</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>start value to generate</p></td>
</tr>
<tr>
<td class="name"><code>to</code></td>
<td class="type">
<span class="param-type">Number</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>end value to generate</p></td>
</tr>
<tr>
<td class="name"><code>throttle</code></td>
<td class="type">
<span class="param-type">Number</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>number of milliseconds to take to generate each number</p></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/stream-spectrum/blob/master/readable/number.js">readable/number.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/stream-spectrum/blob/master/readable/number.js#L11">lineno 11</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>readable</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">ReadableStream</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="ObjectReadable"><span class="type-signature"></span>ObjectReadable<span class="signature">(opts)</span><span class="type-signature"> &rarr; {ReadableStream}</span></h4>
</dt>
<dd>
<div class="description">
<p>Generates objects with a count property that increases between the given from and to values.</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>opts</code></td>
<td class="type">
<span class="param-type">Object</span>
</td>
<td class="description last"><p>options</p>
<h6>Properties</h6>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>from</code></td>
<td class="type">
<span class="param-type">Number</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>start value to generate</p></td>
</tr>
<tr>
<td class="name"><code>to</code></td>
<td class="type">
<span class="param-type">Number</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>end value to generate</p></td>
</tr>
<tr>
<td class="name"><code>throttle</code></td>
<td class="type">
<span class="param-type">Number</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>number of milliseconds to take to generate each number</p></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/stream-spectrum/blob/master/readable/object.js">readable/object.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/stream-spectrum/blob/master/readable/object.js#L12">lineno 12</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>readable</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">ReadableStream</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="PowerTransform"><span class="type-signature"></span>PowerTransform<span class="signature">(opts)</span><span class="type-signature"> &rarr; {TransformStream}</span></h4>
</dt>
<dd>
<div class="description">
<p>Transforms numbers into the power of each number.</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>opts</code></td>
<td class="type">
<span class="param-type">Object</span>
</td>
<td class="description last"><p>options</p>
<h6>Properties</h6>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>throttle</code></td>
<td class="type">
<span class="param-type">Number</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>number of milliseconds to take to transform each number into its power</p></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/stream-spectrum/blob/master/transform/power.js">transform/power.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/stream-spectrum/blob/master/transform/power.js#L14">lineno 14</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>transform</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">TransformStream</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="RandomNumberReadable"><span class="type-signature"></span>RandomNumberReadable<span class="signature">(opts)</span><span class="type-signature"> &rarr; {ReadableStream}</span></h4>
</dt>
<dd>
<div class="description">
<p>Generates random numbers between the given min and max values.</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>opts</code></td>
<td class="type">
<span class="param-type">Object</span>
</td>
<td class="description last"><p>options</p>
<h6>Properties</h6>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>min</code></td>
<td class="type">
<span class="param-type">Number</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>minimum value to generate</p></td>
</tr>
<tr>
<td class="name"><code>max</code></td>
<td class="type">
<span class="param-type">Number</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>maximum value to generate</p></td>
</tr>
<tr>
<td class="name"><code>throttle</code></td>
<td class="type">
<span class="param-type">Number</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>number of milliseconds to take to generate each number</p></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/stream-spectrum/blob/master/readable/random-number.js">readable/random-number.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/stream-spectrum/blob/master/readable/random-number.js#L11">lineno 11</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>readable</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">ReadableStream</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="TarpitWritable"><span class="type-signature"></span>TarpitWritable<span class="signature">(opts)</span><span class="type-signature"> &rarr; {WritableStream}</span></h4>
</dt>
<dd>
<div class="description">
<p>Just drops the values written to it.
Simulates processing time via throttle value</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>opts</code></td>
<td class="type">
<span class="param-type">Object</span>
</td>
<td class="description last"><p>options</p>
<h6>Properties</h6>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>debug</code></td>
<td class="type">
<span class="param-type">Boolean</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>if true written values are logged to the console</p></td>
</tr>
<tr>
<td class="name"><code>throttle</code></td>
<td class="type">
<span class="param-type">Number</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>number of milliseconds to delay each written chunk</p></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/stream-spectrum/blob/master/writable/tarpit.js">writable/tarpit.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/stream-spectrum/blob/master/writable/tarpit.js#L11">lineno 11</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>writable</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">WritableStream</span>
</dd>
</dl>
</dd>
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->

## License

MIT
