import Navbar from "./components/Navbar";
import Content from "./components/Content";
import SecondContent from "./components/SecondContent";
import ThirdContent from "./components/ThirdContent";
import FourthContent from "./components/FourthContent";
import FinalContent from "./components/FinalContent";

function AppLayout() {
  return (
    <>
      {/* Top Navigation */}
      <header>
        <Navbar />
      </header>

      {/* Main Page Content */}
      <main>
        <Suspense fallback={<p>Loading content...</p>}>
          <section>
            <Content />
          </section>

          <section>
            <SecondContent />
          </section>

          <section>
            <ThirdContent />
          </section>

          <section>
            <FourthContent />
          </section>
        </Suspense>
      </main>

      {/* Footer / Final Section */}
      <footer>
        <FinalContent />
      </footer>
    </>
  );
}

export default AppLayout;
