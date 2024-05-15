import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ListEvents from "./components/ListEvents/ListEvents";

const App = () => {
  return (
    <div className="container">
      <Header />
      <main className="container-main">
        <ListEvents />
      </main>
      <Footer />
    </div>
  );
};

export default App;
