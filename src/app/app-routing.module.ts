import { CompteDetailComponent } from "./component/compte-detail/compte-detail.component";
import { CompteListComponent } from "./component/compte-list/compte-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CompteFormComponent } from "./component/compte-form/compte-form.component";

const routes: Routes = [
  { path: "", component: CompteListComponent },
  { path: "create/compte", component: CompteFormComponent },
  { path: "compte/:id", component: CompteDetailComponent },
  { path: "compte/:id/edit", component: CompteFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
