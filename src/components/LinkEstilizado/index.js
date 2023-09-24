import React from 'react';

const LinkEstilizado = React.forwardRef(({ onClick, href, children }, ref) => {
  return (
    <div href={href} onClick={onClick} ref={ref} style={{ color: 'red' }}>
      {children}
    </div>
  );
});

export default LinkEstilizado;