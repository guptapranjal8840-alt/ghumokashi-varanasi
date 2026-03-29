import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Ghumokashi Varanasi. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;