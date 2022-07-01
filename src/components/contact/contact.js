import '../../style/contact.css';

function Contact() {
  return (
    <div id="contacts" className="contact-con">
      <div className="heading-con">
        <h1>Contact</h1>
      </div>
      <div className='email-con'>
        <p>Let's connect!</p>
        <p>Email: <span>machipisajunior@gmail.com</span></p>
        <p>Cell: <span>+27659187764</span></p>
      </div>
      <div className="form-con">
        <form className="form" action="https://formspree.io/f/xnqwgead" method="post">
            <input name="User" placeholder="Username" type="text" class="form-control" />
            <input placeholder="Email Address" name="Email" id="email" type="email" class="form-control" />
            <textarea name="message" rows="4" placeholder="Leave a Message" class="form-textarea"></textarea>
            <div className="btn-submit-con">
            <button type="submit" class="contact-btn">Send Message</button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;