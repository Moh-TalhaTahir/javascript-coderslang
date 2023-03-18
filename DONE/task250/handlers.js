import {
    updateGold,
    checkInitCompleted,
    updateProducerList,
    formatNumber,
  } from './functions.js';
  
  export const handleKeyPress = (term, state) => {
    return (name, matches, data) => {
      const key = String.fromCharCode(data.code);
      if (key === 'G' || key === 'g') {
        state.gold++;
      } else {
        for (let i = 0; i < state.producers.length; i++) {
          if (key === String(state.producers[i].id)) {
            state.gold -= state.producers[i].cost;
            state.producers[i].cost *= state.producers[i].growthRate;
            state.producers[i].count++;
            const productionRate =
              (state.producers[i].baseProduction / 1000) * state.tickSpeed;
            state.productionRate += productionRate;
            term.moveTo(25, 3);
            const speed = (state.productionRate * 1000) / state.tickSpeed;
            term.green(formatNumber(speed));
            term.green(formatNumber(state.gold));
          }
        }
      }
  
      if (!state.isInitCompleted) {
        for (let i = 0; i < state.producers.length; i++) {
          if (state.gold >= state.producers[i].cost) {
            state.isInitCompleted = true;
            checkInitCompleted(term, state);
          }
        }
      }
  
      if (!state.isProducerListUpdated) {
        updateProducerList(term, state);
      }
    };
  };
  
  export const handleStateChange = (term, state) => {
    return () => {
      updateGold(term, state);
    };
  };