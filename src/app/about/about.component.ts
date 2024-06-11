import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "../navbar/navbar.component";
import { Component } from "@angular/core";

@Component({
  selector: 'about',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})

export class AboutComponent {

}
