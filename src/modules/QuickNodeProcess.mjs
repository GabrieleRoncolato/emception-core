import EmProcess from "./dependencies/EmProcess.mjs";
import QuickNodeModule from "./dependencies/quicknode/quicknode.mjs";

export default class QuickNodeProcess extends EmProcess {
    constructor(opts) {
        const wasmBinary = opts.FS.readFile("/wasm/quicknode.wasm");
        super(QuickNodeModule, { ...opts, wasmBinary });
    }
};
