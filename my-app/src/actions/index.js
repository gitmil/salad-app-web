import { ADD_MEMBER } from '../constant';
import { DELETE_REMINDER } from '../constant';

export const addMember = (text) => {
    return {
        type: ADD_MEMBER,
        text,
    }
}

export const deleteReminder = (text) => {
    return {
        type: DELETE_REMINDER,
        text,
    }
}