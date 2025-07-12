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
      <section className="container py-12 lg:py-24 grid grid-cols-4 xl:grid-cols-12 gap-12 rounded-lg">
        <div className="col-span-4 xl:col-span-8 bg-gray-800 border border-gray-700 p-5">
          <div className="p-2 border border-gray-700 rounded-lg">
            <Image
              src={data.image}
              alt={data.title}
              className="rounded-lg"
              placeholder="blur"
              layout="responsive"
            />
          </div>
        </div>
        <div className="col-span-4 xl:col-span-4 p-5 bg-gray-800 border border-gray-700 rounded-lg">
          <div className="flex flex-col p-8 border border-gray-700 rounded-lg h-full">
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
              className="self-start bg-gray-800 border border-gray-700 px-5 py-3 rounded mt-10 text-white flex"
            >
              <div className="border-r pr-2 mr-2">
                <ExternalLinkIcon className="h-6 w-6" />
              </div>
              <span className="text-lg">Visit Website</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Project;
