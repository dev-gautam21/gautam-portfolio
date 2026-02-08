function CardComponent({ title, children }) {
  return (
    <div className="card shadow p-4 mb-4 h-100">
      {title && <h5 className="fw-bold mb-2">{title}</h5>}
      {children}
    </div>
  );
}

export default CardComponent;
