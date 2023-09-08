import React, { useState } from 'react';

export default function PriorityButtons({ onPrioritySelected, priorityValue }) {
  const [selectedPriority, setSelectedPriority] = useState(priorityValue);
  const styles = {
    selected: 'container rounded text-center text-white border-2 border-indigo-500 bg-indigo-500',
    unselected: 'container rounded text-center bg-white border-2 border-black'
  }

  const handlePriorityClick = (priority) => {
    setSelectedPriority(priority);
    onPrioritySelected(priority);
  };

  return (
    <div className='mt-4'>
      <h3>Selecione a prioridade:</h3>
      <div className="grid grid-cols-4">
        <div className="mr-2 p-1">
            <button className={selectedPriority === 'baixa' ? styles.selected : styles.unselected} onClick={() => handlePriorityClick('baixa')}>
                Baixa
            </button>
        </div>
        <div className="mr-2 p-1">
            <button
                className={selectedPriority === 'media' ? styles.selected : styles.unselected}
                onClick={() => handlePriorityClick('media')}
            >
                Média
            </button>
        </div>
        <div className="p-1">
            <button
                className={selectedPriority === 'alta' ? styles.selected : styles.unselected}
                onClick={() => handlePriorityClick('alta')}
            >
                Alta
            </button>
        </div>
      </div>
    </div>
  );
}

