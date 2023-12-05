import avatar from '../assets/profile.jpg'
import {Title} from './styled'
import {SubTitle} from './styled'
import {Header} from './styled'
import {Photo} from './styled'
import {Text} from './styled'


function About () {
  return (
    <>
        <Header>
            <header>
                <Photo src={avatar} alt='Foto perfil' />
                <Title>Mateus César Costa</Title>
                <SubTitle>Desenvolvedor Front-End</SubTitle>
            </header>
            <Text>Olá. Tenho 28 anos e moro no interior de São Paulo, na cidade de Araras. Estou em transição de carreira para a área de Desenvolvedor Front-End.</Text>
            <Text>Através do curso de Front-End da fundação Vai na Web, adiquiri conhecimento de HTML5, CSS3, JavaScript, React e SASS, além também de versionamento de código com Git e Github e conhecimento em responsividade.</Text>
            <Text>Tambem estou me formando como Desenvolvedor Full-Stack, através da One Bite Code.
            </Text>
        </Header>
        </>
    )
}

export default About