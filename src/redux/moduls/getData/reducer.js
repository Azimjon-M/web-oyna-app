const defaultState = {
    seaseon: 'yoz',
};

const reducerData = ( state = defaultState, {payload, type} ) => {

    switch (type) {
    case 'SET_DATA':
    return {state: payload}  
    
    default:
    return state.seaseon;
}
};

export default reducerData;