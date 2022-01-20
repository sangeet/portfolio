import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";
import { FunctionComponent } from "react";

import { Layout } from "../../components/layout/layout";
import { ExternalLinkIcon } from "../../components/icons/external-link";
import { projects, ProjectItemType } from "../../data/projects";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((p) => ({
    params: { slug: p.slug },
  }));
  return {
    paths,
    fallback: false,
  };
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}
export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const data = projects.filter((p) => p.slug === slug)[0];
  return {
    props: {
      data,
    },
  };
};

type ProjectPropsType = {
  data: ProjectItemType;
};
const Project: FunctionComponent<ProjectPropsType> = ({ data }) => {
  return (
    <Layout>
      <section className="container py-12 lg:py-24 grid grid-cols-12 gap-12 lg:gap-24">
        <div className="col-span-12 lg:col-span-6">
          <Image
            src={data.image}
            alt={data.title}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="col-span-12 lg:col-span-6 flex flex-col">
          <span className="mb-5 text-orange-400">{data.type}</span>
          <h1 className="text-4xl font-bold">{data.title}</h1>
          <p className="my-5">{data.description}</p>
          <div className="flex flex-wrap">
            {data.tags?.map((tag, index) => (
              <span key={index} className="tag mr-3">
                {tag}
              </span>
            ))}
          </div>

          <a
            href={data.link}
            target="_blank"
            rel="noreferrer"
            className="self-start bg-orange-700 px-5 py-3 rounded mt-10 text-white flex"
          >
            <div className="border-r pr-2 mr-2">
              <ExternalLinkIcon className="h-6 w-6" />
            </div>
            <span className="text-lg">Visit Website</span>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Project;
