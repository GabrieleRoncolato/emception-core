import * as fs from 'fs';
import brotliPromise from 'brotli-wasm';
import * as path from 'path'

function decompressFileSync(inputPath, brotli) {
    const compressedData = fs.readFileSync(inputPath);

    const decompressedData = brotli.decompress(compressedData);
    return decompressedData;
}
  
// Function to handle the Brotli file
export default async function importBrotliFile(filePath) {

    const brotli = await brotliPromise;
    const decompressedData = decompressFileSync(filePath, brotli);
    
    // Here you can process the decompressed data as needed
    // For example, save it to a temporary file and return the file path
    const tempFilePath = path.join(__dirname, 'tempDecompressedFile');

    fs.writeFileSync(tempFilePath, decompressedData);
    return tempFilePath;
}