	$.fn.extend({
		/**
		 * Requires the following structure:
		 * - Wrapper with label and select
		 *
		 * Example of how an <option> looks like:
		 *   <option value="ADMIN" title="Is not visible to customer" data-cls="negative">No</option>
		 *   attr(title) and data(cls) are REQUIRED
		 */
		linkReplacement: function(o) {
			var options = $.extend({
				select: 0,
				linksClass: 'links'
			}, 0),
			LinkReplacement = {};

			LinkReplacement.populate = function(parent) {
				this.label = $('label', parent);
				this.select = $('select', parent);
				this.options = this.select.find('option');
				this.wrapper = $('<ol></ol>');
				this.wrapper.addClass(options.linksClass);
				this.visual = $('<div></div>');
				this.visual.addClass('visual');
			};

			LinkReplacement.click = function(e, i) {
				var me = $(this);
				e.preventDefault();
				$('.selected', this.parentNode.parentNode).removeClass('selected');
				me.addClass('selected');
				LinkReplacement.options.removeAttr('selected');
				$(LinkReplacement.options[i]).attr('selected', 'selected');
				LinkReplacement.selectedValue(me);
				LinkReplacement.wrapper.fadeOut(300);
				return false;
			};

			LinkReplacement.selectedValue = function(item) {
				var me = $(item.parent().html());
				me.removeClass('selected');
				this.visual.empty();
				this.visual.append(me);
				this.wrapper.fadeOut(200);
				me.on('click', function(e) {
					e.preventDefault();
					LinkReplacement.wrapper.fadeIn(300);
					return false;
				});
			};

			return this.each(function(idx, item) {
				LinkReplacement.populate(item);
				$(item).append(LinkReplacement.visual);
				$(item).append(LinkReplacement.wrapper);
				LinkReplacement.options.each(function(i, elm) {
					var li = $('<li></li>'),
						title = $(this).attr('title'),
						link = $('<a></a>');
					elm = $(elm);
					li.addClass(elm.data('cls'));
					link.attr('href', '#');
					link.text(title);
					link.on('click', function(e) {
						LinkReplacement.click.call(this, e, i);
					});
					li.append(link);
					LinkReplacement.wrapper.append(li);
				});
				$('.links li:eq(' + options.select + ') a').click();
				$('label, select', this).hide();
			});
		}
	});
