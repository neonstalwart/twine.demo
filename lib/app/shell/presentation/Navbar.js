/**
 * @license Copyright (c) 2011 Cello Software, LLC.
 * All rights reserved.
 * Available via the new BSD License.
 */
/*jshint
    bitwise: false, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, maxlen: 100,
    newcap: true, noarg: true, noempty: true, onevar: true, passfail: false, undef: true,
    white: true
*/
/*global define: false, require: false */

define([
	'dojo',
	'dijit/_WidgetBase',
	'mustache/Templated',
	'text!./Navbar.html'
], function (d, _WidgetBase, mustache, templateString) {
	return d.declare([_WidgetBase, mustache], {
		templateString: templateString,

		tEvents: {
			'.login': 'onclick:login',
			'.modulelist': 'onclick:navigate',
			'.currentuser': 'onclick:profile'
		},

		postMixInProperties: function () {
			this.inherited(arguments);
			this.model.watch(d.hitch(this, function () {
				this.render();
			}));
		},

		login: function (e) {
			d.stopEvent(e);
			this.model[this.model.user ? 'logout' : 'login']();
		},

		navigate: function (e) {
			d.stopEvent(e);
			var href = e.target.href.replace(/^.*#/, 'demo.');
			if (href) {
				this.model.navigate(href);
			}
		},

		profile: function (e) {
			d.stopEvent(e);
			console.log('user profile requested');
		}
	});
});