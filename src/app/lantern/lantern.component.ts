import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type lantern = 'on' | 'off';

@Component({
  selector: 'app-lantern',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lantern.component.html',
  styleUrl: './lantern.component.scss',
})
export class LanternComponent {
  lanternStatus: lantern = 'off';
  disabled: boolean = false;

  lanternAssets = {
    on: 'assets/lantern_on.gif',
    off: 'assets/lantern_off.gif',
  };

  disableLantern() {
    this.disabled = true;
  }

  toggleLantern() {
    if (this.lanternStatus === 'on') {
      this.lanternStatus = 'off';
      return;
    }
    this.lanternStatus = 'on';
  }
}
