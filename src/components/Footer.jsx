const Footer = () => {
  return (
    <footer className="footer footer-center bg-[#18181b] text-base-content p-4 border-t border-neutral-700">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
