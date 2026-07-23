# 🗳️ E-Poll - Online Voting System

A modern, user-friendly web application for conducting secure online elections. E-Poll provides separate interfaces for administrators and voters, enabling efficient and transparent voting processes.

## 📋 Overview

E-Poll is a **React-based electronic polling system** designed to streamline election management and voting. The platform supports multiple roles with distinct features:

- **Admins**: Create elections, manage candidates, handle student records, and view comprehensive results
- **Voters**: Participate in elections, view voting history, and check election results

## ✨ Key Features

### 🔐 Authentication
- Separate sign-up and sign-in flows for **Admins** and **Voters**
- Secure user management
- Role-based access control

### 👨‍💼 Admin Dashboard
- **Election Management**: Create and manage elections
- **Candidate Management**: Add and view candidates for elections
- **Student Management**: Manage eligible voters
- **Posts Management**: Organize election positions/posts
- **Branch Management**: Handle organizational branches
- **Result Analysis**: View comprehensive election results with analytics

### 🗳️ Voter Dashboard
- **Election Participation**: Browse and participate in ongoing elections
- **Voting History**: Track voting activities
- **Results Viewing**: Check official election results

### 📊 Results & Analytics
- Admin view: Comprehensive election statistics and candidate performance
- Voter view: Election results and outcome tracking

## 🏗️ Project Structure

```
e-poll/
├── src/
│   ├── Assets/              # Images, icons, and media files
│   ├── Components/          # Reusable React components
│   │   ├── Cards/           # Card-based UI components
│   │   ├── Common/          # Common/shared components
│   │   ├── Form/            # Form components
│   │   ├── Forms/           # Form-related components
│   │   ├── GraphicalElements/  # Charts and graphs
│   │   └── Layout/          # Layout components
│   ├── Config/              # Configuration files
│   ├── Hooks/               # Custom React hooks
│   ├── Routes/              # Page components and routing
│   │   ├── Home/            # Home page and authentication
│   │   ├── Admin/           # Admin dashboard routes
│   │   └── Voter/           # Voter dashboard routes
│   ├── Services/            # API services and business logic
│   ├── Styles/              # CSS stylesheets
│   ├── App.js              # Main App component with routes
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
└── README.md              # Project documentation
```

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 18.2** | UI framework |
| **React Router DOM 6.4** | Client-side routing |
| **Create React App** | Build tooling & development environment |
| **CSS** | Styling (28.8% of codebase) |
| **HTML** | Markup (2% of codebase) |

**Language Composition:**
- JavaScript: 69.2%
- CSS: 28.8%
- HTML: 2%

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abhinandps/e-poll.git
   cd e-poll
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The application will open at `http://localhost:3000`

### Available Scripts

#### Development
```bash
npm start
```
- Runs the app in development mode
- Opens http://localhost:3000 in your browser
- Page reloads on code changes
- Shows lint errors in console

#### Build for Production
```bash
npm run build
```
- Builds the app for production in the `build/` folder
- Optimized bundle with minified files and hashes
- Ready for deployment

#### Testing
```bash
npm test
```
- Launches the test runner in interactive watch mode
- Uses testing-library/react for component testing

## 📱 Application Routes

### Home/Landing Page
- **`/`** - Landing page with sign-in and sign-up options

### Authentication Routes
- **`/admin/sign-up`** - Admin registration
- **`/admin/sign-in`** - Admin login
- **`/voter/sign-up`** - Voter registration
- **`/voter/sign-in`** - Voter login

### Voter Dashboard
- **`/dashboard/voter/dashboard`** - Main voter dashboard
- **`/dashboard/voter/history`** - Voting history
- **`/dashboard/voter/result`** - Election results

### Admin Dashboard
- **`/dashboard/admin/dashboard`** - Main admin dashboard
- **`/dashboard/admin/election`** - Create and manage elections
- **`/dashboard/admin/view-candidates`** - View election candidates
- **`/dashboard/admin/students`** - Manage eligible voters
- **`/dashboard/admin/posts`** - Manage election positions
- **`/dashboard/admin/branches`** - Manage organization branches
- **`/dashboard/admin/result`** - View detailed results

## 🎨 UI Components

The application features a comprehensive component library including:

### Component Categories
- **Cards**: Data display and selection cards
- **Forms**: Input forms for various operations
- **Layout**: Page structure and navigation components
- **Graphical Elements**: Charts, graphs, and data visualization
- **Common**: Reusable shared components (buttons, modals, etc.)

## 🔒 Security Features

- Role-based access control (Admin vs Voter)
- Separate authentication pathways
- Secure user sessions
- Protected dashboard routes

## 📦 Dependencies

Key dependencies:
- `react`: Core UI library
- `react-dom`: DOM rendering
- `react-router-dom`: Routing and navigation
- `react-scripts`: Build and development tools
- `@testing-library/react`: Component testing
- `web-vitals`: Performance monitoring

## 🚧 Development Workflow

1. **Create feature branches** for new features
2. **Follow component structure** in `src/Components/`
3. **Use services** for API calls in `src/Services/`
4. **Organize routes** in `src/Routes/`
5. **Style components** with CSS files in `src/Styles/`
6. **Test thoroughly** before submitting PRs

## 📖 Learn More

- [React Documentation](https://reactjs.org/) - Learn React concepts
- [React Router Documentation](https://reactrouter.com/) - Client-side routing guide
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started) - Build tool reference

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# Use a different port
PORT=3001 npm start
```

### Build Fails with Minification Error
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear cache: `npm cache clean --force`

### Dependencies Issues
```bash
npm install --legacy-peer-deps
```

## 📝 License

This project is private. For licensing inquiries, contact the repository owner.

## 👤 Author

**Abhinandps**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

**Made with ❤️ by Abhinandps**
