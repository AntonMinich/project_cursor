import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="logo" aria-label="ТехноМаркет — на главную">
          <span className="logo-mark">ТМ</span>
          <span className="logo-name">ТехноМаркет</span>
        </Link>
        <div className="header-partner">
          <span>Партнёр по лизингу</span>
          <b>Фламинго</b>
        </div>
      </div>
    </header>
  );
}
