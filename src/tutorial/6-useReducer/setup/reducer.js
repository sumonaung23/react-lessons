export function reducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        const newPeople = [...state.people, action.payLoad];
        return {
            ...state,
            people: newPeople,
            isModalOpen: true,
            modalContent: 'item added'
        };
    }
    if (action.type === 'NO_VALUE') {
        return {
            ...state,
            isModalOpen: true,
            modalContent: 'please enter value'
        };
    }
    if (action.type === 'CLOSE_MODAL') {
        return {
            ...state,
            isModalOpen: false
        };
    }
    if (action.type === 'REMOVE_ITEM') {
        const newPeople = state.people.filter((person) => person.id !== action.payLoad);
        return {
            ...state,
            people: newPeople
        };
    }

    // if none of them matches, throw the error
    throw new Error('no matching action type');
}