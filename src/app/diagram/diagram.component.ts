import { Component, OnInit } from '@angular/core';
import { nodeLink } from "./raw-data";
import * as _ from 'lodash';
import { HttpClient } from '@angular/common/http';
import { DagreNodesOnlyLayout } from './customStepCurved';
import * as shape from 'd3-shape';
import { Layout } from '@swimlane/ngx-graph';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss']
})
export class DiagramComponent implements OnInit {
  layoutSettings = {
    orientation: 'TB'
  };
  links = [...nodeLink.links];
  nodes = [...nodeLink.node];
  curve: any = shape.curveLinear;
  lodash:any = _;
  dotarray: string[] = ['markupcomp','surge','dot','stageone','stagetwo','recycle',];
  layout: Layout = new DagreNodesOnlyLayout();
  strokeWidth: number = 0;
  tooltip: any = {
    x: 0,
    y: 0
  }

  constructor(
    public http: HttpClient
  ) {

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
    this.dotarray.forEach(item => {
      // console.log(_.findLast(this.nodes,(v)=> v.id === item), '++++++')

    });
  }
  nodeSize(node: any) {
    // console.log(node);
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
    } else if (node.id === "markupcomp" || node.id === 'dot') {
      return {
        width: 0,
        height: 0
      }
    } else {
      return {
        width: node.dimension.width,
        height: node.dimension.height
      }
    }

  }
  setname(item: string) {
    let json = _.findLast(this.nodes,(v:any)=> v.id === item);
    return json?.label;
  }
  setDes(item: string) {
    let json = _.findLast(this.nodes,(v:any)=> v.id === item);
    return json?.desp;
  }
  setDot(item: string) {
    let json: any  = _.findLast(this.nodes,(v:any)=> v.id === item);
    return json?.data.color;
  }

  mouseEnter(item: any) {
    let json: any  = _.findIndex(this.nodes,(v:any)=> v.id === item);
    let pos: any = nodeLink.node[json];
    // nodeLink.node[json].strokeWidth = 10;
    console.log(pos)
    this.tooltip = pos.position;
    return nodeLink.node[json].strokeWidth = 10;
  }
  mouseLeave(item: any) {
    let json: any  = _.findIndex(this.nodes,(v:any)=> v.id === item);
    console.log(json)
    return nodeLink.node[json].strokeWidth = 0;
  }
}
