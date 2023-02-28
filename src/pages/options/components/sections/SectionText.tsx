import React from 'react';

export default function SectionText({ text }: { text: string }) {
    return (
        <div className='section-text'>
            <span className='text'>{ text }</span>
        </div>
    );
}
