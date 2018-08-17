import { ADD_MEMBER } from '../constant';
import { DELETE_MEMBER } from '../constant';
import { GET_MEMBERS } from '../constant';
import fire from "../config/Fire";

const writeUserData = (id, name) => fire.database().ref('members/'+ id).set({ username: name });
export const addMember = name => {
	writeUserData(fire.auth().currentUser.uid, name);
	return {
		type: ADD_MEMBER,
		member: name,
	}
}

const deleteUserData = id => fire.database().ref('members/' + id + '/').remove();
export const deleteMember = name => {
	deleteUserData(fire.auth().currentUser.uid, name);
	return {
		type: DELETE_MEMBER,
		member: name,
	}
}

export const getMember = (refresh) => {
	const members = []; //{username: 'aa'}, {username: 'bb'}
	fire.database()
		.ref('/members/')
		.once('value')
		.then(snapshot => {
			snapshot.forEach(child => {
				console.log(child.val());
				members.push(child.val());
				refresh();
			});
		});

	return {
		type: GET_MEMBERS,
		members
	}
}

//   export const getMember = () => async dispatch => {
// 	const members = [];
//     fire.database().ref('/members/').on("value", snapshot => {
// 		snapshot.forEach(child => {
// 			members.push(child.val());
// 		})
// 		dispatch({
// 			type: GET_MEMBERS,
// 			members
//       });
//     });
//   };

// export const addToDo = newToDo => async dispatch => {
//     todosRef.push().set(newToDo);
//   };
  
//   export const completeToDo = completeToDoId => async dispatch => {
//     todosRef.child(completeToDoId).remove();
//   };
  
//   export const fetchToDos = () => async dispatch => {
//     todosRef.on("value", snapshot => {
//       dispatch({
//         type: FETCH_TODOS,
//         payload: snapshot.val()
//       });
//     });
//   };