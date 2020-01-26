import { Component } from "@angular/core";
import { RediffUser } from "./rediffuser.model";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Create a Rediffmail account";
  user: RediffUser = new RediffUser();
  submit() {
    console.log(this.user);
  }
}
