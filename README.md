# 📦 Express Upload Project

A simple Express.js backend for uploading product images, storing product data in MongoDB, and integrating with Cloudinary for image hosting. 🚀

---

## ✨ Features

- 🛒 Product CRUD (Create, Read, List)
- 📤 Image upload with `express-fileupload`
- ☁️ Cloudinary integration for image storage
- 🗄️ MongoDB with Mongoose for data persistence
- 🔒 Environment variable support with dotenv

---

## 🏗️ Project Structure

```
.
├── app.js
├── index.js
├── models/
│   └── productImage.model.js
├── routes/
│   └── product.route.js
├── controllers/
│   └── product.controller.js
├── database/
│   └── db.js
├── .env
└── README.md
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/MrImaginatory/fileUpload_udemy.git
   cd expressUpload
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file**  
   Add your environment variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

4. **Start the server**
   ```bash
   npm start
   ```

---

## 🛣️ API Endpoints

### ➕ Create Product

- **POST** `/prod/create`
- **Body:** `multipart/form-data`
  - `prodName` (string, required)
  - `prodDesc` (string, required)
  - `prodPrice` (number, required)
  - `prodImage` (file, required)
- **Response:** Created product object

### 📄 Get All Products

- **GET** `/prod/product`
- **Response:** Array of products

---

## 🧩 Packages Used

- [express](https://www.npmjs.com/package/express)
- [express-fileupload](https://www.npmjs.com/package/express-fileupload)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [cloudinary](https://www.npmjs.com/package/cloudinary)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [nodemon](https://www.npmjs.com/package/nodemon) (dev)

---

## 📝 License

MIT © Your Name

---

## 🙋‍♂️ Author

Made with ❤️ by Your Name
