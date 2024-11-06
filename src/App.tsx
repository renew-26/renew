import { Heading } from 'hyun-design-system';

import '@styles/style.scss';
import LayoutHeader from '@layout/Header';
import SectionTitle from '@components/SectionTitle';

function App() {
  return (
    <>
      <LayoutHeader />
      <section>
        <div className="container w-container">
          <Heading>Section</Heading>
        </div>
      </section>
      <section>
        <div className="container w-container">
          <SectionTitle />
          {/* <Text size="xl">asdasd</Text> */}
        </div>
      </section>
      <section>
        <div className="container w-container">
          <Heading>Section</Heading>
        </div>
      </section>
      <section>
        <div className="container w-container">
          <Heading>Section</Heading>
        </div>
      </section>
    </>
  );
}

export default App;
