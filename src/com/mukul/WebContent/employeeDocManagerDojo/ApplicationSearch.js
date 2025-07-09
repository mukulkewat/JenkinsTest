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
    // Set to true if widget template contains DOJO widgets.
	widgetsInTemplate: true,
    moduleId: "employeeDocManagerDojo.ApplicationSearch",

    postCreate: function() {
      this.inherited(arguments);
	  console.log("Loading document classes..."); 
      this._loadDocumentClasses();
    },

    _loadDocumentClasses: function() {
      const self = this;

      /*const repo = ecm.model.desktop.repositories[0]; // pick first repo
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
        });*/

        
			const store = new Memory({
			  data: [
			    {
			      template_name: "abcde",
			      template_label: "abcde",
			      template_desc: "abcde"
			    },
			    {
			      template_name: "HA",
			      template_label: "ABCDE",
			      template_desc: ""
			    },
			    {
			      template_name: "ABCDEF",
			      template_label: "ABCDEF",
			      template_desc: "ABCDEF"
			    },
			    {
			      template_name: "AndhraBank",
			      template_label: "Andhra Bank",
			      template_desc: "Andhra Bank"
			    },
			    {
			      template_name: "Bharathi",
			      template_label: "BankApliactions",
			      template_desc: ""
			    },
			    {
			      template_name: "BankEmp1",
			      template_label: "BankEmp1",
			      template_desc: "BankEmp1"
			    },
			    {
			      template_name: "BankEmployee",
			      template_label: "BankEmployee",
			      template_desc: "BankEmployee"
			    }
			  ],
			  idProperty: "template_name"
			});
		
		setTimeout(function () {
		     //console.log("Setting store on ComboBox:", classList);
		     self.classCombo.set("store", store);
		     self.classCombo.set("searchAttr", "name");

		     // Force re-render if needed
		     self.classCombo.startup();
		   }, 3000); // 300ms delay — tweak if needed
		 /*});*/
      
    }
  });
});
