import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "react-router-dom"

const HomeSlider = (props) => {

    const { posts } = props

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return(
        <Slider {...settings} className="max-w-4xl mx-auto">
            {posts.map(post => (
                <Link to={"/"+post.slug}>
                <img src={post.featuredImage.node.sourceUrl} className={`h-[250px] bg-base-200 rounded-xl w-full object-cover`}>
    
                </img>
                </Link>
            ) )}
        </Slider>
    )
}

export default HomeSlider