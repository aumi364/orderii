import logo from "./logo.svg";
import style from "./App.module.css";
import Header from "./Layouts/Header/Header";
import Meals from "./Layouts/Meals/Meals";
function App() {
  return (
    <div className={style.App}>
      <Header />
      <Meals />
    </div>
  );
}

export default App;
