import { Container, Nav, Tab } from 'react-bootstrap';
import Pools from '../Pools/Pools';
import Swap from '../Swap/Swap';
import AddLiquidity from '../AddLiquidity/AddLiquidity';

function App() {
    return (
        <Container>
            <h1 className="mb-4">Concordium DEX</h1>
            
            <Tab.Container defaultActiveKey="swap">
                <Nav variant="pills" className="mb-4 justify-content-center">
                    <Nav.Item>
                        <Nav.Link eventKey="swap">Swap</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="pools">Pools</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="add-liquidity">Add Liquidity</Nav.Link>
                    </Nav.Item>
                </Nav>

                <Tab.Content>
                    <Tab.Pane eventKey="swap">
                        <Swap />
                    </Tab.Pane>
                    <Tab.Pane eventKey="pools">
                        <Pools />
                    </Tab.Pane>
                    <Tab.Pane eventKey="add-liquidity">
                        <AddLiquidity />
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </Container>
    );
}

export default App;



