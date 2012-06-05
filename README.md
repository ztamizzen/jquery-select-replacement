# jquery-select-replacement

A replacement of the vexatious select drop down.

## Usage, it's very basic

- You _wrap_ the `select` and `label` in a `div` (or your element of choice).
- You assign the attribute `title` with a more descriptive replacement of the `text value` to the `<option>`.
- You assign the data attribute of `cls` (short for class as in `className`) to all `<option>`.

## Example HTML

<pre>
<code>
&lt;div class="select-replacement"&gt;
    &lt;label for="pizza"&gt;Pick a Pizza&lt;/label&gt;
    &lt;select id="pizza"&gt;
        &lt;option title="I want a Calzone" data-cls="closed-pizza"&gt;Calzone&lt;/option&gt;
        &lt;option title="I want a Buzzola" data-cls="thin-pizza"&gt;Buzzola&lt;/option&gt;
        &lt;option title="I want a Margerita" data-cls="thin-pizza"&gt;Margerita&lt;/option&gt;
        &lt;option title="I am hungry!" data-cls="big-pizza"&gt;Pan Pizza&lt;/option&gt;
        &lt;option title="Sod this, I'm going to Pizza Hut!" data-cls="pizza-hut"&gt;Meat Lovers&lt;/option&gt;
    &lt;/select&gt;
&lt;/div&gt;
</code>
</pre>

## Example Javascript

`$('.select-replacement').linkReplacement();`

## Output HTML

<pre><code>
&lt;label style="display: none;" for="pizza"&gt;Pick a pizza&lt;/label&gt;
&lt;select style="display: none;" id="pizza"&gt;
    &lt;option selected="selected" title="I want a Calzone" data-cls="closed-pizza"&gt;Calzone&lt;/option&gt;
    &lt;option title="I want a Buzzola" data-cls="thin-pizza"&gt;Buzzola&lt;/option&gt;
    &lt;option title="I want a Margerita" data-cls="thin-pizza"&gt;Margerita&lt;/option&gt;
    &lt;option title="I am hungry!" data-cls="big-pizza"&gt;Pan Pizza&lt;/option&gt;
    &lt;option title="Sod this, I'm going to Pizza Hut!" data-cls="pizza-hut"&gt;Meat Lovers&lt;/option&gt;
&lt;/select&gt;
&lt;div class="visual"&gt;
    &lt;a class="" href="#"&gt;I want a Calzone&lt;/a&gt;
&lt;/div&gt;
&lt;ol style="display: none;" class="links"&gt;
    &lt;li class="closed-pizza"&gt;
        &lt;a class="" href="#"&gt;I want a Calzone&lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="thin-pizza"&gt;
        &lt;a class="selected" href="#"&gt;I want a Buzzola&lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="thin-pizza"&gt;
        &lt;a class="" href="#"&gt;I want a Margerita&lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="big-pizza"&gt;
        &lt;a class="" href=""&gt;I am hungry!&lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="pizza-hut"&gt;
        &lt;a class="" href=""&gt;Sod this, I'm going to Pizza Hut!&lt;/a&gt;
    &lt;/li&gt;
&lt;/ol&gt;
</code></pre>
