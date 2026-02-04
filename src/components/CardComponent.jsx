import React from 'react';

const CardComponent = ({ title, content, icon, children, className = '' }) => {
  return (
    <div className={`card ${className}`}>
      {icon && <div className="card-icon">{icon}</div>}
      {title && <h3 className="card-title">{title}</h3>}
      {content && <p className="card-content">{content}</p>}
      {children}
    </div>
  );
};

export default CardComponent;
