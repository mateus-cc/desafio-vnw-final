import React from "react";
import disney from '../assets/disney.jpg'
import inverno from '../assets/inverno.jpg'
import fantastica from '../assets/fantastika.jpg'
import poster from '../assets/poster.jpg'
import perfil from '../assets/perfil.jpg'
import {SkillsSubTitle} from './styled'
import {ProjectsImg} from './styled'
import {CertificationsCaption} from './styled'


function Projects () {
    return (
        <>
        <SkillsSubTitle>Projetos</SkillsSubTitle>
        <section>
            <ProjectsImg>
                <img src={disney} alt="" />
                <CertificationsCaption>Projeto Serviço de Streaming - Disney</CertificationsCaption>
            </ProjectsImg>
            <ProjectsImg>
                <img src={inverno} alt="" />
                <CertificationsCaption>Projeto Inverno - Vai Na Web</CertificationsCaption>
            </ProjectsImg>
            <ProjectsImg>
                <img src={fantastica} alt="" />
                <CertificationsCaption>Projeto Final Módulo 1 - Vai Na Web</CertificationsCaption>
            </ProjectsImg>
            <ProjectsImg>
                <img src={poster} alt="" />
                <CertificationsCaption>Projeto React - One Bite Code</CertificationsCaption>
            </ProjectsImg>
            <ProjectsImg>
                <img src={perfil} alt="" />
                <CertificationsCaption>Projeto React - One Bite Code</CertificationsCaption>
            </ProjectsImg>
        </section>
        </>
    )
}

export default Projects