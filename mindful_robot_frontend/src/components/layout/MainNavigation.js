import { Link } from 'react-router-dom';
import { Container, Row, Col, Navbar } from 'react-bootstrap';

import classes from './MainNavigation.module.css';
import logo from '../../static/images/logos/Mindful Robot Logo.svg';

function MainNavigation() {
    // return <header className={classes.header}>
    //     <div className={classes.logo}>

    //     </div>
    //     <nav>
    //         <ul>
    //             <li>
    //                 <Link to='/'>All Meetups</Link>
    //             </li>
    //             <li>
    //                 <Link to='/new-meetup'>New Meetup</Link>
    //             </li>
    //             <li>
    //                 <Link to='/favorites'>My Favorites</Link>
    //             </li>
    //         </ul>
    //     </nav>
    // </header>
    // Use useRef here
    const toggleNav = () => {

    }

    return (
        <Container fluid className={classes.NavContainer}>
            <Row className="justify-content-center align-items-top">
                <Col xs="auto" className="pt-4">
                    <h1 className="NavTitle">The Mindful Robot</h1>
                    <p>A Robotics Playground</p>
                </Col>
                <Col xs="auto" className="py-2">
                    <img
                        alt=""
                        src={logo}
                        width="90"
                        height="90"
                        className="d-inline-block align-top"
                    />
                </Col>
                <div className={classes.burger} onClick={toggleNav}>
                    <div className={classes.line1}></div>
                    <div className={classes.line2}></div>
                    <div className={classes.line3}></div>
                </div>
            </Row>
            {/* <Row className={classes.NavItems}>
                <Col xs="auto">
                    <p>A Robotics Playground</p>
                </Col>
                <Col xs="auto">
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/'>About</Link>
                        </li>
                        <li>
                            <Link to='/'>Contact</Link>
                        </li>
                    </ul>
                </Col>
            </Row> */}
        </Container>
    )
};

export default MainNavigation