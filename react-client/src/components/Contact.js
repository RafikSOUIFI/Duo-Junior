import React from "react";

const Contact = () => {
    return (
        <section id="contact">
            <h2>Contact Us</h2>
            <p>Thank you for your interest in our tech store! If you have any questions or concerns, please don't hesitate to contact us using one of the following methods:</p>
            <ul>
                <li><strong>Phone:</strong> +(216) 94 02 91 21</li>
                <li><strong>Email:</strong> <a href="mailto:info@techstore.com">info@techstore.com</a></li>
                <li><strong>Address:</strong> B23, Technopark Elghazela ariana, 2088</li>
            </ul>
            <p>You can also reach out to us on social media:</p>
            <ul class="social-media">
            <li><a href="https://www.facebook.com/techstore"><img src="https://i.pinimg.com/564x/63/a2/31/63a231592efca78f2bcbc02267eb37be.jpg" alt="Facebook"/></a></li>
            <li><a href="https://twitter.com/techstore"><img src="https://i.pinimg.com/originals/0d/9c/24/0d9c24b21e25f1ecd9f69026f692322e.png" alt="Twitter"/></a></li>
            <li><a href="https://www.instagram.com/techstore"><img src="https://image.similarpng.com/very-thumbnail/2020/06/Instagram-logo-transparent-PNG.png" alt="Instagram"/></a></li>
            </ul>
            <p>Our customer support team is available to assist you from Monday to Friday, 9am-5pm EST. We aim to respond to all inquiries within 24 hours.</p>
            <p>Thank you for choosing our tech store!</p>
            <div id="map"><iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51082.77070137811!2d10.149149747845627!3d36.85030276403762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb32a574f131%3A0x736d6f5853a1bd2e!2sRebootkamp!5e0!3m2!1sen!2stn!4v1679643182396!5m2!1sen!2stn" 
      width="1250" 
      height="450" 
      style={{ border: 0 }} 
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
    >
    </iframe></div>
        </section>

    )
}

export default Contact


