import React from 'react'

export default function Location() {
  return (
    <div className="location_wrapper">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d74139.59905914882!2d-115.33009854270738!3d36.175563602637325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8bf8fc29b96e3%3A0x394297bd30a49589!2sSuncoast+Hotel+and+Casino!5e0!3m2!1sen!2sin!4v1546602026723" 
      width="100%" 
      height="500px" 
      frameBorder="0" 
      allowFullScreen></iframe>

      <div className="location_tag">
        <div>
        Location
        </div>
      </div>
    </div>
  )
}
