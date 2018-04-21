import { TestBed, inject, async } from '@angular/core/testing';

import { ToJsonParserService } from './to-json-parser.service';

import * as xml1 from './ebida-order-1.xml';

import * as xml2 from './ebida-order-2.xml';

import * as xml3 from './ebida-order-3.xml';


describe('ToJsonParserService', () => {

  let service: ToJsonParserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ToJsonParserService]
    });
    service = TestBed.get(ToJsonParserService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('parse quick-start-sample', () => {
    let sampleXml = '<?xml version="1.0" encoding="utf-8"?>\n'
      + '<note importance="high" logged="true">\n'
      + '<title>Happy</title>\n'
      + '<todo>Work</todo>\n'
      + '<todo>Play</todo>\n'
      + '</note>\n';
    let expectedJson = '{\n'
      + '  "_declaration": {\n'
      + '    "_attributes": {\n'
      + '      "version": "1.0",\n'
      + '      "encoding": "utf-8"\n'
      + '    }\n'
      + '  },\n'
      + '  "note": {\n'
      + '    "_attributes": {\n'
      + '      "importance": "high",\n'
      + '      "logged": "true"\n'
      + '    },\n'
      + '    "title": {\n'
      + '      "_text": "Happy"\n'
      + '    },\n'
      + '    "todo": [\n'
      + '      {\n'
      + '        "_text": "Work"\n'
      + '      },\n'
      + '      {\n'
      + '        "_text": "Play"\n'
      + '      }\n'
      + '    ]\n'
      + '  }\n'
      + '}';
    let actualResult = service.parseXmlToJson(sampleXml);
    expect(expectedJson.valueOf() === actualResult.valueOf()).toBeTruthy();
  });

  it('parse ebida order 1', () => {
    let jsonResult = service.parseXmlToJson(xml1.data1);
    console.log(jsonResult);
    
  });

  it('parse ebida order 2', () => {
    let jsonResult = service.parseXmlToJson(xml2.data2);
    console.log(jsonResult);
    
  });

  it('parse ebida order 3', () => {
    let jsonResult = service.parseXmlToJson(xml3.data3);
    console.log(jsonResult);
    
  });

});
