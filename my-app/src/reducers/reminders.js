import { ADD_MEMBER } from '../constant';
import { DELETE_REMINDER } from '../constant';

const reminder = (action) => {
    return {
        text: action.text,
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
        case DELETE_REMINDER: 
            return state.filter((s) => {
                return action.text !== s.text
            });
            // return state.filter((s) => 
            //     action.text !== s.text
            // );

        default: return state;
    }
}
export default reminders;