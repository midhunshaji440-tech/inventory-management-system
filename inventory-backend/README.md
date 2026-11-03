
# Inventory Management System API

A RESTful Inventory Management API built using Node.js and Express.js.

## Features

- Get all inventory items
- Get an item by ID
- Add new inventory items
- Update existing inventory items
- Delete inventory items
- Filter items by category
- Filter by quantity
- Search items by name
- Input validation
- Centralized error handling

## Technologies Used

- Node.js
- Express.js
- JavaScript
- dotenv
- CORS
- Nodemon
- Postman

## Project Structure

```text
inventory-backend/
│
├── controllers/
│   └── inventoryController.js
│
├── middleware/
│   ├── validation.js
│   └── errorHandler.js
│
├── model/
│   └── inventoryData.js
│
├── routes/
│   └── inventoryRoutes.js
│
├── index.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Installation

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

Server runs at:

`http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/inventory | Get all items |
| GET | /api/inventory/:id | Get item by ID |
| POST | /api/inventory | Add an item |
| PUT | /api/inventory/:id | Update an item |
| DELETE | /api/inventory/:id | Delete an item |

## Query Parameters

- `category` – Filter by category
- `quantity` – Match exact quantity
- `minQuantity` – Minimum quantity
- `maxQuantity` – Maximum quantity
- `search` – Search by item name

Example:

`/api/inventory?category=Electronics`

`/api/inventory?search=laptop`

## Error Handling

The API includes input validation and centralized error handling for invalid requests and missing items.

## Data Storage

This project uses an in-memory JavaScript array. Data resets when the server restarts.

## Author

Your Name
