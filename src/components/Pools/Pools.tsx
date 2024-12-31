import { Card, Table } from 'react-bootstrap';

export default function Pools() {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Available Pools</Card.Title>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Pool</th>
                            <th>Liquidity</th>
                            <th>Volume (24h)</th>
                            <th>TVL</th>
                            <th>APR</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>CCD/CIS2</td>
                            <td>100,000</td>
                            <td>50,000</td>
                            <td>$200,000</td>
                            <td>12%</td>
                        </tr>
                        <tr>
                            <td>CIS2/CIS2</td>
                            <td>75,000</td>
                            <td>25,000</td>
                            <td>$150,000</td>
                            <td>8%</td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
} 