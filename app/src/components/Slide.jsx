export default function Slide({ id, children, deep = false, className = '' }) {
  return (
    <section id={id} className={`slide ${deep ? 'bg-fincode-blue-deep' : ''} ${className}`}>
      <div className="slide-inner">{children}</div>
    </section>
  );
}
