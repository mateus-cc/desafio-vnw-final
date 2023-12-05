import React from "react";
import certificadoHtml from '../assets/certificadoHtml.jpg'
import certificadoCss from '../assets/certificadoCss.jpg'
import {SkillsSubTitle} from './styled'
import {CertificationsBody} from './styled'
import {Certifications} from './styled'
import {CertificationsCaption} from './styled'


function Certification () {
    return (
        <>
        <SkillsSubTitle>Certificados</SkillsSubTitle>
        <CertificationsBody>
            <Certifications>
                <img src={certificadoHtml} alt="Certificado HTML" />
                <CertificationsCaption>Certificacdo HTML5</CertificationsCaption>
            </Certifications>
            <Certifications>
                <img src={certificadoCss} alt="Certificado CSS" />
                <CertificationsCaption>Certificado CSS3</CertificationsCaption>
            </Certifications>
        </CertificationsBody>
        </>
    )
}

export default Certification