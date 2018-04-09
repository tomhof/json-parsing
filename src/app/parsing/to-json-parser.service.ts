import { Injectable } from '@angular/core';

import * as convert from 'xml-js';

@Injectable()
export class ToJsonParserService {

  constructor() { }

  parseXmlToJson(xml: string): string {
    return convert.xml2json(xml, { compact: true, spaces: 2 });
  }

}
