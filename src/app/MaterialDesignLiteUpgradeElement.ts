/**
 * Created by thangavel on 17/4/17.
 */
import {Directive, AfterContentChecked} from '@angular/core';

declare var componentHandler: any;

@Directive({
  selector: '[mdl]'
})
export class MDL implements AfterContentChecked {

  ngAfterContentChecked() {
    if (componentHandler) {
      componentHandler.upgradeAllRegistered();
    }
  }

}
