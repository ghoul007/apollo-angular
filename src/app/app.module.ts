import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";

import { ApolloModule, Apollo } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";

import { InMemoryCache } from "apollo-cache-inmemory";
import { url } from "inspector";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, ApolloModule, HttpLinkModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httplink: HttpLink) {
    apollo.create({
      link: httplink.create({
        url: "",
        cache:new InMemoryCache()
      })
    });
  }
}
