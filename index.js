window.pleaseDont = (eventActions, options) => {
    if (!Array.isArray(eventActions) || !eventActions.length) {
        throw new Error('Event actions must be an array of strings');
    }
    // ...
};
