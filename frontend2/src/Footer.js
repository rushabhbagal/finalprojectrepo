import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the E-MED to receive our best Hospitality
        </p>
        <p className='footer-subscription-text'>
          Thank-You
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
              readOnly
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <h5>Each time a patient finds the right doctor, we build a healthier nation.</h5>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <h5><Link to='/About'>About</Link></h5>
            <h5><Link to='/Contacts'>Contact</Link></h5>
            <h5> <Link to='/'>How it works</Link></h5>
            <h5> <a
                href='https://www.google.com/maps/place/SunBeam+Institute+of+Information+Technology/@17.283801,74.1803475,19z/data=!4m6!3m5!1s0x3bc18248b7008219:0x66a33d8736d2773b!8m2!3d17.2836568!4d74.1810882!16s%2Fg%2F1th55fk8?entry=ttu'
                target='_blank'
                rel='noopener noreferrer'
                >
                sunbeam infotech,karad
            </a></h5>
            {/* <Link to='https://www.google.com/maps/place/SunBeam+Institute+of+Information+Technology/@17.283801,74.1803475,19z/data=!4m6!3m5!1s0x3bc18248b7008219:0x66a33d8736d2773b!8m2!3d17.2836568!4d74.1810882!16s%2Fg%2F1th55fk8?entry=ttu'>sunbeam infotech,karad</Link> */}
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Help & Policies</h2>
            {/* <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Hospitals</Link> */}
            {/* <h4>Privacy Policy</h4>
            <h4></h4>
            <h4>Terms & Conditions</h4> */}
            <h5>Privacy Policy</h5>
            <h5>Terms & Conditions</h5>
            <h5>Terms & Conditions</h5>
            

          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <h5>Instagram</h5>
            <h5>Facebook</h5>
            <h5>Youtube</h5>
            <h5>Twitter</h5>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              E-MED
              <i class='fas fa-hospital' />
            </Link>
          </div>
          <small class='website-rights'>E-MED © 2023</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <a
                className='social-icon-link twitter'
                href=''
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Twitter'
                >
                <i className='fab fa-twitter' />
            </a>
            <a
                className='social-icon-link twitter'
                href=''
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'
                >
                <i className='fab fa-linkedin' />
            </a>


          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;