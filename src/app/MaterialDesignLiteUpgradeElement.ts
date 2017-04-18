/**
 * Created by thangavel on 17/4/17.
 */
import {Directive, AfterViewChecked} from '@angular/core';

declare var componentHandler: any;

@Directive({
  selector: '[mdl]'
})
export class MDL implements AfterViewChecked {

  ngAfterViewChecked() {
    if (componentHandler) {
      componentHandler.upgradeAllRegistered();
    }
  }

}
