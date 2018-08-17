import { ADD_MEMBER } from '../constant';
import { DELETE_MEMBER } from '../constant';
import { GET_MEMBERS } from '../constant';

// const reminder = (action) => {
//     return {
//         name: action.name,
//         id: Math.random()
//     }
// }

const reminders = (state = {}, action) => {
	switch(action.type) {
		case ADD_MEMBER: 
			console.log(action.member);
			return {
					...state,
					members: [
						...state.members,
						{username: action.member}
					]
			}
		case DELETE_MEMBER: 
			let members = state.members;
			let re = members.filter((s) => {
				return action.member !== s.username
			});
			return {
				...state,
				members: re
			}
		case GET_MEMBERS:
			return {
				...state,
				members: action.members
			};
		default: return state;
	}
}
export default reminders;