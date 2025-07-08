define([
  "dojo/_base/declare",
  "ecm/widget/layout/_LaunchBarPane",
  "dojo/text!./templates/ApplicationSearch.html",
  "dojo/store/Memory",
  "dijit/form/ComboBox",
  "ecm/model/Request",
  "ecm/model/Repository"
], function(declare, _LaunchBarPane, template, Memory, ComboBox, Request, Repository) {

  return declare("employeeDocManagerDojo.ApplicationSearch", [_LaunchBarPane], {
    templateString: template,
    moduleId: "employeeDocManagerDojo.ApplicationSearch",

    postCreate: function() {
      this.inherited(arguments);
	  console.log("Loading document classes..."); 
      this._loadDocumentClasses();
    },

    _loadDocumentClasses: function() {
      const self = this;

      const repo = ecm.model.desktop.repositories[0]; // pick first repo
      if (!repo || !repo.connected) {
        console.warn("Repository not connected.");
        return;
      }

      repo.retrieveContentClasses(function(contentClasses) {
        const classList = [];

        contentClasses.forEach(function(cls) {
          // Optional: filter only document classes
          if (cls.isDocument()) {
            classList.push({ name: cls.name, id: cls.id });
          }
        });

        const store = new Memory({
          data: classList,
          idProperty: "id"
        });

        self.classCombo.set("store", store);
        self.classCombo.set("searchAttr", "name");
      });
    }
  });
});
