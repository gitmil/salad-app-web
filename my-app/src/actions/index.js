import { ADD_MEMBER } from '../constant';
import { DELETE_MEMBER } from '../constant';

export const addMember = (name) => {
    return {
        type: ADD_MEMBER,
        name,
    }
}

export const deleteMember = (name) => {
    return {
        type: DELETE_MEMBER,
        name,
    }
}