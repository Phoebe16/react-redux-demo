const setInfoMember = (payload) => {
    return {
        type: 'SET_MEMBER_INFO',
        payload
    }
};

const changeInfo = (payload) => {
    return {
        type: 'CHANGE_INFO',
        payload
    }
};

module.exports = {
    setInfoMember,
    changeInfo
};
