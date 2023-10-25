
import img1 from '../assets/assets/images/banner/1.jpg'
import img2 from '../assets/assets/images/banner/2.jpg'
import img3 from '../assets/assets/images/banner/3.jpg'
import img4 from '../assets/assets/images/banner/4.jpg'
import img5 from '../assets/assets/images/banner/5.jpg'
import img6 from '../assets/assets/images/banner/6.jpg'
const Banner = () => {

    const bannerTitle = <>
        <div className="absolute  h-[600px] rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]
        ">
            <div className='mx-20'>
                <h1 className='text-7xl font-bold text-white  mt-10'>Affordable  Price For Car  Servicing</h1>
                <p className='mt-10 text-white'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                <div className='mt-10'>
                    <button className="btn bg-transparent hover:bg-[#FF3811] text-white mr-5">Discover More</button>
                    <button className="btn bg-transparent hover:bg-[#FF3811] text-white ">Latest Project</button>
                </div>
            </div>
        </div>

    </>
    return (
        <div className="carousel w-full ">

            {/* slide 1 */}
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full h-[600px] rounded-xl" />

                <div className="absolute">
                    {bannerTitle}
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn btn-circle hover:bg-[#FF3811] mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle hover:bg-[#FF3811]">❯</a>
                </div>
            </div>

            {/* slide 2 */}
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full h-[600px] rounded-xl" />
                <div className="absolute ">
                    {bannerTitle}
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle hover:bg-[#FF3811] mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle hover:bg-[#FF3811]">❯</a>
                </div>
            </div>
            {/* slide 3 */}
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full h-[600px] rounded-xl" />
                <div className="absolute ">
                    {bannerTitle}
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle hover:bg-[#FF3811] mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle hover:bg-[#FF3811]">❯</a>
                </div>
            </div>

            {/* slide 4 */}
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full h-[600px] rounded-xl" />
                <div className="absolute ">
                    {bannerTitle}
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle hover:bg-[#FF3811] mr-5">❮</a>
                    <a href="#slide5" className="btn btn-circle hover:bg-[#FF3811]">❯</a>
                </div>
            </div>

            {/* slide 5 */}
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full h-[600px] rounded-xl" />
                <div className="absolute ">
                    {bannerTitle}
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle hover:bg-[#FF3811] mr-5">❮</a>
                    <a href="#slide6" className="btn btn-circle hover:bg-[#FF3811]">❯</a>
                </div>
            </div>

            {/* slide 6*/}
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full h-[600px] rounded-xl" />
                <div className="absolute ">
                    {bannerTitle}
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle hover:bg-[#FF3811] mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle hover:bg-[#FF3811]">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;