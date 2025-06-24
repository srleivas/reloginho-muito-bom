import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { DefaultInput } from './components/DefaultInput';
import { DefaultButton } from './components/DefaultButton';
import { Cycles } from './components/Cycles';
import { PlayCircleIcon } from 'lucide-react';

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
                        <DefaultButton
                            icon={<PlayCircleIcon />}
                            color="green"
                        />
                    </div>

                    <div className="formRow">
                        <p>0 0 0 0 0 0</p>
                    </div>
                </div>
            </Container>
        </>
    );
}
