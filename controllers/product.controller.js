import cloudinary from 'cloudinary';
import dotenv from 'dotenv/config';
import productSchema from '../models/productImage.model.js';
import asyncWrapper from '../utils/asyncWrapper.js'
import path from 'path';
import fs from 'fs'

const dirname = import.meta.dirname;

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

const createProduct = asyncWrapper( async(req,res)=>{
    const {prodName,prodDesc,prodPrice} = req.body;
    const prodImage = req.files.prodImage;

    try {
    const fileExt = prodImage.name.split('.').pop();

    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    if (!allowedExtensions.includes(fileExt) || !prodImage.mimetype.startsWith('image')) {
        return res.status(400).json({ message: 'Invalid file type! Only images are allowed.' });
    }

    const uploadFolder = path.join(dirname, `../uploads`);

    if (!fs.existsSync(uploadFolder)) {
        fs.mkdirSync(uploadFolder, { recursive: true });
    }

    const uploadResult = await new Promise((resolve, reject) => {
        const stream = cloudinary.v2.uploader.upload_stream(
            {
                folder: 'product_images', // Optional: specify folder for organization in Cloudinary
            },
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            }
        );

        // Use the `Buffer` from `prodImage.data` to upload the file directly
        stream.end(prodImage.data);
    });

        // Create new product in database
        const product = new productSchema({
            productName: prodName,
            description: prodDesc,
            price: prodPrice,
            imagePath: uploadResult.secure_url, // Store the URL of the uploaded image
        });

        const savedProd = await product.save();

        if (!savedProd) {
            return res.status(501).json({ message: 'Error creating new Product. Please try again later.' });
        }

        return res.status(201).json({ message: 'Created Product Successfully', savedProd });
    } catch (error) {
        console.error('Cloudinary upload error:', error);
        return res.status(500).json({ message: 'Error uploading image to Cloudinary' });
    }
})

const getAllProd = asyncWrapper(async(req,res)=>{
    const getProds = await productSchema.find();

    if( !getProds || getProds.length <= 0 ){
        return res.status(404).json({message:"No Product Found Please Add One"})
    }

    return res.status(200).json({message:"Products Founded",getProds,totalProducts:getProds.length})
})

export {createProduct, getAllProd};