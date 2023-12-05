import iconX from '../assets/twitter.png'
import iconInsta from '../assets/instagram.png'
import iconGithub from '../assets/github.png'
import iconLinkedin from '../assets/linkedin.png'
import {Icons} from '../Components/styled'
import {SocialMedia} from '../Components/styled'


function Media () {
    return (
        <>
        <SocialMedia>
            <a  href='https://twitter.com/mateeuscc' target='_blank'>
            <figure>
                <Icons src={iconX} alt="Ícone X" />
            </figure>
            </a>
            <a  href='https://www.instagram.com/deliranteparanoia/' target='_blank'>
            <figure>
                <Icons src={iconInsta} alt="Ícone Instagram"/>
            </figure>
            </a>
            <a href="https://github.com/mateus-cc" target='_blank'>
            <figure>
                <Icons src={iconGithub} alt="Ícone GitHub" />
            </figure>
            </a>
            <a href="https://www.linkedin.com/in/mateus-c%C3%A9sar-costa111995/" target='_blank'>
            <figure>
                <Icons src={iconLinkedin} alt="Ícone LinkedIn" />
            </figure>
            </a>
        </SocialMedia>
        </>
    )
}

export default Media