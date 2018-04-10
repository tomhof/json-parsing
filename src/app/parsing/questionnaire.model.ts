
export class Item {
  linkId: string;
  text: string;
  type: 'group' | 'string' | 'date' | 'choice' | 'text' | 'boolean';
  options?: string[];
  items?: Item[];
}

export class Questionnaire {
  id: string;
  text: string;
  url: string;
  title: string;
  status: string;
  experimental: boolean;
  date: Date;
  publisher: string;
  subjectType: string;
  items: Item[];
}