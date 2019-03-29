function joinUrlPath(...fragments) {
    return fragments.reduce((_joined, _fragment) => {
        let joined = _joined;
        let fragment = _fragment;
        // Removing / from the beginning of fragment
        if (fragment.startsWith('/')) {
            fragment = fragment.substr(1);
        }
        // Removing / from the end of joined
        if (joined.endsWith('/')) {
            joined = joined.substr(0, joined.length - 1);
        }
        // Returning with / between
        return `${joined}/${fragment}`;
    }, '');
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
    joinUrlPath,
    capitalize
};
