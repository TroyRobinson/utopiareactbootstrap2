import * as React from 'react';

export function Card({ children, style, ...rest }) {
  return <div className="card" style={style} {...rest}>{children}</div>;
}
Card.Img = function CardImg(props) {
  return <img className="card-img-top" {...props} />;
};
Card.Body = function CardBody({ children, ...rest }) {
  return <div className="card-body" {...rest}>{children}</div>;
};
Card.Title = function CardTitle({ children, ...rest }) {
  return <h5 className="card-title" {...rest}>{children}</h5>;
};
Card.Text = function CardText({ children, ...rest }) {
  return <p className="card-text" {...rest}>{children}</p>;
};

export function Button({ children, variant, ...rest }) {
  const className = `btn btn-${variant}` + (rest.className ? ` ${rest.className}` : '');
  return <button className={className} {...rest}>{children}</button>;
}
