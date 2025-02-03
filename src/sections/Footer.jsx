const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p> All rights reserved.</p>
        <p></p>
        <p></p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/tanaydwivedi095">
          <div className="social-icon">
            <img src="/assets/github.png" alt="github" className="w-1/2 h-1/2" />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/tanaydwivedi095/">
          <div className="social-icon">
            <img src="/assets/linkedin.png" alt="twitter" className="w-1/2 h-1/2" />
          </div>
        </a>
      </div>

      <p className="text-white-500">© 2025 Tanay Dwivedi.</p>
    </footer>
  );
};

export default Footer;
