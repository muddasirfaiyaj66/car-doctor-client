

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-black text-white text-base-content">
  <aside>
    <img src="/src/assets/footerLogo.png" alt="" />
    <p>Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .<br/>Providing reliable tech since 1992</p>
  </aside> 
  <nav>
    <header className="footer-title text-white font-bold">About</header> 
    <a className="link link-hover">Home </a> 
    <a className="link link-hover">Service</a> 
    <a className="link link-hover">Contact</a> 
   
  </nav> 
  <nav>
    <header className="footer-title text-white font-bold">Company</header> 
    <a className="link link-hover">Why car doctor</a> 
    <a className="link link-hover">About</a> 
    
  </nav> 
  <nav>
    <header className="footer-title  text-white">Support</header> 
    <a className="link link-hover">Support Center</a> 
    <a className="link link-hover">Feedback</a> 
    <a className="link link-hover">Accessibility</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;