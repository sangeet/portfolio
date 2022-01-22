import { NextPage } from "next";
import { Layout } from "../components/layout/layout";
import { testimonials } from "../data/testimonials";

const Testimonials: NextPage = () => {
  return (
    <Layout>
      <div className="container py-5">
        <h1 className="section-header">Testimonials</h1>
      </div>
    </Layout>
  );
};

export default Testimonials;
