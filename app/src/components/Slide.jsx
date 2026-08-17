export default function Slide({ id, children, deep = false, className = '', wide = false }) {
  return (
    <section id={id} className={`slide ${deep ? 'bg-fincode-blue-deep' : ''} ${className}`}>
      <div className={`slide-inner ${wide ? 'slide-inner-wide' : ''}`}>{children}</div>
    </section>
  );
}
