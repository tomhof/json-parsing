import { TestBed, inject } from '@angular/core/testing';

import { ToObjectParserService } from './to-object-parser.service';
import { Item, Questionnaire } from './questionnaire.model';
import * as json from './ebida-order-1.json';

describe('ToObjectParserService', () => {

  let service: ToObjectParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToObjectParserService]
    });
    service = TestBed.get(ToObjectParserService);
  });

  it('should be created', inject([ToObjectParserService], (service: ToObjectParserService) => {
    expect(service).toBeTruthy();
  }));

  it('simple item from JSON', inject([ToObjectParserService], (service: ToObjectParserService) => {
    let str = '{"linkId": {"_attributes": {"value": "order.state"}},"text": {"_attributes": {"value": "Auftrags-Status"}},"type": {"_attributes": {"value": "string"}}}';
    let obj = JSON.parse(str);
    let item: Item = service.extractItem(obj);
    expect(item).toBeTruthy();
    expect(item.linkId).toBe('order.state');
    expect(item.text).toBe('Auftrags-Status');
    expect(item.type).toBe('string');
    //console.log('obj: ' + JSON.stringify(obj));
  }));

  it('single item group from JSON', inject([ToObjectParserService], (service: ToObjectParserService) => {
    let str = '{ "linkId": { "_attributes": { "value": "order" } }, "text": { "_attributes": { "value": "Auftrag" } }, "type": { "_attributes": { "value": "group" } }, "item": [ { "linkId": { "_attributes": { "value": "order.number" } }, "text": { "_attributes": { "value": "Auftrags-Nummer" } }, "type": { "_attributes": { "value": "string" } } }, { "linkId": { "_attributes": { "value": "order.date" } }, "text": { "_attributes": { "value": "Auftrags-Datum" } }, "type": { "_attributes": { "value": "date" } } }, { "linkId": { "_attributes": { "value": "order.state" } }, "text": { "_attributes": { "value": "Auftrags-Status" } }, "type": { "_attributes": { "value": "string" } } } ] }';
    let obj = JSON.parse(str);
    let item: Item = service.extractItem(obj);
    expect(item).toBeTruthy();
    expect(item.linkId).toBe('order');
    expect(item.text).toBe('Auftrag');
    expect(item.type).toBe('group');
    expect(item.items).toBeTruthy();
    expect(item.items[0].linkId).toBe('order.number');
    expect(item.items[0].text).toBe('Auftrags-Nummer');
    //console.log('item: ' + JSON.stringify(item));
  }));

  it('multi item groups from JSON', inject([ToObjectParserService], (service: ToObjectParserService) => {
    let str = '{ "linkId": { "_attributes": { "value": "orderer" } }, "text": { "_attributes": { "value": "Auftraggeber" } }, "type": { "_attributes": { "value": "group" } }, "item": [ { "linkId": { "_attributes": { "value": "orderer.dataenterer" } }, "text": { "_attributes": { "value": "Erfasser" } }, "type": { "_attributes": { "value": "group" } }, "item": [ { "linkId": { "_attributes": { "value": "orderer.dataenterer.visum" } }, "text": { "_attributes": { "value": "Visum" } }, "type": { "_attributes": { "value": "string" } } }, { "linkId": { "_attributes": { "value": "orderer.dataenterer.bereich" } }, "text": { "_attributes": { "value": "Bereich" } }, "type": { "_attributes": { "value": "string" } } }, { "linkId": { "_attributes": { "value": "orderer.dataenterer.abt" } }, "text": { "_attributes": { "value": "Bereich" } }, "type": { "_attributes": { "value": "string" } } }, { "linkId": { "_attributes": { "value": "orderer.dataenterer.lastname" } }, "text": { "_attributes": { "value": "Name" } }, "type": { "_attributes": { "value": "string" } } }, { "linkId": { "_attributes": { "value": "orderer.dataenterer.firstname" } }, "text": { "_attributes": { "value": "Vorname" } }, "type": { "_attributes": { "value": "string" } } }, { "linkId": { "_attributes": { "value": "orderer.dataenterer.tel" } }, "text": { "_attributes": { "value": "Telefon" } }, "type": { "_attributes": { "value": "string" } } }, { "linkId": { "_attributes": { "value": "orderer.dataenterer.e-mail" } }, "text": { "_attributes": { "value": "E-Mail" } }, "type": { "_attributes": { "value": "string" } } }, { "linkId": { "_attributes": { "value": "orderer.dataenterer.street" } }, "text": { "_attributes": { "value": "Strasse" } }, "type": { "_attributes": { "value": "string" } } }, { "linkId": { "_attributes": { "value": "orderer.dataenterer.postfach" } }, "text": { "_attributes": { "value": "Postfach" } }, "type": { "_attributes": { "value": "string" } } }, { "linkId": { "_attributes": { "value": "orderer.dataenterer.zip" } }, "text": { "_attributes": { "value": "PLZ" } }, "type": { "_attributes": { "value": "string" } } }, { "linkId": { "_attributes": { "value": "orderer.dataenterer.city" } }, "text": { "_attributes": { "value": "city" } }, "type": { "_attributes": { "value": "string" } } } ] }, { "linkId": { "_attributes": { "value": "orderer.responsible" } }, "text": { "_attributes": { "value": "Verantwortlicher" } }, "type": { "_attributes": { "value": "group" } }, "item": [ { "linkId": { "_attributes": { "value": "orderer.resp.visum" } }, "text": { "_attributes": { "value": "Visum" } }, "type": { "_attributes": { "value": "string" } } }, { "linkId": { "_attributes": { "value": "orderer.resp.bereich" } }, "text": { "_attributes": { "value": "Bereich" } }, "type": { "_attributes": { "value": "string" } } }, { "linkId": { "_attributes": { "value": "orderer.resp.abt" } }, "text": { "_attributes": { "value": "Bereich" } }, "type": { "_attributes": { "value": "string" } } }, { "linkId": { "_attributes": { "value": "orderer.resp.lastname" } }, "text": { "_attributes": { "value": "Name" } }, "type": { "_attributes": { "value": "string" } } }, { "linkId": { "_attributes": { "value": "orderer.resp.firstname" } }, "text": { "_attributes": { "value": "Vorname" } }, "type": { "_attributes": { "value": "string" } } }, { "linkId": { "_attributes": { "value": "orderer.resp.tel" } }, "text": { "_attributes": { "value": "Telefon" } }, "type": { "_attributes": { "value": "string" } } }, { "linkId": { "_attributes": { "value": "orderer.resp.e-mail" } }, "text": { "_attributes": { "value": "E-Mail" } }, "type": { "_attributes": { "value": "string" } } }, { "linkId": { "_attributes": { "value": "orderer.resp.street" } }, "text": { "_attributes": { "value": "Strasse" } }, "type": { "_attributes": { "value": "string" } } }, { "linkId": { "_attributes": { "value": "orderer.resp.postfach" } }, "text": { "_attributes": { "value": "Postfach" } }, "type": { "_attributes": { "value": "string" } } }, { "linkId": { "_attributes": { "value": "orderer.resp.zip" } }, "text": { "_attributes": { "value": "PLZ" } }, "type": { "_attributes": { "value": "string" } } }, { "linkId": { "_attributes": { "value": "orderer.resp.city" } }, "text": { "_attributes": { "value": "city" } }, "type": { "_attributes": { "value": "string" } } } ] } ] }';
    let obj = JSON.parse(str);
    let item: Item = service.extractItem(obj);
    expect(item).toBeTruthy();
    expect(item.linkId).toBe('orderer');
    expect(item.text).toBe('Auftraggeber');
    expect(item.items[0]).toBeTruthy();
    expect(item.items[0].linkId).toBe('orderer.dataenterer');
    expect(item.items[0].items[0]).toBeTruthy();
    expect(item.items[0].items[0].linkId).toBe('orderer.dataenterer.visum');
    //console.log('item: ' + JSON.stringify(item));
  }));

  it('full Questionnaire from JSON', inject([ToObjectParserService], (service: ToObjectParserService) => {
    let q: Questionnaire = service.convertQuestionnaire(json.data);
    expect(q).toBeTruthy();
    //console.log('quest: ' + JSON.stringify(quest));
    expect(q.id).toBe('ebida-order-1');
    expect(q.text.indexOf('Status:')).toBe(0);
    expect(q.url).toBe('http://ahdis.ch/fhir/Questionnaire/ebida-order-1');
    // TODO :-)
    expect(q.title).toBe('Ebida Order Example');
    // etc.
  }));



});
