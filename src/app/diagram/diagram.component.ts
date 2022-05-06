import { Component, OnInit } from '@angular/core';
import { nodeLink } from "./raw-data";

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss']
})
export class DiagramComponent implements OnInit {
  links = [...nodeLink.links];
  nodes = [...nodeLink.node];

  constructor() {
    this.nodes = this.nodes.map((v: any)=> {
      if (v.id === "stageone" || v.id === "stagetwo") {
        v.rx = 75;
      } else if (v.id === "surge") {
        v.rx = 25;
      } else {
        v.rx = 10;
      }
      return v;
    })
  }

  ngOnInit(): void {

  }
  nodeSize(node: any) {
    console.log(node);
    if (node.id === "glseper") {
      return {
        width: 200,
        height: 250
      }
    } else if (node.id === "stageone" || node.id === "stagetwo") {
      return {
        width: 140,
        height: 250
      }
    } else if (node.id === "surge") {
      return {
        width: 150,
        height: 50
      }
    } else {
      return {
        width: node.dimension.width,
        height: node.dimension.height
      }
    }

  }
}
