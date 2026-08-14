import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="logo" aria-label="21 век finance — на главную">
          <span className="logo-mark">21</span>
          <span className="logo-name">21 век finance</span>
        </Link>
        <div className="header-partner">
          <span>Партнёр по лизингу</span>
          <b>Фламинго</b>
        </div>
      </div>
    </header>
  );
}
