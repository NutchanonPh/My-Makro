const cloudinary = require("cloudinary").v2;

cloudinary.config({ 
    cloud_name: 'dbdjdr9ku', 
    api_key: '464728193529336', 
    api_secret: process.env.CLOUDINARY_SECRET, 
  });

module.exports = cloudinary;