import { Container, Row, Col } from 'react-bootstrap';
import classes from './Heading.module.css';


function Heading() {
    return (
        <section>
            <Row className="justify-content-center">
                <Col xs="auto" className={classes.HomepageHeading}>
                    <h1>How Do You Want To Learn?</h1>
                </Col>
            </Row>
        </section>
    );
}


export default Heading;