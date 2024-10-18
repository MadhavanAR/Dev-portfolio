import { ContactForm } from "@/components/contact-form";
import { HeroSection } from "@/components/HeroSection";
import ProjectsPage from "@/components/ProjectsPage";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import React from "react";
import {
  Project,
  Skill,
  Socials,
  Testimonial,
  Service,
  Experience,
} from "@/interface";
import Services from "@/components/Services";
import Timeline from "@/components/timeline";

interface ProjectType {
  title: string;
  desc: string;
  tech: string[];
  link: string;
  cover: string;
}

interface Timeline {
  company: string;
  summary: string;
  start: string;
  end: string;
  job_title: string;
  location: string;
}

interface ServicesType {
  name: string;
  charge: number;
  desc: string;
  cover: string;
}

interface TestimonialType {
  name: string;
  quote: string;
  title: string;
  image: string;
  id: string;
}

export default async function page() {
  const data = await fetch(
    "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
  );
  const res = await data.json();

  let name = res.user.about.name;
  let role = res.user.about.title;
  let title = res.user.about.subTitle;
  let phone = res.user.about.phoneNumber;
  let skills = res.user.skills;
  let mail = res.user.email;
  let address = res.user.about.address;
  let project = res.user.projects;
  let service = res.user.services;
  let testimonial = res.user.testimonials;
  let timeline = res.user.timeline;
  let social_handles = res.user.social_handles;
  let timelines: Timeline[] = [];
  let services: ServicesType[] = [];
  let testimonials: TestimonialType[] = [];
  let datas: string[] = [];
  let projects: ProjectType[] = [];
  let socials: string[] = [];
  timeline.filter((item: Experience) => {
    if (!item.enabled) return;
    timelines.push({
      company: item.company_name,
      summary: item.summary,
      start: item.startDate,
      end: item.endDate,
      job_title: item.job_title,
      location: item.job_location,
    });
  });
  social_handles.filter((element: Socials) => {
    if (!element.enabled) return;
    socials.push(element.platform);
  });
  skills.filter((skill: Skill) => {
    if (!project.enabled) return;
    datas.push(skill.name);
  });
  service.filter((item: Service) => {
    if (!item.enabled) return;
    services.push({
      name: item.name,
      charge: item.charge,
      desc: item.desc,
      cover: item.image.url,
    });
  });
  project.filter((project: Project) => {
    if (!project.enabled) return;
    projects.push({
      title: project.title,
      desc: project.description,
      link: project.liveurl,
      cover: project.image.url,
      tech: project.techStack,
    });
  });
  testimonial.filter((data: Testimonial) => {
    if (!data.enabled) return;
    testimonials.push({
      name: data.name,
      quote: data.review,
      title: data.position,
      image: data.image.url,
      id: data._id,
    });
  });

  return (
    <main className="text-white min-h-screen gap-16 overflow-hidden">
      <div className="bg-grid-black/[0.2]">
        <div className="max-w-7xl mx-auto">
          <HeroSection
            name={name}
            role={role}
            title={title}
            address={address}
            phone={phone}
            mail={mail}
          />
          <Skills />
{/*           <Timeline timeline={timelines} /> */}
          <ProjectsPage projects={projects} />
          <Services services={services} />
          <Testimonials testimonials={testimonials} />
          <ContactForm socials={socials} />
        </div>
      </div>
    </main>
  );
}
