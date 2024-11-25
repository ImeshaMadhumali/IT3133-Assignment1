import React, { useState } from 'react';
import { sculptureList } from '../data/data';
import { Button, ButtonGroup, Container, Row, Col } from 'react-bootstrap';

const List = () => {
    const [index, setIndex] = useState(0);

    const nextSculpture = () => {
        setIndex((index + 1) % sculptureList.length);
    };

    const previousSculpture = () => {
        setIndex((index - 1 + sculptureList.length) % sculptureList.length);
    };

    return (
        <Container className="mt-4">
        <Row>
            <Col>
                <h2>{sculptureList[index].name}</h2>
            </Col>
        </Row>
        <Row>
            <Col md={4}>
                <img
                    src={sculptureList[index].url}
                    alt={sculptureList[index].alt}
                    className="img-fluid rounded"
                />
            </Col>
            <Col md={8}>
                <p><strong>Artist:</strong> {sculptureList[index].artist}</p>
                <p>{sculptureList[index].description}</p>
            </Col>
        </Row>
        <Row className="mt-3">
            <Col className="text-center">
                <ButtonGroup>
                    <Button onClick={previousSculpture}>Previous</Button>
                    <Button onClick={() => setIndex(0)}>First</Button>
                    <Button onClick={() => setIndex(sculptureList.length - 1)}>Last</Button>
                    <Button onClick={nextSculpture}>Next</Button>
                </ButtonGroup>
            </Col>
        </Row>
    </Container>
    );
};

export default List;
