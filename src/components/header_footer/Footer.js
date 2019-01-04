import React from 'react'
import { Fade } from 'react-reveal';

export default function Footer() {
  return (
    <footer className="bck_red">
      <Fade delay={500}>
            <div className="font_righteous footer_logo_venue">
                The Venue
            </div>

            <div className="footer_copyright">
                The Venue 2019. All rights reserved
            </div>

      </Fade>
    </footer>
  )
}