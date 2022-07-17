export interface OptionModel {
  CATEGORY: string[];
  PLACE: string[];
  NUM_OF_DEVELOPER: string[];
  PERIOD: string[];
  APPLY_WAY: { title: string; info: string }[];
  FLAVOR: { title: string; description: string; image: string }[];
  STACKS: { value: string; title: string }[];
  CARD_LIST: { image_url: string; name: string }[];
}

export interface FormModel {
  category: string;
  stacks: string[];
  applyway: string;
  applyway_info: string;
  place: string;
  title: string;
  number_of_front: string;
  number_of_back: string;
  period: string;
  start_date: moment.Moment;
}

export interface PostModel {
  fields: FormModel;
  description: string;
  primary: string[];
  additional: string[];
}
