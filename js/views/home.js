define(['backbone','underscore', 'jquery'], function(Backbone, _, $) {
	return Backbone.View.extend({

		id: 'home-page',

		initialize: function() {
			console.log('Home view initialized!');
			this.render();
		},

		render: function() {
			this.el.innerHTML = '<h2>Who would know?!</h2>';
			// document.getElementById('page-content').appendChild(this.el);
			console.log('...and even rendered!', this);
			return this;
		}
	});
});