const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

function decompressFileSync(inputPath) {
    const compressedData = fs.readFileSync(inputPath);
    const decompressedData = zlib.brotliDecompressSync(compressedData);
    return decompressedData;
}
  
// Function to handle the Brotli file
export default async function importBrotliFile(filePath) {
    const decompressedData = decompressFileSync(filePath);
    
    // Here you can process the decompressed data as needed
    // For example, save it to a temporary file and return the file path
    const tempFilePath = path.join(__dirname, 'tempDecompressedFile');
    fs.writeFileSync(tempFilePath, decompressedData);
    return tempFilePath;
}