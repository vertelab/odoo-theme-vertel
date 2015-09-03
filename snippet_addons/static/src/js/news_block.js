$(document).ready(function() {
    "use strict";

    var website = openerp.website;
    var _t = openerp._t;

    console.log("hello");
//    console.log(website.session.model('blog.post').call('name_search', [], { context: website.get_context() }));
    $(".news-block").append(
        website.session.model('blog.post')
            .call('name_search', [], { context: website.get_context() })
    );

    console.log("Hejsan");

});