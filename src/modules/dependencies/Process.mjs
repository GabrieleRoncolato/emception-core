export default class Process {
    constructor({
        onrunprocess = () => ({ returncode: 1, stdout: "", stderr: "Not implemented" }),
        onprint = () => { console.log("test2"); },
        onprintErr = () => {},
    }) {
        Object.assign(this, { onrunprocess, onprint, onprintErr });
    }

    onrunprocess = () => {};
    onprint = () => { console.log("test3"); };
    onprintErr = () => {};

    get FS() {
        throw new Error("unimplemented");
    }

    get cwd() {
        return this.FS.cwd();
    }

    set cwd(cwd) {
        this.FS.chdir(cwd);
    }
};
