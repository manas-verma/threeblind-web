export default function Footer() {
    return (
      <footer className="w-full p-4 bg-secondary-dark">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-primary-lightest text-sm">© 2023 Manas Verma</p>
          <a
            href="https://www.buymeacoffee.com/manasverma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-light hover:text-accent-lighter transition"
          >
            Buy Me A Coffee
          </a>
        </div>
      </footer>
    );
  }
