/*
import * as Comlink from "comlink";
//import EmceptionWorker from "./emception.worker.js";

const emception = Comlink.wrap(new EmceptionWorker());


export const compile = async () => {
    try {
        await emception.fileSystem.writeFile("/working/main.cpp", editor.getValue());
        const cmd = `em++ ${flags.value} -sSINGLE_FILE=1 -sMINIFY_HTML=0 -sUSE_CLOSURE_COMPILER=0 main.cpp -o main.html`;
        const result = await emception.run(cmd);
        if (result.returncode == 0) {
            console.log("success");
        } 
        else {
            console.log("failure");
        }
    } catch (err) {
        console.log("failure");
    }
}
*/

import FileSystem from "./modules/FileSystem.mjs";

import LlvmBoxProcess from "./modules/LlvmBoxProcess.mjs";
import BinaryenBoxProcess from "./modules/BinaryenBoxProcess.mjs";
import Python3Process from "./modules/Python3Process.mjs";
import NodeProcess from "./modules/QuickNodeProcess.mjs";

import root_pack from "./modules/root_pack.mjs";
//import lazy_cache from "emception/lazy-cache/index.mjs";

