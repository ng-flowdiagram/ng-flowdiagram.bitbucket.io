export const nodeLink = {
  node: [
    {
      id: 'train',
      label: 'T Train 2',
      stroke: "grey"
    }, {
      id: 'markup',
      label: 'Markeup H2',
      stroke: "grey"
    }, {
      id: 'feed',
      label: 'feed',
      stroke: "grey"
    }, {
      id: 'markupcomp',
      label: 'Markeup H2 Compressor',
      stroke: "green"
    }, {
      id: 'surge',
      label: 'Feed Surge Drum',
      stroke: "green"
    }, {
      id: 'dot',
      label: 'o',
      stroke: "green"
    }, {
      id: 'stageone',
      label: 'Reactor - Stage 1',
      stroke: "green"
    }, {
      id: 'stagetwo',
      label: 'Reactor - Stage 2',
      stroke: "green"
    }, {
      id: 'recycle',
      label: 'Recycle H2 Compression',
      stroke: "green"
    }, {
      id: 'water',
      label: 'Injection Water',
      stroke: "grey"
    }, {
      id: 'glseper',
      label: 'Gas/Liquid Seperation',
      stroke: "green"
    }, {
      id: 'rich',
      label: 'Rich Anime',
      stroke: "grey"
    }, {
      id: 'sw',
      label: 'SW',
      stroke: "grey"
    }, {
      id: 'tofrac',
      label: 'To Fractionator',
      stroke: "grey"
    }, {
      id: 'fromfrac',
      label: 'From Fractionator',
      stroke: "grey"
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
    }
  ]
}
