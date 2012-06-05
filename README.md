# jquery-select-replacement

A replacement of the vexatious select drop down.

## Usage, it's very basic

- You _wrap_ the `select` and `label` in a `div` (or your element of choice).
- You assign the attribute `title` with a more descriptive replacement of the `text value` to the `<option>`.
- You assign the data attribute of `cls` (short for class as in `className`) to all `<option>`.

## Example HTML

<pre><code>


<div class="select-replacement">

    <label for="pizza">Pick a Pizza</label>

    <select id="pizza">
        <option title="I want a Calzone" data-cls="closed-pizza">Calzone</option>
        <option title="I want a Buzzola" data-cls="thin-pizza">Buzzola</option>
        <option title="I want a Margerita" data-cls="thin-pizza">Margerita</option>
        <option title="I am hungry!" data-cls="big-pizza">Pan Pizza</option>
        <option title="Sod this, I'm going to Pizza Hut!" data-cls="pizza-hut">Meat Lovers</option>
    </select>

</div>


</code></pre>

## Example Javascript

`$('.select-replacement').linkReplacement();`