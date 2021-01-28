const defaulState = [
    {
        id: 1,
        text: 'hola'
    }
];

function reducer(state = defaulState, action){
    switch (action.type){
        case 'RESULTS': {
            return [
                {
                    id: 2,
                    text: 'RESULTS'
                }
            ]
        }
        default:
            return state;
    }
}

export default reducer;