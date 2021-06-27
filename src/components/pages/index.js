import React,{useState} from 'react'
import Hero from '../Hero'
import InfoSection from '../InfoSection'
import Navbar from '../Navbar'
import Numbers from '../Numbers'
import Sidebar from '../SideBar'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleSideBar=()=> setIsOpen(!isOpen)

    return (
        <>
            <Sidebar isOpen={isOpen}  toggleSideBar={toggleSideBar}/>
            <Navbar isOpen={isOpen} toggleSideBar={toggleSideBar}/>
            <Hero/>
            <InfoSection/>
            <Numbers/>
        </>
    )
}

export default Home
