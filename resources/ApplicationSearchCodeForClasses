define([
	"dojo/_base/declare",
	"ecm/widget/layout/_LaunchBarPane",
	"dojo/text!./templates/ApplicationSearch.html",
	"dojo/store/Memory",
	"dijit/form/ComboBox",
	"ecm/model/Request",
	"ecm/model/Repository",
	"dojo/_base/lang" // ✅ IMPORTANT: Needed for lang.hitch
], function(declare, _LaunchBarPane, template, Memory, ComboBox, Request, Repository, lang) {

	return declare("employeeDocManagerDojo.ApplicationSearch", [_LaunchBarPane], {
		templateString: template,
		widgetsInTemplate: true,
		moduleId: "employeeDocManagerDojo.ApplicationSearch",

		postCreate: function () {
			this.inherited(arguments);

			const repository = ecm.model.desktop.repositories[0];

			if (repository.connected) {
				console.log("Repository connected");
				this._loadDocumentClasses(repository);
			} else {
				console.log("Waiting for repository connection...");
				repository.retrieveUserRoles(lang.hitch(this, function () {
					this._loadDocumentClasses(repository);
				}));
			}
		},

		_loadDocumentClasses: function (repository) {
			console.log("Fetching content classes...");
			repository.retrieveContentClasses(lang.hitch(this, function (contentClasses) {
				const docClassData = [];

				for (let i = 0; i < contentClasses.length; i++) {
					const item = contentClasses[i];
					if (item.parentClassId === "Document" && item.allowsInstances) {
						docClassData.push({
							id: item.id,       // used as value
							name: item.name    // used for label/search
						});
					}
				}

				console.log("docClassData:", docClassData);

				// ✅ Set up store
				const memoryStore = new Memory({
					data: docClassData,
					idProperty: "id"
				});

				// ✅ Connect to ComboBox
				this.searchComboBox.set("store", memoryStore);
				this.searchComboBox.set("searchAttr", "name"); // used for filtering

				// ✅ Optional: set initial value for testing
				if (docClassData.length > 0) {
					this.searchComboBox.set("value", docClassData[0].name);
				}

				// ✅ Handle selection change
				this.searchComboBox.on("change", function (value) {
					console.log("Selected value:", value);
				});
			}));
		}
	});
});
