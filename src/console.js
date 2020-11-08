const options = {
    key: 'key'
};
export function setOptions(opts) {
    for (let [key, value] of Object.entries(opts)) {
        options[key] = value;
    }
}
export function Console(exportAs) {
    return function (ctr) {
        return class extends ctr {
            constructor(...args) {
                super(...args);
                window[options.key][exportAs] = this;
            }
        };
    };
}
