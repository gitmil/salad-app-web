import { ADD_MEMBER } from '../constant';
import { DELETE_MEMBER } from '../constant';

const reminder = (action) => {
    return {
        name: action.name,
        id: Math.random()
    }
}

const reminders = (state = [], action = {}) => {
    switch(action.type) {
        case ADD_MEMBER: 
            return [
                ...state,
                reminder(action)
            ]
        case DELETE_MEMBER: 
            return state.filter((s) => {
                return action.name !== s.name
            });
            // return state.filter((s) => 
            //     action.text !== s.text
            // );

        default: return state;
    }
}
export default reminders;