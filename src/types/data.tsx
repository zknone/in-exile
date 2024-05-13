export type Language = 'français' | 'english' | 'noLang';
type ImgPath = string;
type TextArray = string[];
export type CategoryCard = 'school' | 'city' | 'general' | 'noCategory';
type SubcategoryCard =
  | 'artist-position'
  | 'referents'
  | 'school-familiarization'
  | 'workspace'
  | 'equipment'
  | 'lodging'
  | 'city-familiarization'
  | 'transport'
  | 'social-life'
  | 'professional-activity'
  | 'administrative-support'
  | 'bank-phone'
  | 'education'
  | 'family'
  | 'medical-care';

export type MenuCard = 'closed' | 'credits' | 'context';

export interface Subcategory {
  card: SubcategoryCard;
  title: string;
  img: ImgPath;
  text: TextArray;
}

export interface Category {
  category: CategoryCard;
  title: string;
  img: ImgPath;
  subcategories: Subcategory[];
}

export interface DatasetItem {
  lang: string;
  img: ImgPath;
  imgFocus: ImgPath;
  categories: Category[];
}



export type AppState = {
  lang: Language;
  category: CategoryCard;
  menu: MenuCard;
};

export type Dataset = DatasetItem[];

export type ScreenSize = 'tabletop' | 'tablet-l' | 'tablet-m' | 'mobile' | 'default' | 'out';
