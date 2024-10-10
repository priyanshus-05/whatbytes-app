// app/layout.jsx
import '../styles/globals.css'
import '../styles/SkillTestPage.css';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="main-layout">
          <Sidebar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
