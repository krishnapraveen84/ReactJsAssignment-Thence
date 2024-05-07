import './index.css'
import AskQnsComp from '../AskQns'
import Footer from '../Footer'
import {Link} from 'react-router-dom'




const Home = () => (
    <div className='bg-container'>
        <nav className='nav-bar'>
            <img className='logo' src='https://res.cloudinary.com/dnwwyvtjx/image/upload/v1715003015/jc5w5ydzmaj6tcmm1dhm.png' alt='logo image' />
            <div className='nav-items'>
                <Link to='/RegisterForm' className="link"><button className='btn'>Get Projects</button></Link>
                <button className='btn'>Onboard Talent</button>
            </div>
        </nav>
        <div className='title-container'>
            <h3 className='heading-3'>Success stories</h3>
            <p className='paragraph-1'>Every success journey we’ve encountered.</p>
        </div>
        <div className='details-container'>
            <div className='frames-container'>
                
                <div className='card'>
                    <img className='spark-img' src='https://res.cloudinary.com/dnwwyvtjx/image/upload/v1715014160/lgohrotbvqo4peqyh6sl.png' />
                    <h2 className='percentage'>40%</h2>
                    <p className='card-para'>Achieved reduction in project execution time by optimising team availability</p>
                </div>
                <div className='deployment-card'>
                    <img className='deploy-img' src='https://res.cloudinary.com/dnwwyvtjx/image/upload/v1715016384/mgmoewk5wszvvqiriurl.png' />
                    <div className='group-div'>
                        <h2 className='grp-heading'>10 DAYS</h2>
                        <p className='grp-para'>Staff Deployment</p>
                    </div>
                </div>
                <div className='expense-card'>
                    <h2 className='amount'>$0.5<span className='million'>MILLION</span></h2>
                    <p className='expense-para'>Reduced client expenses by saving on hiring and employee costs.</p>
                </div>
                <img className='girl-img' src='https://res.cloudinary.com/dnwwyvtjx/image/upload/v1715005318/tdkpao0a5ps3ifg2xyg8.png' />
            </div>
            <div className='explore-more-container'>

                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                    
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <p className='carousel-text'>Enhance fortune 50 company’s insights teams research capabilities</p>
                        </div>
                        <div class="carousel-item">
                            <p className='carousel-text'>Achieved reduction in project execution time by optimising team availability</p>
                        </div>
                        <div class="carousel-item">
                        <p className='carousel-text'>Reduced client expenses by saving on hiring and employee costs.</p>
                        </div>
                    </div>
                    <button className='explore-btn'>
                        
                            <p className='explore-para'>Explore More</p>
                            <img className='arrow' src='https://res.cloudinary.com/dnwwyvtjx/image/upload/v1715020536/l0qiedt7jryipmv0b2gn.png' />
                        
                        </button>
                </div>
            </div>
        </div>
                
        <div className='qns-main-container'>
            <AskQnsComp />
        </div>
        <Footer />
    </div>
)
export default Home