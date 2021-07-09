import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './Header.scss';

Header.propTypes = {
    
};

function Header(props) {
    return (
        <div className="header">
              <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                    <a
                        className="header__link header__title"
                        href="https://youtube.com/easyfrontend"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Photo App
                    </a>
                    </Col>

                    <Col xs="auto">
                    <NavLink
                        exact
                        className="header__link"
                        to="/sign-in"
                        activeClassName="header__link--active"
                    >
                        Sign In
                    </NavLink>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Header;