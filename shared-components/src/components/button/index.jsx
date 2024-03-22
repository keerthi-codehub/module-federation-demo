import React from 'react';
import Button from 'react-bootstrap/Button';

function CustomButton({title}) {
  return (
      <Button variant="primary">{title || 'Title'}</Button>
  );
}

export default CustomButton;
