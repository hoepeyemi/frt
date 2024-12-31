import { useState } from 'react';
import { Card, Form, Button, InputGroup } from 'react-bootstrap';

export default function Swap() {
    const [slippage, setSlippage] = useState('0.5');
    const [fromAmount, setFromAmount] = useState('');
    const [toAmount, setToAmount] = useState('');

    return (
        <Card className="mx-auto" style={{ maxWidth: '500px' }}>
            <Card.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>From</Form.Label>
                        <InputGroup>
                            <Form.Control 
                                type="number" 
                                value={fromAmount}
                                onChange={(e) => setFromAmount(e.target.value)}
                                placeholder="0.0"
                            />
                            <Form.Select>
                                <option value="CCD">CCD</option>
                                <option value="CIS2">CIS-2 Token</option>
                            </Form.Select>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>To</Form.Label>
                        <InputGroup>
                            <Form.Control 
                                type="number"
                                value={toAmount}
                                onChange={(e) => setToAmount(e.target.value)}
                                placeholder="0.0"
                            />
                            <Form.Select>
                                <option value="CIS2">CIS-2 Token</option>
                                <option value="CCD">CCD</option>
                            </Form.Select>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Slippage Tolerance (%)</Form.Label>
                        <Form.Control 
                            type="number" 
                            value={slippage}
                            onChange={(e) => setSlippage(e.target.value)}
                            placeholder="0.5"
                        />
                    </Form.Group>

                    <Button variant="primary" className="w-100">
                        Swap
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
} 