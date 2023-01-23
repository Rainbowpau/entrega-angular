import { routing } from "./app-routing.module";
import { RouterModule } from '@angular/router';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';


import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [RouterModule, BrowserModule, FormsModule, routing],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
