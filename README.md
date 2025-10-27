# 🛍️ MergeMarket
### A Full-Stack Online Marketplace for Local Vendors, Artisans, and Businesses
MergeMarket is a full-stack web application that bridges the gap between local markets and modern e-commerce platforms. It empowers individuals, artisans, and small businesses to create digital stores where they can display, manage, and sell their products easily — offering customers the convenience of discovering local products online.

# 🚀 Features
### 🧑‍💼 For Sellers
- Create and manage a personalized online store.
- Add, update, and delete products with images and descriptions.

### 🛒 For Buyers
- Browse products across multiple categories.
- Search and filter products by name, category
- View detailed product information and seller profiles.
- Add products to cart and make secure purchases.

### ⚙️ For Admins
- Manage all users, stores, and products.
- Handle reported issues and disputes.
- Monitor platform analytics and performance.

# 🧩 Tech Stack
### Frontend:
- ⚛️ React.js  
- 🎨 Tailwind CSS   
- 🌐 Axios  
- 🧭 React Router DOM 

### Backend:
- 🟢 Node.js & Express.js  
- 🍃 MongoDB + Mongoose  

### Other Tools:
- 🧪 Postman — API Testing  
- 💻 Git & GitHub — Version Control

# 🏗️ Project Structure
```
MergeMarket/
│
├── frontend/                # React frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Main app pages (Home, Shop, Cart, etc.)
│   │   ├── redux/           # State management files
│   │   └── utils/           # Helper functions
│   └── package.json
│
├── server/                  # Express backend
│   ├── config/              # Database & environment config
│   ├── controllers/         # Route controller logic
│   ├── models/              # Mongoose schemas
│   ├── routes/              # API route definitions
│   ├── middleware/          # Auth & error handling
│   └── server.js
│
├── .env                     # Environment variables
├── README.md
└── package.json
```

# 🧠 API Endpoints
### **Products**
| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/api/products` | Fetch all products |
| GET | `/api/products/:id` | Get a single product |
| POST | `/api/products` | Create new product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

### **Users**
| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/api/users/register` | Register new user |
| POST | `/api/users/login` | Authenticate user |
| GET | `/api/users/profile` | Get user profile |

### **Stores**
| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/api/stores` | Create new store |
| GET | `/api/stores/:id` | Get store details |
| PUT | `/api/stores/:id` | Update store info |
| DELETE | `/api/stores/:id` | Delete store |

# 💡 Future Enhancements
⭐ Product ratings and reviews
💳 Payment gateway integration (Paystack, Stripe, etc.)
💬 Real-time chat between buyers and sellers
🤖 AI-based product recommendations
📱 Mobile app version using React Native

# 🧑‍💻 Author
### Ayoola Ezekiel Oluwafemi
Full Stack Developer (in training) at Power Learn Project, July Cohort 2025

📍 Asaba, Delta State Nigeria
#### WhatsApp **+2348179264472 (ezekieloluwafemiayoola@mail.com)**

## ⭐ If you like this project, consider giving it a star on GitHub!
