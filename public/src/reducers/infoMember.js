export default function infoMember(state = {}, action) {
    let _state = Object.assign({}, state);
    switch(action.type) {
        case 'SET_MEMBER_INFO':
            return action.payload;
        case 'CHANGE_INFO':
            _state.script = action.payload;
            return _state;
        default:
            return state;
    }
}
