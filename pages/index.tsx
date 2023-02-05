import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import BaseTemplate from '../components/templates/base/BaseTemplate';
import { mockBaseTemplateProps } from '../components/templates/base/BaseTemplate.mocks';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1>
        <a href="https://nextjs.org">Next.js!</a> Boilerplate with tailwindcss
      </h1>
      <BaseTemplate {...mockBaseTemplateProps.base} />
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
