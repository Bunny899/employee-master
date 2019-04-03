import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-cashierdashboard',
  templateUrl: './cashierdashboard.component.html',
  styleUrls: ['./cashierdashboard.component.css']
})
export class CashierdashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Bill Management', cols: 1, rows: 1 },
          { title: 'View Profile', cols: 1, rows: 1 },
          { title: 'Edit Profile', cols: 1, rows: 1 },
          { title: 'LogOut', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Bill Management', cols: 1, rows: 1,img:'../../../assets/bill_icon.png' },
        { title: 'View Profile', cols: 1, rows: 1 },
        { title: 'Edit Profile', cols: 1, rows: 1 },
        { title: 'LogOut', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
