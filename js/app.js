/*jshint browser: true, newcap: true, nomen: false, plusplus: false, undef: true, white: false */

var app = {};


var init = function() {
    app.collections = {
        images: new Collections.Images
    };

    app.views = {
        images: new Views.Images({
            collection: app.collections.images,
            name: "Images",
            modelName: "Image"
        }),

        pagination: new Views.Pagination({
            collection: app.collections.images
        }),

        viewer: new Views.Viewer({
            collection: app.collections.images
        })
    };

    app.views.images.$el.appendTo("body");
    app.views.pagination.$el.appendTo("body");
    app.views.viewer.$el.appendTo("body");
}

$(init);
