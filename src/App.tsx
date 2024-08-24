import { useEffect, useState} from 'react'
import Navbar from "@/components/navbar"
import Home from "@/components/home"
import { SelectedPage } from '@/shared/types';
import Benefits from '@/components/benefits';
import OurClasses from '@/components/ourclasses';
import ContactUs from './components/contactus';
import Footer from '@/components/footer';


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  const [isTopPage, setIsTopPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0 ) {
        setIsTopPage(true);
        setSelectedPage(SelectedPage.Home);
      }

      if (window.scrollY !== 0 ){
        setIsTopPage(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className='app'>
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} isTopPage={isTopPage} />
        <Home setSelectedPage={setSelectedPage} />
        <Benefits setSelectedPage={setSelectedPage} />
        <OurClasses setSelectedPage={setSelectedPage} />
        <ContactUs setSelectedPage={setSelectedPage} />
        <Footer />
      </div>
    </>
  )
}

export default App
