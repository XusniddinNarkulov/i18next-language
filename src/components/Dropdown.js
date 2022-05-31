import React, { useState } from "react";

export default function Dropdown() {
   const [active, setActive] = useState(false);
   const [selected, setSelected] = useState();
   return (
      <div class="ui floating dropdown labeled search icon button">
         <i class="world icon"></i>
         <span class="text">Select Language</span>
         <div class="menu">
            <div class="item">Arabic</div>
            <div class="item">English</div>
            <div class="item">French</div>
         </div>
      </div>
   );
}
