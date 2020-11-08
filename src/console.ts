export interface Options {
    key: string;
}

const options: Options = {
    key: 'key'
};

export function setOptions(opts: Options) {
    for (let [key, value] of Object.entries(opts)) {
        options[key] = value;
    }
}

export function Console(exportAs: string) {
    return function <T extends { new (...args: any[]): {}}>(ctr: T) {
        return class extends ctr {
            constructor(...args: any[]) {
                super(...args);
                window[options.key][exportAs] = this;
            }
        }
    }
}
