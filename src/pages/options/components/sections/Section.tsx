import React, { ReactNode } from 'react';
import SectionText from "./SectionText";

export default function Section({ children, text }: { children: ReactNode, text: string }) {
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