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
    var asJson = convert.xml2json(sampleXml, { compact: true, spaces: 2 });
    this.content = 'XML:\n' + sampleXml
      + '\n\nasJson:\n' + asJson;
  }


}
