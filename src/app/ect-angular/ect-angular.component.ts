import { Component, ViewEncapsulation } from "@angular/core";

// import the ECT package
import * as ECT from "@whoicd/icd11ect";

@Component({
  selector: "app-ect-angular",
  templateUrl: "./ect-angular.component.html",
  // import the ECT style
  styleUrls: ["../../../node_modules/@whoicd/icd11ect/style.css"],
  encapsulation: ViewEncapsulation.None
})
export class ECTAngularComponent {
  iNo = 1;

  ngOnInit() {
    // configure the ECT
    const settings = {
      // the API located at the URL below should be used only for software development and testing
      apiServerUrl: "https://icd11restapi-developer-test.azurewebsites.net",
      autoBind: false // in Angular we recommend using the manual binding
    };
    const callbacks = {
      selectedEntityFunction: (selectedEntity) => {
        // shows an alert with the code selected by the user and then clears the search results
        alert("ICD-11 code selected: " + selectedEntity.code);
        ECT.Handler.clear(this.iNo);
      }
    };
    ECT.Handler.configure(settings, callbacks);
  }

  ngAfterContentInit() {
    // manual binding only after Angular has fully initialized all content
    ECT.Handler.bind(this.iNo);
  }
}
