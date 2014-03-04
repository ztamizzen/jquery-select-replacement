(function( $ ) {

    /**
     * Requires the following structure:
     * - Wrapper with label and select
     *  <wrapper>
     *      <label>
     *      <select>
     * Example of how an <option> looks like:
     *   <option value="ADMIN" title="Is not visible to customer" data-cls="negative">No</option>
     *   attr(title) and data(cls) are REQUIRED
     */
    $.fn.linkReplacement = function(o) {
        var options = $.extend({
            includeLabel: false,
            select:0,
            linksClass:'links',
            onClickCallback: function() {}
        }, o);

        return this.each(function (idx, item) {
            var LinkReplacement = {};
            LinkReplacement.populate = function (parent) {
                LinkReplacement.label = $('label', parent);
                LinkReplacement.select = $('select', parent);
                LinkReplacement.options = this.select.find('option');
                LinkReplacement.wrapper = $('<ol></ol>');
                LinkReplacement.wrapper.addClass(options.linksClass);
                LinkReplacement.visual = $('<div></div>');
                LinkReplacement.visual.addClass('visual');
                if (options.includeLabel) {
                    LinkReplacement.visualLabel = $('<span></span>');
                    LinkReplacement.visualLabel.text(LinkReplacement.label.text());
                    LinkReplacement.visual.append(LinkReplacement.visualLabel);
                }
            };

            LinkReplacement.click = function (e, i) {
                var me = $(this);
                e.preventDefault();
                $('.selected', this.parentNode.parentNode).removeClass('selected');
                me.addClass('selected');
                LinkReplacement.options.removeAttr('selected');
                $(LinkReplacement.options[i]).attr('selected', 'selected');
                LinkReplacement.selectedValue(me);
                LinkReplacement.wrapper.fadeOut(300);
                if ( typeof options.onClickCallback === 'function' ) {
                    options.onClickCallback.call(this,
                        LinkReplacement.options[i].text);
                }
                return false;
            };

            LinkReplacement.selectedValue = function (item) {
                var me = $(item.parent().html());
                me.removeClass('selected');
                me.removeAttr('class');
                LinkReplacement.visual.empty();
                if (options.includeLabel) {
                    LinkReplacement.visualLabel = $('<span></span>');
                    LinkReplacement.visualLabel.text(LinkReplacement.label.text());
                    LinkReplacement.visual.append(LinkReplacement.visualLabel);
                }
                LinkReplacement.visual.append(me);
                LinkReplacement.wrapper.fadeOut(200);
                me.on('click', function (e) {
                    e.preventDefault();
                    LinkReplacement.wrapper.fadeIn(300);
                    return false;
                });
            };
            LinkReplacement.populate(item);
            $(item).append(LinkReplacement.visual);
            $(item).append(LinkReplacement.wrapper);
            LinkReplacement.options.each(function (i, elm) {
                var li = $('<li></li>'),
                    title = $(this).attr('title') || this.text || this.value,
                    link = $('<a></a>');
                elm = $(elm);
                li.addClass(elm.data('cls'));
                link.attr('href', '#');
                link.text(title);
                link.on('click', function (e) {
                    LinkReplacement.click.call(this, e, i);
                });
                li.append(link);
                LinkReplacement.wrapper.append(li);
            });
            $('.' + linksClass + ' li:eq(' + options.select + ') a', item).click();
            $('label, select', item).hide();
        });
    };

})( jQuery );
