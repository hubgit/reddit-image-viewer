var Collections = {};

Collections.Images = Backbone.Collection.extend({
	n: 50,
	after: null,

	url: function() {
		var params = {
			count: this.n,
			after: this.after,
		};

		return "http://www.reddit.com/r/" + this.getFeedFromHash() + ".json?" + $.param(params);
	},

	parse: function(data) {
		if(!data.data.children) return [];

		this.after = data.data.after;

		return data.data.children.map(function(item) {
			if (item.data.url.match(/^http:\/\/imgur\.com\/\w+$/)) {
				item.data.url += ".jpg";
			}

			return new Models.Image(item.data);
		});
	},

	getFeedFromHash: function() {
        var hash = window.location.hash.replace(/^#/, "");
        return hash ? hash : "awww";
    }
});
