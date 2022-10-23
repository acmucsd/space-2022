import React from "react";
import Panel from "./panel";

import s from "./style.module.scss";

interface FAQProps{
  panelTitles: Array<string>;
  panelContents: Array<string>;
}

const Faq: React.FC<FAQProps> = ({panelTitles, panelContents}) => {

  return (
    <div className={s.faq}>
      {
        panelTitles.map((title, label) => {
          return ( <Panel
            panelTitle={title}
            key={label}
            panelContent={panelContents[label]}
          /> );
        })
      }
    </div>
  )
};

export default Faq;