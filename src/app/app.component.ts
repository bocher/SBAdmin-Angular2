import {
  Component,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(
    private appService: AppService,
    private viewContainerRef: ViewContainerRef // ng2bootstrap
  ) {
    console.log(" <AppComponent> ");
  }

  ngOnInit() {
  }
}
