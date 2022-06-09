import Link from 'next/link';
import { Navbar, Nav , Container} from 'react-bootstrap'

const Header = () =>{
    return(
        <>
            <header>
                <Container>
                    <Navbar variant='dark'>
                        <Navbar.Brand>
                            <Link href="/">Hokusai</Link>
                        </Navbar.Brand>
                        <Nav>
                            <Link href="/" passHref>
                                <Nav.Link>Home</Nav.Link>
                            </Link>

                            <Link href="/bio" passHref>
                                <Nav.Link>Bio</Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar>
                </Container>
            </header>
        </>
    )
}

export default Header;
