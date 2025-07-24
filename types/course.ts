export type Medium = {
  name: string;
  resource_type: "video" | "image";
  resource_value: string;
  thumbnail_url?: string;
};

export type ChecklistType = {
  id: string;
  text: string;
  icon: string;
  color: string;
  list_page_visibility: boolean;
};

export type InstructorType = {
  name: string;
  description: string;
  short_description: string;
  image: string;
  slug: string;
  has_instructor_page: boolean;
};

export type FeatureType = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
};

export type PointerType = {
  id: string;
  text: string;
  icon: string;
  color: string;
};

export type AboutItemType = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type SectionType = {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: any[];
};

export type MetaTagType = {
  content: string;
  type: string;
  value: string;
};

export type SchemaItemType = {
  meta_name: string;
  meta_value: string;
  type: string;
};

export type SEOType = {
  defaultMeta: MetaTagType[];
  description: string;
  keywords: string[];
  schema: SchemaItemType[];
  title: string;
};

export type CourseDataType = {
  slug: string;
  id: number;
  title: string;
  description: string;
  media: Medium[];
  checklist: ChecklistType[];
  cta_text: {
    name: string;
    value: string;
  };
  sections: SectionType[];
  seo: SEOType;
};
