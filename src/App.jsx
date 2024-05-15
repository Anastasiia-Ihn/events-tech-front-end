import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ListEvents from "./components/ListEvents/ListEvents";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <ListEvents />
      </main>
      <Footer />
    </>
  );
};

export default App;
