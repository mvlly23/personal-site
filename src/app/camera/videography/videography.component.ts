import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "../../navbar/navbar.component";
import { Component } from "@angular/core";

@Component({
  selector: 'videography',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './videography.component.html',
  styleUrl: './videography.component.scss'
})

export class VideographyComponent {

}
