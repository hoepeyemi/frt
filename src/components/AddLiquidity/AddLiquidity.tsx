import { Card, Form, Button, InputGroup } from 'react-bootstrap';

export default function AddLiquidity() {
    return (
        <Card className="mx-auto" style={{ maxWidth: '500px' }}>
            <Card.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>First Token</Form.Label>
                        <InputGroup>
                            <Form.Control 
                                type="number" 
                                placeholder="0.0"
                            />
                            <Form.Select>
                                <option value="CCD">CCD</option>
                                <option value="CIS2">CIS-2 Token</option>
                            </Form.Select>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Second Token</Form.Label>
                        <InputGroup>
                            <Form.Control 
                                type="number"
                                placeholder="0.0"
                            />
                            <Form.Select>
                                <option value="CIS2">CIS-2 Token</option>
                                <option value="CCD">CCD</option>
                            </Form.Select>
                        </InputGroup>
                    </Form.Group>

                    <Button variant="primary" className="w-100">
                        Add Liquidity
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
} 