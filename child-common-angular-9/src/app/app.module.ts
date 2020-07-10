import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ApplicationRef } from "@angular/core";
import {
  isInIcestark,
  getMountNode,
  registerAppEnter,
  registerAppLeave,
} from "@ice/stark-app";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [AppComponent],
})
export class AppModule {
  ngDoBootstrap(appRef: ApplicationRef) {
    if (isInIcestark()) {
      const ele = getMountNode();
      appRef.bootstrap(AppComponent, ele);
    } else {
      appRef.bootstrap(AppComponent);
    }
  }
}
