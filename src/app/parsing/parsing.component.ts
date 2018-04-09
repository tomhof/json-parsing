import { Component, OnInit } from '@angular/core';

import * as convert from 'xml-js';

const sampleXml =
  '<?xml version="1.0" encoding="utf-8"?>\n' +
  '<note importance="high" logged="true">\n' +
  '    <title>Happy</title>\n' +
  '    <todo>Work</todo>\n' +
  '    <todo>Play</todo>\n' +
  '</note>';

@Component({
  selector: 'app-parsing',
  templateUrl: './parsing.component.html',
  styleUrls: ['./parsing.component.css']
})
export class ParsingComponent implements OnInit {

  content: string;

  constructor() { }

  ngOnInit() {
    var result1 = convert.xml2json(sampleXml, { compact: true, spaces: 4 });
    var result2 = convert.xml2json(sampleXml, { compact: false, spaces: 4 });
    console.log(result1, '\n', result2);
    this.content = 'XML:\n' + sampleXml
      + '\n\nresult1 (compact):\n' + result1
      + '\n\nresult2 (verbose):\n' + result2;
  }

}
