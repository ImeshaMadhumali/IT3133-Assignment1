import React, { useState } from 'react';
import { sculptureList } from '../data/data';
import { Button, ButtonGroup, Container, Row, Col } from 'react-bootstrap';
import Theme from './Theme';

const List = () => {
    const [index, setIndex] = useState(0);

    // Handlers for navigating the list
    const nextSculpture = () => {
        setIndex((index + 1) % sculptureList.length);
    };

    const previousSculpture = () => {
        setIndex((index - 1 + sculptureList.length) % sculptureList.length);
    };

    const firstSculpture = () => {
        setIndex(0);
    };

    const lastSculpture = () => {
        setIndex(sculptureList.length - 1);
    };

    return (
        <Container className="mt-4">
            {/* Title and Theme Toggle */}
            <Row className="align-items-center mb-4">
                <Col xs={9}>
                    <h2 className="text-center">{sculptureList[index].name}</h2>
                </Col>
                <Col xs={3} className="text-end">
                    <Theme />
                </Col>
            </Row>

            {/* Sculpture Image and Details */}
            <Row className="justify-content-center">
                {/* Image Section */}
                <Col md={4} className="text-center mb-3">
                    <img
                        src={sculptureList[index].url}
                        alt={sculptureList[index].alt}
                        className="img-fluid rounded"
                    />
                </Col>

                {/* Details Section */}
                <Col md={8}>
                    <p><strong>Artist:</strong> {sculptureList[index].artist}</p>
                    <p>{sculptureList[index].description}</p>
                </Col>
            </Row>

            {/* Navigation Buttons */}
            <Row className="mt-3">
                <Col className="text-center">
                    <ButtonGroup>
                        <Button variant="primary" onClick={previousSculpture}>
                            Previous
                        </Button>
                        <Button variant="secondary" onClick={firstSculpture}>
                            First
                        </Button>
                        <Button variant="secondary" onClick={lastSculpture}>
                            Last
                        </Button>
                        <Button variant="primary" onClick={nextSculpture}>
                            Next
                        </Button>
                    </ButtonGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default List;
