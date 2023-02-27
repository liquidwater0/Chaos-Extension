import React from 'react';
import SectionText from "./SectionText";

export default function Section({ children, text }) {
    return (
        <>
            <section className='section'>
                <SectionText text={text}/>
                
                <div className="section-items">
                    { children }
                </div>
            </section>
        </>
    );
}