import EmProcess from "./dependencies/EmProcess.mjs";
import LlvmBoxModule from "./dependencies/llvm/llvm-box.mjs";

export default class LlvmBoxProcess extends EmProcess {
    constructor(opts) {
        const wasmBinary = opts.FS.readFile("/wasm/llvm-box.wasm");
        super(LlvmBoxModule, { ...opts, wasmBinary });
    }
};
