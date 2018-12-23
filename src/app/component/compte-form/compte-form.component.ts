import { ActivatedRoute, Router } from "@angular/router";
import { CompteService } from "./../../services/compte.service";
import { Compte } from "./../../model/compte";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-compte-form",
  templateUrl: "./compte-form.component.html",
  styleUrls: ["./compte-form.component.sass"]
})
export class CompteFormComponent implements OnInit {
  compte: any;
  id: string;
  constructor(
    private compteService: CompteService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.compte = new Compte();
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    if (this.id) {
      // Modif
      this.compteService.find(this.id).subscribe(compte => {
        this.compte = compte;
      });
    }
  }

  save() {
    if (this.id) {
      this.compteService.update(this.id, this.compte).subscribe(ret => {
        console.log("Updated ", ret);
        this.router.navigate(["/compte/" + this.id]);
      });
    } else {
      this.compteService.create(this.compte).subscribe(ret => {
        console.log("Inserted ", ret);
        this.router.navigate(["/compte/" + ret["_id"]]);
      });
    }
  }
}
