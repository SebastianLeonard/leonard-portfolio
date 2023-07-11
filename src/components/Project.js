import React from 'react';

function Project({title, thumbnail, desc, link}) {
    return(
        <div className='project-item'>
            <h3>{title}</h3>
            <img src={thumbnail} alt='project thumbnail'></img>
            <p>{desc}</p>
            <a href={link} className='button-link' target="_blank">Visit {title}</a>
        </div>
    );
}

export default Project;