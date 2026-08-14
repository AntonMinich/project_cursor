export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} ТехноМаркет. Демо-версия интернет-магазина.</span>
        <span>Лизинг предоставляется ООО «Фламинго Лизинг».</span>
      </div>
    </footer>
  );
}
