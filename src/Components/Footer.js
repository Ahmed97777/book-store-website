import React from 'react'
import { faFacebook , faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

    const Footer = () => {

    return (

        <>
        
            <footer className="footer">
                <div className="container">
                    <div className="row-1">
                        <div className="col-md-4">
                            <h3>Company</h3>
                            <ul>
                            <li><a href="/">About us</a></li>
                            <li><a href="/">Contact us</a></li>
                            <li><a href="/">Terms of use</a></li>
                            <li><a href="/">Privacy policy</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h3>Support</h3>
                            <ul>
                            <li><a href="/">FAQs</a></li>
                            <li><a href="/">Shipping and delivery</a></li>
                            <li><a href="/">Returns and exchanges</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h3>Follow us</h3>
                            <ul>
                            <li><a href="/"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div className="col-md-12">
                            <p>&copy; 2023 Our Book Store. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        
        </>
    )

    }

export default Footer
