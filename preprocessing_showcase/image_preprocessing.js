/**
 * IMAGE PREPROCESSING & OCR MODULE
 * --------------------------------
 * This file contains the logic used to pre-process images and extract text
 * using Optical Character Recognition (OCR).
 */

// 1. IMAGE READING & PRE-PROCESSING
// ---------------------------------
async function processDocumentOCR(imageFile) {
    // Stage 1: Preprocess Image (Improve Contrast & Resolution)
    const processedImage = await preprocessImage(imageFile);

    return new Promise((resolve, reject) => {
        try {
            // Stage 2: Initialize Tesseract Engine
            Tesseract.createWorker('eng').then(async worker => {

                // Stage 3: Configure Whitelist (Only allow relevant chars)
                await worker.setParameters({
                    tessedit_char_whitelist: '0123456789%ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.:,-/ ',
                });

                // Stage 4: Recognize Text from Preprocessed Image
                const { data } = await worker.recognize(processedImage);

                await worker.terminate();
                resolve({ text: data.text, confidence: data.confidence });
            });
        } catch (error) {
            reject(error);
        }
    });
}

// 2. IMAGE ENHANCEMENT ALGORITHM
// ------------------------------
// This function improves OCR accuracy by making text pop out.
function preprocessImage(file) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            // A. UPSCALING
            // Resize small images to at least 1000px width for better clarity
            let width = img.width;
            let height = img.height;
            const minWidth = 1000;
            if (width < minWidth) {
                const scaleFactor = minWidth / width;
                width = width * scaleFactor;
                height = height * scaleFactor;
            }
            canvas.width = width;
            canvas.height = height;

            ctx.drawImage(img, 0, 0, width, height);

            // B. IMG PROCESSING (Pixel by Pixel)
            const imgData = ctx.getImageData(0, 0, width, height);
            const data = imgData.data;

            for (let i = 0; i < data.length; i += 4) {
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];

                // 1. Grayscale Conversion (Luminocity Formula)
                const gray = 0.2126 * r + 0.7152 * g + 0.0722 * b;

                // 2. Binarization / Thresholding
                // Converts gray pixels to either pure Black or White.
                // This removes shadow/noise and leaves clear text.
                const val = gray > 140 ? 255 : 0;

                data[i] = val;
                data[i + 1] = val;
                data[i + 2] = val;
            }

            ctx.putImageData(imgData, 0, 0);
            resolve(canvas.toDataURL('image/jpeg'));
        };
        img.src = URL.createObjectURL(file);
    });
}
