!function(t){var o,n,e,i,d,s=(n=[],e=!1,i=function(){clearTimeout(o),o=setTimeout(d,100)},d=function(){for(var t=0,o=n.length;t<o;t++)n[t].apply()},{register:function(o){n.push(o),!1===e&&(t(window).bind("resize",i),e=!0)},unregister:function(t){var o=n.indexOf(t);o>-1&&n.splice(o,1)}}),r=function(o,n){this.element=t(o),this.options=n,"left"===n.align?this.dropdown=t('<li class="dropdown hide pull-left tabdrop"><a class="dropdown-toggle" data-toggle="dropdown" href="#"><i class="ri-more-fill"></i></a><ul class="dropdown-menu"></ul></li>'):this.dropdown=t('<li class="dropdown hide pull-right tabdrop"><a class="dropdown-toggle" data-toggle="dropdown" href="#"><i class="ri-more-fill"></i></a><ul class="dropdown-menu dropdown-menu-right"></ul></li>'),this.dropdown.prependTo(this.element),this.element.parent().is(".tabs-below")&&this.dropdown.addClass("dropup");var e=t.proxy(this.layout,this);s.register(e),this.element.on("shown.bs.tab",(function(t){e()})),this.teardown=function(){s.unregister(e),this.element.off("shown.bs.tab",(function(t){e()}))},this.layout()};r.prototype={constructor:r,layout:function(){var t=this,o=[];function n(o){t.dropdown.find("a span.display-tab").html(o)}t.element.append(t.dropdown.find("li")),function e(i){t.element.find("> li:not(.tabdrop)").each((function(){this.offsetTop>t.options.offsetTop&&o.push(this)})),o.length>0?(i||(t.dropdown.removeClass("hide"),t.dropdown.find("ul").empty()),t.dropdown.find("ul").prepend(o),1==t.dropdown.find(".active").length?(t.dropdown.addClass("active"),n(t.dropdown.find(".active > a").html())):(t.dropdown.removeClass("active"),function(o){n(jQuery.isFunction(t.options.text)?t.options.text(o):t.options.text)}(o)),t.element.css("display").indexOf("flex")>-1&&t.element.find("li.tabdrop").hasClass("pull-right")&&(t.element.find("li.tabdrop").css({position:"absolute",right:0}),t.element.css("padding-right",t.element.find(".tabdrop").outerWidth(!0))),o=[],e(!0)):i||t.dropdown.addClass("hide")}()}},t.fn.tabdrop=function(o){return this.each((function(){var n=t(this),e=n.data("tabdrop"),i="object"==typeof o&&o;e||(i=t.extend({},t.fn.tabdrop.defaults,i),e=new r(this,i),n.data("tabdrop",e)),"string"==typeof o&&e[o]()}))},t.fn.tabdrop.defaults={text:'<i class="fa fa-bars"></i>',offsetTop:0},t.fn.tabdrop.Constructor=r}(window.jQuery);