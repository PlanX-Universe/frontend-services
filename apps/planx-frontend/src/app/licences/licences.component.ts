import { Component, OnInit } from '@angular/core';

@Component({
  selector: "planx-planning-licences",
  templateUrl: "./licences.component.html",
  styleUrls: ["./licences.component.scss"]
})
export class LicencesComponent implements OnInit {

  readonly LICENCES: Licence[] = [
    {
      title: "PDDL4J",
      reference: `D. Pellier & H. Fiorino (2017)
        PDDL4J: a planning domain description library for java, Journal of
        Experimental & Theoretical Artificial Intelligence, 30:1, 143-176, DOI: 10.1080/0952813X.2017.1409278`,
      usedAt: [
        "Parsing-Service",
        "Converting-Service",
        "Solving-Service"
      ],
      url: "https://doi.org/10.1080/0952813X.2017.1409278"
    },
    {
      title: "WEB PLANNER",
      reference: `Magnaguagno, M., Pereira, R., Mòre, M., & Meneguzzi, F. (2017)
        WEB PLANNER: A Tool to Develop Classical Planning Domains and Visualize Heuristic State-Space Search.
        In Proceedings of the Workshop on User Interfaces and Scheduling and Planning, UISP (pp. 32–38).`,
      usedAt: [
        "Modelling-Service"
      ],
      url: "https://icaps17.icaps-conference.org/workshops/UISP/uisp17proceedings.pdf#page=36"
    }
  ];

  ngOnInit(): void {
  }

}

interface Licence {
  title: string,
  reference: string,
  usedAt: string[],
  url?: string,
}
