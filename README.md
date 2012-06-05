# jquery-select-replacement

A replacement of the vexatious select drop down.

## Usage, it's very basic

- You _wrap_ the `select` and `label` in a `div` (or your element of choice).
- You assign the attribute `title` with a more descriptive replacement of the `text value` to the `<option>`.
- You assign the data attribute of `cls` (short for class as in `className`) to all `<option>`.

## Example HTML

<pre><code>
&lt;div class="select-replacement"&gt;
    &lt;label for="pizza"&gt;Pick a Pizza</label&gt;
    &lt;select id="pizza"&gt;
        &lt;option title="I want a Calzone" data-cls="closed-pizza"&gt;Calzone&lt;/option&gt;
        &lt;option title="I want a Buzzola" data-cls="thin-pizza"&gt;Buzzola&lt;/option&gt;
        &lt;option title="I want a Margerita" data-cls="thin-pizza"&gt;Margerita&lt;/option&gt;
        &lt;option title="I am hungry!" data-cls="big-pizza"&gt;Pan Pizza&lt;/option&gt;
        &lt;option title="Sod this, I'm going to Pizza Hut!" data-cls="pizza-hut"&gt;Meat Lovers&lt;/option&gt;
    &lt;/select&gt;
&lt;/div&gt;
</code></pre>

## Example Javascript

`$('.select-replacement').linkReplacement();`