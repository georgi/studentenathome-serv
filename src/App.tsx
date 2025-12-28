import { useKV } from '@github/spark/hooks'
import { Toaster } from '@/components/ui/sonner'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { HomePage } from '@/components/pages/HomePage'
import { SolutionsPage } from '@/components/pages/SolutionsPage'
import { AboutPage } from '@/components/pages/AboutPage'
import { ContactPage } from '@/components/pages/ContactPage'
import { useEffect } from 'react'

function App() {
  const [currentPage, setCurrentPage] = useKV<string>('current-page', 'home')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage])

  const handleNavigate = (page: string) => {
    setCurrentPage(page)
  }

  const renderPage = () => {
    const page = currentPage || 'home'
    
    switch (page) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />
      case 'solutions':
        return <SolutionsPage onNavigate={handleNavigate} />
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />
      case 'contact':
        return <ContactPage />
      default:
        return <HomePage onNavigate={handleNavigate} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage || 'home'} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
      <Toaster position="top-center" />
    </div>
  )
}

export default App