export interface Project {
  liveurl: string;
  githuburl: string;
  title: string;
  sequence: number;
  image: {
    public_id: string;
    url: string;
  };
  description: string;
  techStack: string[];
  enabled?: boolean;
  _id: string;
}

export interface Socials {
  platform: string;
  enabled?: string;
  url: string;
  image: {
    public_id: string;
    url: string;
  };
  _id: string;
}

export interface Skill {
  name: string;
  enabled?: boolean;
  sequence: number;
  percentage: number;
  image: {
    public_id: string;
    url: string;
  };
  _id: string;
}

export interface Testimonial {
  name: string;
  image: {
    public_id: string;
    url: string;
  };
  review: string;
  position: string;
  enabled?: boolean;
  _id: string;
}

export interface Service {
  name: string;
  charge: number;
  _id: string;
  desc: string;
  enabled: boolean;
  image: {
    public_id: string;
    url: string;
  };
}

export interface Experience {
  company_name: string;
  summary: string;
  sequence: number;
  startDate: string;
  endDate: string;
  job_title: string;
  job_location: string;
  enabled?: boolean;
}
