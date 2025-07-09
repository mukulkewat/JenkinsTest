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
          data: [{
			  "datastore": {
			    "identifier": "template_name",
			    "label": "template_label",
			    "items": [
			      {
			        "template_name": "abcde",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "abcde",
			        "template_desc": "abcde"
			      },
			      {
			        "template_name": "HA",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "ABCDE",
			        "template_desc": ""
			      },
			      {
			        "template_name": "ABCDEF",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "ABCDEF",
			        "template_desc": "ABCDEF"
			      },
			      {
			        "template_name": "AndhraBank",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "Andhra Bank",
			        "template_desc": "Andhra Bank"
			      },
			      {
			        "template_name": "Bharathi",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "BankApliactions",
			        "template_desc": ""
			      },
			      {
			        "template_name": "BankEmp1",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "BankEmp1",
			        "template_desc": "BankEmp1"
			      },
			      {
			        "template_name": "BankEmployee",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "BankEmployee",
			        "template_desc": "BankEmployee"
			      },
			      {
			        "template_name": "BusinessLoan",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "BusinessLoan",
			        "template_desc": "BusinessLoan"
			      },
			      {
			        "template_name": "CollageInformation",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "Collage Information",
			        "template_desc": "Collage Information"
			      },
			      {
			        "template_name": "ControlledClassForRole",
			        "parentClassId": "ABCDEF",
			        "allowsInstances": true,
			        "template_label": "ControlledClassForRole",
			        "template_desc": "ControlledClassForRole"
			      },
			      {
			        "template_name": "Default",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "Default",
			        "template_desc": "Default"
			      },
			      {
			        "template_name": "DelDemo",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "DelDemo",
			        "template_desc": "DelDemo"
			      },
			      {
			        "template_name": "DemoMarkingSet",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "DemoMarkingSet",
			        "template_desc": "DemoMarkingSet"
			      },
			      {
			        "template_name": "DocClassforRole",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "DocClassforRole",
			        "template_desc": "DocClassforRole"
			      },
			      {
			        "template_name": "DocRoleClass",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "DocRoleClass",
			        "template_desc": "DocRoleClass"
			      },
			      {
			        "template_name": "DocRoleClasss",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "DocRoleClasss",
			        "template_desc": "DocRoleClasss"
			      },
			      {
			        "template_name": "Document",
			        "parentClassId": "Versionable",
			        "allowsInstances": true,
			        "template_label": "Document",
			        "template_desc": "A single version of a document stored in an object store."
			      },
			      {
			        "template_name": "ds",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "ds",
			        "template_desc": "ds"
			      },
			      {
			        "template_name": "MyCustomDocumentClass",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "Dynamic1",
			        "template_desc": ""
			      },
			      {
			        "template_name": "Email",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "Email",
			        "template_desc": "Email"
			      },
			      {
			        "template_name": "EmpDetails",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "EmpDetails",
			        "template_desc": "EmpDetails"
			      },
			      {
			        "template_name": "Folder",
			        "parentClassId": "Containable",
			        "allowsInstances": true,
			        "template_label": "Folder",
			        "template_desc": "Contains other objects, either directly or referentially, but cannot have content data of its own."
			      },
			      {
			        "template_name": "FormData",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "Form Data",
			        "template_desc": "Form Data objects used for eForm integration."
			      },
			      {
			        "template_name": "FormPolicy",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "Form Policy",
			        "template_desc": "Form Policy object used for eForm integration."
			      },
			      {
			        "template_name": "FormTemplate",
			        "parentClassId": "Document",
			        "allowsInstances": false,
			        "template_label": "Form Template",
			        "template_desc": "Form Template objects for eForm integration."
			      },
			      {
			        "template_name": "HMS",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "HMS",
			        "template_desc": "HospitalManagementSystem"
			      },
			      {
			        "template_name": "HomeDocument",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "HomeDocument",
			        "template_desc": "Its Home Document Class which have home Related Information."
			      },
			      {
			        "template_name": "Hosptial",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "Hospital",
			        "template_desc": "Hosptial"
			      },
			      {
			        "template_name": "Hotels",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "Hotels",
			        "template_desc": ""
			      },
			      {
			        "template_name": "WebFormTemplate",
			        "parentClassId": "FormTemplate",
			        "allowsInstances": true,
			        "template_label": "ITX Form Template",
			        "template_desc": "ITX Form Template used for XML based template files"
			      },
			      {
			        "template_name": "LC",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "LC",
			        "template_desc": "LC"
			      },
			      {
			        "template_name": "MobileStore",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "Mobile Store",
			        "template_desc": "Mobile Store"
			      },
			      {
			        "template_name": "MovieTicketBooking",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "Movie Ticket Booking",
			        "template_desc": "Movie Ticket Booking"
			      },
			      {
			        "template_name": "MukulDocumentClassForRole",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "MukulDocumentClassForRole",
			        "template_desc": "MukulDocumentClassForRole"
			      },
			      {
			        "template_name": "NGS",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "NGS",
			        "template_desc": "NGS"
			      },
			      {
			        "template_name": "ngsdetails",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "ngsdetails",
			        "template_desc": "ngsdetails"
			      },
			      {
			        "template_name": "ngsdocuments",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "ngsdocuments",
			        "template_desc": "ngsdocuments"
			      },
			      {
			        "template_name": "Nivea",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "Nivea",
			        "template_desc": "Nivea"
			      },
			      {
			        "template_name": "PDSample",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "PDSample",
			        "template_desc": "PDSample"
			      },
			      {
			        "template_name": "qwert",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "qwert",
			        "template_desc": "qwert"
			      },
			      {
			        "template_name": "qwerty",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "qwerty",
			        "template_desc": "qwerty"
			      },
			      {
			        "template_name": "RAMANA",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "RAMANA",
			        "template_desc": "RAMANA"
			      },
			      {
			        "template_name": "rolebaseddocument",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "rolebaseddocument",
			        "template_desc": "document"
			      },
			      {
			        "template_name": "RoleClass",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "RoleClass",
			        "template_desc": "RoleClass"
			      },
			      {
			        "template_name": "RoleSecurity",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "RoleSecurity",
			        "template_desc": "RoleSecurity"
			      },
			      {
			        "template_name": "RoleTest",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "RoleTest",
			        "template_desc": "RoleTest"
			      },
			      {
			        "template_name": "SBIBankApp",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "SBIBankApp",
			        "template_desc": "SBIBankApp"
			      },
			      {
			        "template_name": "CmRptSearchResultsCSVDocument",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "Search Results CSV Document",
			        "template_desc": ""
			      },
			      {
			        "template_name": "SecPolicyClass",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "SecPolicyClass",
			        "template_desc": "SecPolicyClass"
			      },
			      {
			        "template_name": "staticRoleClass",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "staticRoleClass",
			        "template_desc": "staticRoleClass"
			      },
			      {
			        "template_name": "StaticRoletesting",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "StaticRoletesting",
			        "template_desc": "StaticRoletesting"
			      },
			      {
			        "template_name": "tata",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "tata",
			        "template_desc": "tata"
			      },
			      {
			        "template_name": "TCS",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "TCS",
			        "template_desc": "TCS"
			      },
			      {
			        "template_name": "Testclass",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "Testclass",
			        "template_desc": "Testclass"
			      },
			      {
			        "template_name": "TestingMarkingSets",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "TestingMarkingSets",
			        "template_desc": "TestingMarkingSets"
			      },
			      {
			        "template_name": "Anu",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "wxyz",
			        "template_desc": ""
			      },
			      {
			        "template_name": "xc",
			        "parentClassId": "Document",
			        "allowsInstances": true,
			        "template_label": "xc",
			        "template_desc": "xc"
			      }
			    ]
			  },
			  "repositoryId": "FNOS",
			  "messages": [
			    {
			      "number": "0",
			      "adminResponse": null,
			      "moreInformation": null,
			      "text": "57 items were found.",
			      "explanation": null,
			      "userResponse": null
			    }
			  ],
			  "messagesEncoded": true,
			  "sessioninactivelimit": 1800,
			  "num_templates": 57
			}],
          idProperty: "id"
        });
		console
		setTimeout(function () {
		     console.log("Setting store on ComboBox:", classList);
		     self.classCombo.set("store", store);
		     self.classCombo.set("searchAttr", "name");

		     // Force re-render if needed
		     self.classCombo.startup();
		   }, 3000); // 300ms delay — tweak if needed
		 });
      
    }
  });
});
