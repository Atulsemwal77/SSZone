import hero from '../assets/image/wishlistbanner.jpg'
import Banner from '../componant/Banner'
import Card from '../componant/Card'
function Wishlist() {
  return (
    <div className='w-full flex flex-col gap-[30px]'>
        <Banner
          title="Wishlist"
          description="Keep track of the courses you love and save them for later.
          Easily access your favorite learning picks anytime, anywhere."
          image={hero}
        />

            <Card
              pageTitle="Our Wishlist"
              pageHeading="Save Your Favorite Courses"
              pageSubHeading="Keep all your favorite courses in one place and come back to learn anytime."
            />
    </div>
  )
}

export default Wishlist
