export const buildPathRegExp = (path) => {
    return new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/gmi, "(.+)") + "$");
}