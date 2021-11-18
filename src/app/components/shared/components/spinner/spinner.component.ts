import { Component } from '@angular/core';
import { Subject } from 'rxjs';

import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-spinner',
  template: `
    <div *ngIf="this.isLoading$ | async">
      <div class="lds-grid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  `,
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  isLoading$: Subject<boolean> = this.spinnerService.isLoading$;

  constructor(private spinnerService: SpinnerService) { }

}
