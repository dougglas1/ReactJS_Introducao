import React from 'react';
import PropTypes from 'prop-types';

// poderia também ser no tech o props
// e carregar como props.tech
function TechItem({ tech, onDelete }) {
  return (
    <li>
        {tech}
        <button onClick={onDelete} type="button">Remover</button>
    </li>
  );
}

// Preenche as propriedades caso não seja informado
TechItem.defaultProps = {
  tech: 'Oculto'
}

TechItem.prototype = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired
}

export default TechItem;