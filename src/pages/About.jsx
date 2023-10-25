import person from '../assets/assets/images/about_us/person.jpg';
import parts from '../assets/assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
             <div className='lg:w-1/2 relative'>
             <img src={person} className="max-w-sm rounded-lg shadow-2xl" />
             <img src={parts}  className='w-80 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white' />
             </div>
                <div className='lg:w-1/2 mt-20'>
                 <h3 className='text-[#FF3811] '>About Us</h3>
                    <h1 className="text-4xl font-bold mt-3">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-primary mt-5">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;