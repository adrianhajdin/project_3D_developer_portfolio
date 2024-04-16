import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer text-center">
                All Rights Reserved by <a className="font-bold uppercase mb-5" target='_black' href="https://www.linkedin.com/in/mouad-akroubi-714284222/">mouad akroubi</a>.
                <div className="social-media">
                    <ul className='flex gap-5 justify-center align-center text-lg'>
                        <li>
                            <a href="https://www.linkedin.com/in/mouad-akroubi-714284222/" target='_black'>
                                <i class="fa fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/MOUADAKROUBI" target='_black'>
                                <i class="fa fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/mouad.akroubi.7" target='_black'>
                                <i class="fa fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/mouadakroubi/" target='_black'>
                                <i class="fa fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
