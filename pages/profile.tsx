import { NextPage } from "next";
import { Layout } from "../components/layout/layout";

const Profile: NextPage = () => {
  return (
    <Layout>
      <div className="container py-5">
        <h1 className="section-header">Profile</h1>
      </div>
    </Layout>
  );
};

export default Profile;
