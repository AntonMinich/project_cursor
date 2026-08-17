export default function Slide({ id, children, deep = false, className = '', wide = false, overlay = null }) {
  return (
    <section id={id} className={`slide ${deep ? 'bg-fincode-blue-deep' : ''} ${className}`}>
      {overlay}
      <div className={`slide-inner ${wide ? 'slide-inner-wide' : ''}`}>{children}</div>
    </section>
  );
}
