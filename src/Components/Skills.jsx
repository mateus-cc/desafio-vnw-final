import React from "react";
import iconHtml from '../assets/html.png'
import iconCss from '../assets/css.png'
import iconJs from '../assets/formato-js.png'
import iconReact from '../assets/react.png'
import iconSass from '../assets/sass.png'
import {SkillsSubTitle} from './styled'
import {SkillsBody} from './styled'
import {SkillsIcons} from './styled'


function Skills () {
    return (
        <>
        <SkillsSubTitle>Habilidades</SkillsSubTitle>
        <SkillsBody>
            <figure>
                <SkillsIcons src={iconHtml} alt="Ícone HTML" />
            </figure>
            <figure>
                <SkillsIcons src={iconCss} alt="Ícone CSS" />
            </figure>
            <figure>
                <SkillsIcons src={iconJs} alt="Ícone JavaScript" />
            </figure>
            <figure>
                <SkillsIcons src={iconReact} alt="Ícone React" />
            </figure>
            <figure>
                <SkillsIcons src={iconSass} alt="Ícone Sass" />
            </figure>
        </SkillsBody>
        </>
    )
}

export default Skills