
import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner'
import SocialMedia from '../../Components/SocialMedia/SocialMedia'
import OurEquep from '../../Components/OurEqp/OurEquep'


const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <SocialMedia />
   <div className=' my-8'>
   <OurEquep />
   </div>
    </div>
  )
}

export default Home