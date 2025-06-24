import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Input } from './components/Input';
import { Cycles } from './components/Cycles';

import './styles/theme.css';
import './styles/global.css';
import { DefaultInput } from './components/DefaultInput';

export function App() {
    return (
        <>
            <Container>
                <Logo title="El Relogio" />
            </Container>

            <Container>
                <Menu></Menu>
            </Container>

            <Container>
                <CountDown></CountDown>
            </Container>

            <Container>
                <div className="form">
                    <div className="formRow">
                        <DefaultInput
                            id="input"
                            label="Label"
                            placeholder="Placeholder"
                        />
                    </div>

                    <div className="formRow">
                        <Cycles></Cycles>
                    </div>

                    <div className="formRow">
                        <p>0 0 0 0 0 0</p>
                    </div>
                </div>
            </Container>
        </>
    );
}
