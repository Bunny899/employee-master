import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-delieveryhomepage',
  templateUrl: './delieveryhomepage.component.html',
  styleUrls: ['./delieveryhomepage.component.css']
})
export class DelieveryhomepageComponent{

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    myprofile(){
      this._router.navigate(['ManagerHomepage/myprofile',localStorage.getItem('email')]);
    }

  constructor(private breakpointObserver: BreakpointObserver,public _router:Router) {}


}
