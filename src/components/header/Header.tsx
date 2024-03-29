import NavBar from './NavBar';
import ThemeToggle from '../theme-toggle/ThemeToggle';
import HamburgerButton from './HamburgerButton';

export default function Header() {
  return (
    <header className="sticky top-0 pt-10 pb-5 border-b border-b-gray bg-white z-10 dark:bg-black">
      <nav className="flex justify-end sm:justify-between">
        <NavBar />
        <div className="flex gap-2">
          <ThemeToggle />
          <HamburgerButton />
        </div>
      </nav>
    </header>
  );
}
