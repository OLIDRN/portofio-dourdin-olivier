import './Footer.css';

const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/olivierdourdin',
    icon: '/public/svg/github.svg',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/olivierdourdin/',
    icon: '/public/svg/linkedin.svg',
  },
  {
    name: 'Email',
    url: 'mailto:olivierdourdin148@gmail.com',
    icon: '/public/svg/mail.svg',
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-separator" />
      <div className="footer-socials">
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.url}
            className="footer-social-link"
            target="_blank"
            rel="noopener noreferrer"
            title={s.name}
          >
            <img src={s.icon} alt={s.name} className="footer-social-icon" />
          </a>
        ))}
      </div>
      <div className="footer-copy">
        © {new Date().getFullYear()} – Olivier Dourdin – Développeur web full-stack
      </div>
    </footer>
  );
};

export default Footer; 