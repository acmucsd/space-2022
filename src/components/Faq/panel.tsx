import React, { useState, useRef } from 'react';

import s from './style.module.scss'

interface PanelProps{
    panelTitle: string;
    panelContent: string;
}

const Panel: React.FC<PanelProps> = ({ panelTitle, panelContent }) => {

    const [setActive, setActiveState] = useState('');
    const [height, setHeight] = useState('0px');
    const [margin, setMargin] = useState('0px');
    const [spin, setSpin] = useState('');
    const content = useRef<HTMLDivElement>(null);

    function togglePanel() {
        setActiveState(setActive === '' ? 'header-active' : '');
        toggleHeight();
      }
      
    function toggleHeight() {
    if(content.current == null) {
        console.log('error with faq panel height toggle');
    } else {
        setHeight(setActive === 'header-active' ? '0px' : `${content.current.scrollHeight + 30}px`);
        setMargin(setActive === 'header-active' ? '0px' : '12px 0px 30px 18px');
        setSpin(setActive === 'header-active' ? '' : 'spin');
    }
    }

    return (
        <div className={s.panel}>
            <button className={`${s.header} ${setActive}`} onClick={togglePanel}><span className={s.arrow}><img alt="panel button" src="asset/arrow.png"/></span>{ panelTitle }</button>
            <div className={s.content} ref={content} style={{ maxHeight: `${height}`, margin: `${margin}` } } >
                <p dangerouslySetInnerHTML={{ __html: panelContent}}/>
            </div>
        </div>
    )
}

export default Panel;