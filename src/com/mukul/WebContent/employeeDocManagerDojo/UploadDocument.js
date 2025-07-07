define([
	"dojo/_base/declare",
	"ecm/widget/layout/_LaunchBarPane",
	"dojo/on",
	"dojo/dom",
	"dojo/dom-class",
	"dijit/registry",
	"dojo/text!./templates/UploadDocument.html",
	"dojo/domReady!",
],
	function(declare, _LaunchBarPane, on, dom, domclass, registry, template) {
		/**
		 * @name employeeDocManagerDojo.UploadDocument
		 * @class 
		 * @augments ecm.widget.layout._LaunchBarPane
		 */
		return declare("employeeDocManagerDojo.UploadDocument", [
			_LaunchBarPane
		], {
			/** @lends employeeDocManagerDojo.UploadDocument.prototype */

			templateString: template,

			// Set to true if widget template contains DOJO widgets.
			widgetsInTemplate: true,

			postCreate: function() {
				this.logEntry("postCreate");
				this.inherited(arguments);

				/**
				 * Add custom logic (if any) that should be necessary after the feature pane is created. For example,
				 * you might need to connect events to trigger the pane to update based on specific user actions.
				 */
				// Bind button click
				var submitButton = registry.byId("submitBtn"); // make sure this button exists in UploadDocument.html
				if (submitButton) {
					on(submitButton, "click", function() {
						let docTitle = this.docTitle.get("value");
						let docClass = this.docClass.get("value");
						console.log("fetched")
						// ✅ Call plugin service
						ecm.model.Request.invokePluginService("employeeDoManagerDojo.UploadDocument", "insertMetaData", {
							requestParams: {
								docTitle: docTitle,
								docClass: docClass
							},
							requestCompleteCallback: function(response) {
								alert("Document Created! ID: " + response.docId);
							}
						});
					});
				}

				this.logExit("postCreate");
			},

			/**
			 * Optional method that sets additional parameters when the user clicks on the launch button associated with 
			 * this feature.
			 */
			setParams: function(params) {
				this.logEntry("setParams", params);

				if (params) {

					if (!this.isLoaded && this.selected) {
						this.loadContent();
					}
				}

				this.logExit("setParams");
			},

			/**
			 * Loads the content of the pane. This is a required method to insert a pane into the LaunchBarContainer.
			 */
			loadContent: function() {
				this.logEntry("loadContent");

				if (!this.isLoaded) {
					/**
					 * Add custom load logic here. The LaunchBarContainer widget will call this method when the user
					 * clicks on the launch button associated with this feature.
					 */
					this.isLoaded = true;
					this.needReset = false;
				}

				this.logExit("loadContent");
			},

			/**
			 * Resets the content of this pane.
			 */
			reset: function() {
				this.logEntry("reset");

				/**
				 * This is an option method that allows you to force the LaunchBarContainer to reset when the user
				 * clicks on the launch button associated with this feature.
				 */
				this.needReset = false;

				this.logExit("reset");
			},

			display: function(evt) {
				evt.preventDefault();
				var docTitle = this.docTitle.get("value");
				var docClass = this.docClass.get("value");
				console.log(docTitle)
				console.log(docClass)
				
			}
		});
	});
