/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent } from "react";
import type { NextPage } from "next";

import { Layout } from "../components/layout/layout";
import { IntroSection } from "../sections/home/intro";
import { ProjectsSection } from "../sections/home/projects";
import { TestimonialsSection } from "../sections/home/testimonials";
import { ToolsSection } from "../sections/home/tools";

const Index: NextPage = () => {
  return (
    <Layout>
      <IntroSection />
      <ToolsSection />
      <ProjectsSection />
      <TestimonialsSection />
    </Layout>
  );
};

export default Index;
