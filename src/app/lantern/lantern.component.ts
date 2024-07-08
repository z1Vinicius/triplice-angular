import { Component } from '@angular/core';

type lantern = 'on' | 'off';

@Component({
  selector: 'app-lantern',
  standalone: true,
  imports: [],
  templateUrl: './lantern.component.html',
  styleUrl: './lantern.component.scss',
})
export class LanternComponent {
  lanternStatus: lantern = 'off';
  lanternAssets = {
    on: 'assets/lantern_on.gif',
    off: 'assets/lantern_off.gif',
  };

  toggleLantern() {
    if (this.lanternStatus === 'on') {
      this.lanternStatus = 'off';
      return;
    }
    this.lanternStatus = 'on';
  }
}
