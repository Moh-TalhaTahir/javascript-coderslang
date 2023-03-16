export const init = (term) => {
    term('Welcome to the mining game!');
    term.clear();
    term.hideCursor();
    term.grabInput();
}

export const updateGold = (term,state) => {
    term.moveTo(25, 2);
    term.eraseLineAfter();
    term.bold.yellow(state.gold + "   ");
    state.gold += state.productionRate;
}
export const checkInitCompleted = (term, state) => {
    term.clear();
    term.moveTo(25, 2);
    term('You can purchase producers by clicking the number button (1, 2, 3, ...)');
    term.moveTo(25, 2);
    term.eraseLineAfter();
    term("GOLD: ${state.gold}");
    term.moveTo(25, 2);
    term.eraseLineAfter();
    term("PRODUCTION RATE: ${state.productionRate}");
    state.isProducerListUpdated = false;
  } 

export const updateProducerList = (term,state) => {
    state.producers.forEach((object) => {
        if(object.count > 0){
            term.moveTo(1,5);
            term(object.title + `: ${object.count} | Production per second: ${object.baseProduction.toFixed(1)} | Cost: ${object.cost.toFixed(1)}`);
        }  
    }
    )
    state.producers.forEach((object) => {
        if(object.count === 0){
            term.moveTo(1,5);
            term(object.title + `: ${object.count} | Production per second: ${object.baseProduction.toFixed(1)} | Cost: ${object.cost.toFixed(1)}`);
    };
    
    });
    state.isProducerListUpdated = true;
}