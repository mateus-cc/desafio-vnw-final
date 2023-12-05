import { Link } from 'react-router-dom'
import {Footer} from './styled'
import {Links} from './styled'


function Nav () {
    return (
        <section>
        <Footer>
            <Links>
                <Link to='/' className='styledLink'>Início</Link>
            </Links>
            <Links>
                <Link to='/skills' className='styledLink'>Habilidades</Link>
            </Links>
            <Links>
                <Link to='/certification' className='styledLink'>Certificados</Link>
            </Links>
            <Links>
                <Link to='/projects' className='styledLink'>Projetos</Link>
            </Links>
        </Footer>
        
        </section>
    )
} 

export default Nav