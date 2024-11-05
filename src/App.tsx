import { Heading } from 'hyun-design-system';

import '@styles/style.scss';
import Header from '@components/Header';
import SectionTitle from '@components/SectionTitle';

function App() {
  return (
    <>
      <Header />
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
