import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  Alert,
  Button,
  Collapse,
  Card,
  CardBody,
} from 'reactstrap';
import 'animate.css';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    console.log('item');
  });
  return (
    <div className="deneme">
      <h1 className="animate__animated animate__bounce">An animated element</h1>
      <div>
        <Button
          color="primary"
          onClick={toggle}
          style={{ marginRight: '1rem' }}
        >
          Toggle
        </Button>
        <Button color="primary">primary</Button>{' '}
        <Button color="secondary">secondary</Button>{' '}
        <Button
          color="success"
          className="animate__animated animate__tada animate__repeat-3"
        >
          success
        </Button>{' '}
        <Button color="info">info</Button>{' '}
        <Button color="warning">warning</Button>{' '}
        <Button color="danger">danger</Button>{' '}
        <Button color="link">link</Button>
        <Collapse isOpen={isOpen}>
          <Card>
            <CardBody>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </CardBody>
          </Card>
        </Collapse>
      </div>
      <div>
        <Alert color="primary">Hey! Pay attention.</Alert>
      </div>
    </div>
  );
}
