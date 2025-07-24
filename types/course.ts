export type Medium = {
  name: string;
  resource_type: "video" | "image";
  resource_value: string;
  thumbnail_url?: string;
};

export type Checklist = {
  id: string;
  text: string;
  icon: string;
  color: string;
  list_page_visibility: boolean;
};

export type Instructor = {
  name: string;
  description: string;
  short_description: string;
  image: string;
  slug: string;
  has_instructor_page: boolean;
};

export type Feature = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
};

export type Pointer = {
  id: string;
  text: string;
  icon: string;
  color: string;
};

export type AboutItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type Section = {
  type: string;
  name: string;
  description: string;
  order_idx: number;
  values: any[];
};

export type CourseData = {
  slug: string;
  id: number;
  title: string;
  description: string;
  media: Medium[];
  checklist: Checklist[];
  cta_text: {
    name: string;
    value: string;
  };
  sections: Section[];
};
