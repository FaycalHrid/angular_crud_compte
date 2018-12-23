import { Component, OnInit } from "@angular/core";
import { CompteService } from "src/app/services/compte.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-compte-detail",
  templateUrl: "./compte-detail.component.html",
  styleUrls: ["./compte-detail.component.sass"]
})
export class CompteDetailComponent implements OnInit {
  compte: any;

  constructor(
    private compteService: CompteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.compteService.find(id).subscribe(compte => {
      console.log(compte);

      this.compte = compte;
    });
  }
}
