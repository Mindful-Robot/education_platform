import { Container, Row, Col } from 'react-bootstrap';
import classes from './Categories.module.css';

function Categories() {
    return (
        <section>
            <Container>
                <Row className="justify-content-between">
                    <Col>
                        <a href="#" className={classes.link}>
                            <div className={`${classes.category} ${classes.topics}`}>
                                <h1>Topics</h1>
                            </div>
                        </a>
                    </Col>
                    <Col>
                        <a href="#" className={classes.link}>
                            <div className={`${classes.category} ${classes.forums}`}>
                                <h1>Forums</h1>
                            </div>
                        </a>
                    </Col>
                    <Col>
                        <a href="#" className={classes.link}>
                            <div className={`${classes.category} ${classes.creator}`}>
                                <h1>Creator Space</h1>
                            </div>
                        </a>
                    </Col>
                    <Col>
                        <a href="#" className={classes.link}>
                            <div className={`${classes.category} ${classes.meetups}`}>
                                <h1>Meetups</h1>
                            </div>
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}


export default Categories;