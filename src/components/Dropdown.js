import i18next from "i18next";
import React, { useState } from "react";

export default function Dropdown() {
   const [active, setActive] = useState(false);
   const [selected, setSelected] = useState(i18next.language);

   const options = ["en", "ar", "uz", "fr"];
   return (
      <div
         className="ui floating dropdown labeled search icon button"
         onClick={() => setActive((prev) => !prev)}
         style={{ width: "100px" }}
      >
         <i className="world icon"></i>
         <span className="text">{selected}</span>
         <div className="menu" style={{ display: `${active ? "block" : ""}` }}>
            {options.map((val, key) => {
               return (
                  <div
                     className="item"
                     key={key}
                     onClick={() => {
                        setSelected(val);
                        i18next.changeLanguage(val);
                     }}
                  >
                     {val}
                  </div>
               );
            })}
         </div>
      </div>
   );
}
