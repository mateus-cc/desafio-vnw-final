import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    flex-direction: column;
`
export const Title = styled.h1 `
    color: white;
    width: 25vw;
    padding: 10px 0px 10px 10px;
`
export const SubTitle = styled.h2`
    color: white;
    padding: 10px 0px 10px 10px;
`

export const Photo = styled.img`
    width: 16vw;
    border-radius: 100%;
    border: 1px solid black;
    margin: 10px 0px 10px 10px;
`

export const Icons = styled.img`
    width: 3vw;
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    flex-direction: row;
    /* border: 1px solid black; */
`

export const Footer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    /* border: 1px solid black; */
    width: 100%;
    padding: 40px 10px 30px 10px;
`

export const SocialMedia = styled.div`
    width: 100%;
    display: flex;
    justify-content: right;
    padding: 0px 10px 0px 0px;
`

export const Links = styled.li`
    list-style: none;
    text-decoration: none;
    color: white;
`

export const Text = styled.a`
    padding: 10px;
    color: white;
`

export const SkillsBody = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 100px;
`
export const SkillsIcons = styled.img`
    width: 15vw;
`
export const SkillsSubTitle = styled.h2`
    color: white;
    text-align: center;
    margin: 40px;
`
export const CertificationsBody = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 100px;
`

export const Certifications = styled.figure`
    padding: 0px 0px 20px 0px;
`
export const CertificationsCaption = styled.figcaption`
    color: white;
`

export const ProjectsImg = styled.figure`
    padding: 30px
`



