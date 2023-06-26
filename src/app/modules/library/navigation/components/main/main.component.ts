import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {BreadCrumbModel} from "../../models/bread-crumb.model";
import {AppRoute} from "../../../../../app.routes";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @ContentChild('content') content: any;
  private fullPath: string = "";
  breadCrumb?: BreadCrumbModel
  constructor(private _route: ActivatedRoute, private _router: Router) {
  }

  ngOnInit() {
    this.fullPath = this.resolve(this._route).join(".");
    this.breadCrumb = new BreadCrumbModel(new AppRoute(this.fullPath));
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.fullPath = this.resolve(this._route).join(".");
        this.breadCrumb = new BreadCrumbModel(new AppRoute(this.fullPath));
      }
    });
  }

  resolve(ar: ActivatedRoute | null, p: string[] = []): string[] {
    if (ar == null || ar.snapshot.url.length == 0) {
      return p;
    }
    p.push(ar.snapshot.url[0].path)
    return this.resolve(ar.firstChild, p);
  }
}

