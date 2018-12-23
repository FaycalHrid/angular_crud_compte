import { CompteService } from "./../../services/compte.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-compte-list",
  templateUrl: "./compte-list.component.html",
  styleUrls: ["./compte-list.component.sass"]
})
export class CompteListComponent implements OnInit {
  comptes: any;

  constructor(private compteService: CompteService) {}

  ngOnInit() {
    this.compteService.findAll().subscribe(data => {
      this.comptes = data;
    });
  }

  deleteCompte(id: string) {
    this.compteService.delete(id).subscribe(ret => {
      this.comptes = this.comptes.filter(c => {
        return c._id != id;
      });
    });
  }
}
