import { checkInitCompleted, updateGold, updateProducerList } from './functions.js'
export const handleKeyPress = (term, state) => {
    return (name, matches, data) => {
        //updateGold(term, state);
        const key = String.fromCharCode(data.code);
        if (key === 'g' || key === 'G') {
            state.gold++;
        }  
     state.producers.find(object => {
        if(object.id === Number(key) && state.gold >= object.cost) {
           ++object.count;
           state.gold -= object.cost;
           object.cost *= object.growthRate;
           state.productionRate += object.baseProduction;
             
           
    }})
    if(state.isInitCompleted === false){
        state.producers.forEach(object => {
            if(state.gold >= object.cost){
            checkInitCompleted(term, state);
            
            }
        });
        
       }
       if(state.isProducerListUpdated ===false){
        updateProducerList(term,state);   
}
       }

}

export const handleStateChange = (term,state) => {
    return () => {
        updateGold(term,state);
    }
}