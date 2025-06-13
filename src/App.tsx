import { Menu } from './components/Menu';
import { Heading } from './components/Heading';
import { Container } from './components/Container';
import { Logo } from './components/Logo';

import './styles/theme.css';
import './styles/global.css';

export function App() {
    return (
        <>
            <Container>
                <Logo title="El Relogio" />
            </Container>

            <Container>
                <Menu></Menu>
            </Container>
        </>
    );
}
