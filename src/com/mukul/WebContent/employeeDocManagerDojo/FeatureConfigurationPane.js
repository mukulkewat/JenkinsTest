define([
		"dojo/_base/declare",
		"dijit/_TemplatedMixin",
		"dijit/_WidgetsInTemplateMixin",
		"ecm/widget/admin/PluginConfigurationPane",
		"dojo/text!./templates/FeatureConfigurationPane.html"
	],
	function(declare, _TemplatedMixin, _WidgetsInTemplateMixin, PluginConfigurationPane, template) {

		/**
		 * @name EmployeeDocManagerDojo.FeatureConfigurationPane
		 * @class 
		 * @augments ecm.widget.admin.PluginConfigurationPane
		 */
		return declare("EmployeeDocManagerDojo.FeatureConfigurationPane", [ PluginConfigurationPane, _TemplatedMixin, _WidgetsInTemplateMixin], {
		/** @lends EmployeeDocManagerDojo.ConfigurationPane.prototype */

		templateString: template,
		widgetsInTemplate: true,
	
		/**
		 * Initially load all the values from the configurationString onto the various fields.
		 */
		load: function(callback) {
		},
		
		/**
		 * Converts configuration values into a string that will be stored into the IBM Content Navigator configuration database.
		 */
		save: function() {
		},
		
		/**
		 * Validates this feature configuration pane.
		 */
		validate: function() {
			return true;
		}
	});
});
