import BlogList from "./components/BlogList";

function App() {
  return (
    <>
      <div className="bg-light min-vh-100">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
          <div className="container">
            <a className="navbar-brand fw-bold" href="#">Dev Blog</a>
          </div>
        </nav>

        {/* Blog Content */}
        <div className="container mt-5">
          <BlogList />
        </div>

        {/* Footer */}
        <footer className="text-center py-4 mt-5 bg-dark text-light">
          <p className="mb-0">© 2025 Dev Blog | Built with React + Bootstrap</p>
        </footer>
      </div>
    </>
  )
}

export default App
