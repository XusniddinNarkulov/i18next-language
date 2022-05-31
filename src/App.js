import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Dropdown from "./components/Dropdown";

function App() {
   const { t } = useTranslation();

   const language = ["ar", "en", "uz", "fr"];

   return (
      <div className="App">
         <div className="ui large menu">
            {/* <a className="active item">Home</a> */}
            {/* <a className="item">Messages</a> */}
            <div className="right menu">
               <select
                  className="ui dropdown item"
                  style={{ height: "100%", width: "80px" }}
               >
                  {language.map((val, key) => {
                     return (
                        <option
                           onClick={() => i18next.changeLanguage(val)}
                           key={key}
                        >
                           {val}
                        </option>
                     );
                  })}
               </select>
               <div className="item">
                  <Dropdown />
                  {/* <div className="ui primary button">Sign Up</div> */}
               </div>
            </div>
         </div>

         <section>
            <h1>{t("welcome_message")}</h1>
            <p>{t("days_since_release", { number_of_days: 11 })}</p>
         </section>
      </div>
   );
}

export default App;
