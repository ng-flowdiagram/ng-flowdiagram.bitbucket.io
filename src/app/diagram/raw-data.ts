export const nodeLink = {
  node: [
    {
      id: 'train',
      label: 'T Train 2',
      stroke: "grey",
      desp: "",
      strokeWidth: 0
    }, {
      id: 'markup',
      label: 'Markeup H2',
      stroke: "grey",
      desp: "",
      strokeWidth: 0
    }, {
      id: 'feed',
      label: 'feed',
      stroke: "grey",
      desp: "",
      strokeWidth: 0
    }, {
      id: 'markupcomp',
      label: 'Markeup H2 Compressor',
      stroke: "green",
      desp: "Increase the flow from 0.29 kt to 0.3 kt",
      strokeWidth: 0
    }, {
      id: 'surge',
      label: 'Feed Surge Drum',
      stroke: "green",
      desp: "Increase level from 67% to 72%",
      strokeWidth: 0
    }, {
      id: 'dot',
      label: 'Contrifugal Pump',
      stroke: "green",
      desp: "Decrease the flow by 5%",
      strokeWidth: 0
    }, {
      id: 'stageone',
      label: 'Reactor - Stage 1',
      stroke: "green",
      desp: "Increase yield from 90% to 93%",
      strokeWidth: 0
    }, {
      id: 'stagetwo',
      label: 'Reactor - Stage 2',
      stroke: "green",
      desp: "Increase yield from 85% to 92%",
      strokeWidth: 0
    }, {
      id: 'recycle',
      label: 'Recycle H2 Compression',
      stroke: "green",
      desp: "Increase the IGV from 69.1% to 69.7%",
      strokeWidth: 0
    }, {
      id: 'water',
      label: 'Injection Water',
      stroke: "grey",
      desp: "",
      strokeWidth: 0
    }, {
      id: 'glseper',
      label: 'Gas/Liquid Seperation',
      stroke: "green",
      desp: "",
      strokeWidth: 0
    }, {
      id: 'rich',
      label: 'Rich Anime',
      stroke: "grey",
      desp: "",
      strokeWidth: 0
    }, {
      id: 'sw',
      label: 'SW',
      stroke: "grey",
      desp: "",
      strokeWidth: 0
    }, {
      id: 'tofrac',
      label: 'To Fractionator',
      stroke: "grey",
      desp: "",
      strokeWidth: 0
    }, {
      id: 'fromfrac',
      label: 'From Fractionator',
      stroke: "grey",
      desp: "",
      strokeWidth: 0
    }
  ],
  links: [
    {
      id: 'a',
      source: 'markupcomp',
      target: 'train',
      label: ''
    }, {
      id: 'b',
      source: 'markup',
      target: 'markupcomp',
      label: ''
    }, {
      id: 'c',
      source: 'feed',
      target: 'surge',
      label: ''
    }, {
      id: 'd',
      source: 'surge',
      target: 'dot',
      label: ''
    }, {
      id: 'e',
      source: 'dot',
      target: 'stageone',
      label: ''
    }, {
      id: 'f',
      source: 'stageone',
      target: 'glseper',
      label: ''
    }, {
      id: 'g',
      source: 'glseper',
      target: 'tofrac',
      label: ''
    }, {
      id: 'h',
      source: 'fromfrac',
      target: 'stagetwo',
      label: ''
    }, {
      id: 'i',
      source: 'markupcomp',
      target: 'stagetwo',
      label: ''
    }, {
      id: 'j',
      source: 'markupcomp',
      target: 'stageone',
      label: ''
    }, {
      id: 'k',
      source: 'water',
      target: 'glseper',
      label: ''
    }, {
      id: 'l',
      source: 'glseper',
      target: 'rich',
      label: ''
    }, {
      id: 'm',
      source: 'glseper',
      target: 'sw',
      label: ''
    }, {
      id: 'n',
      source: 'glseper',
      target: 'recycle',
      label: ''
    }, {
      id: 'o',
      source: 'recycle',
      target: 'stageone',
      label: ''
    }, {
      id: 'p',
      source: 'recycle',
      target: 'stagetwo',
      label: ''
    }, {
      id: 'q',
      source: 'stagetwo',
      target: 'glseper',
      label: ''
    }
  ]
}
