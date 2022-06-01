import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Dropdown from "./components/Dropdown";
import { useEffect } from "react";

function App() {
   const { t } = useTranslation();

   // useEffect(() => {
   //    i18next.language = "en";
   //    if (i18next.language === "ar") {
   //       document.body.dir = "rtl";
   //    }
   // }, []);

   return (
      <div className="App">
         <div className="ui large menu">
            {/* <a className="active item">Home</a> */}
            {/* <a className="item">Messages</a> */}
            <div
               // className={`${
               //    i18next.language === "ar" ? "left" : "right"
               // } menu`}
               className="right menu"
            >
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
