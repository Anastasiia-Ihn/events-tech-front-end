import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ListEvents from "./components/ListEvents/ListEvents";
import Register from "./components/Register/Register";

const App = () => {
  return (
    <div className="container">
      <Header />
      <main className="container-main">
        <Register />
        <ListEvents />
      </main>
      <Footer />
    </div>
  );
};

export default App;
