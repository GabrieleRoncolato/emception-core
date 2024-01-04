import EmProcess from "./dependencies/EmProcess.mjs";
import BinaryenBoxModule from "./dependencies/binaryen/binaryen-box.mjs";

export default class BinaryenBoxProcess extends EmProcess {
    constructor(opts) {
        const wasmBinary = opts.FS.readFile("/wasm/binaryen-box.wasm");
        super(BinaryenBoxModule, { ...opts, wasmBinary });
    }
};
