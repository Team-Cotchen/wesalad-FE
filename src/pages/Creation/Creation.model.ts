import type { Dayjs } from 'dayjs';

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
  applyway: string;
  applyway_info: string;
  category: string;
  number_of_back: string;
  number_of_front: string;
  period: string;
  place: string;
  stacks: string[];
  start_date: Dayjs;
  title: string;
}
