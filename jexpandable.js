jQuery.fn.extend({

  jexpandable: function() {

    this.each(function () {

      var _this       = $(this),
        text          = _this.data('text'),
        doShow        = false;
        CHARS_TO_SHOW = _this.data('count') || 120;

      if (typeof text === "undefined") {
        throw "jexpandable: No text provided. Make sure text is provided in the `data-text` attribute.";
      }

      function linkContainer(opts) {
        return ' <span style="border-bottom: 1px  dashed;"> ' + opts.title + '</span>';
      }

      function toggleVisibility() {

        var content;

        if (doShow || text.length <= CHARS_TO_SHOW) {
          if (text.length > CHARS_TO_SHOW) {
            content = text + linkContainer({title: 'see less'});
          } else {
            content = text;
          }
        } else {
          if (text.indexOf("\n") == -1) {
            content = text.substr(0, CHARS_TO_SHOW);
          } else {
            content = text.split("\n")[0];
          }
          content += "..." + linkContainer({title: 'see more'});
        }

        _this.html(content);
        doShow = !doShow;
      };
      toggleVisibility();

      _this.on('click', function () {
        toggleVisibility();
      });

    });
  }

});
