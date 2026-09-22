# React Posts Manager

A beginner-friendly React application for managing posts using the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) REST API.

The project demonstrates core React concepts such as components, state management, effects, routing, API requests, forms, CRUD operations, search, loading states, and error handling.

> **Note:** JSONPlaceholder is a fake REST API designed for development and learning. Create, update, and delete requests are simulated and are not permanently stored.

## Features

* View all posts
* Search posts by title or body
* View a single post
* Create a new post
* Edit an existing post
* Delete a post
* Delete confirmation
* Loading states
* Error handling
* Form validation
* Disabled buttons during API requests
* 404 page for invalid routes
* Client-side routing with React Router

## Tech Stack

* React
* JavaScript
* Vite
* React Router
* Fetch API
* JSONPlaceholder REST API
* CSS

## Project Structure

```text
src/
├── App.jsx
├── Posts.jsx
├── PostCard.jsx
├── PostDetail.jsx
├── CreatePost.jsx
├── UpdatePost.jsx
├── NotFound.jsx
├── main.jsx
└── index.css
```

## Routes

| Route               | Description             |
| ------------------- | ----------------------- |
| `/`                 | Home page               |
| `/posts`            | Display all posts       |
| `/posts/:id`        | Display a single post   |
| `/posts/create`     | Create a new post       |
| `/posts/:id/update` | Update an existing post |
| `*`                 | 404 Not Found page      |

## API

This project uses JSONPlaceholder:

```text
https://jsonplaceholder.typicode.com/
```

### Endpoints Used

**Get all posts**

```http
GET /posts
```

**Get a single post**

```http
GET /posts/:id
```

**Create a post**

```http
POST /posts
```

**Update a post**

```http
PUT /posts/:id
```

**Delete a post**

```http
DELETE /posts/:id
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/adeeltahirdev/Posts
```

### 2. Navigate into the project

```bash
cd <project-folder>
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will provide a local development URL, usually:

```text
http://localhost:5173
```

## What I Practiced

This project was built to practice practical React development concepts, including:

* Functional components
* `useState`
* `useEffect`
* Props
* Controlled form inputs
* Conditional rendering
* Array methods such as `map()` and `filter()`
* Fetching data from a REST API
* Handling HTTP and network errors
* Loading and submitting states
* Form validation
* Dynamic routes
* URL parameters with `useParams()`
* Navigation with `useNavigate()`
* Links with React Router
* CRUD operations
* Basic application structure

## Important Note About JSONPlaceholder

JSONPlaceholder does not provide a real persistent database.

For example, when a post is created or updated, the API returns a simulated response. The change will not actually be saved permanently on the server.

This makes JSONPlaceholder useful for practicing frontend API integration without needing to build a backend.

## Future Improvements

Possible improvements for a production-style version could include:

* Pagination
* Better form components
* Reusable API service functions
* Toast notifications
* Authentication
* Persistent backend storage
* User-specific posts
* Improved UI design
* Responsive layouts
* Environment variables for API configuration

## License

This project was created for learning and practice purposes.
