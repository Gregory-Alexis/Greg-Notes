import Header from "./components/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import Main from "./components/Main/Forms/Main";

AOS.init({ duration: 200 });

const App = () => {
  return (
    <div className="bg-gray-200 min-h-screen" style={{ fontFamily: "Roboto" }}>
      <Header />
      <Main />
    </div>
  );
};

export default App;
