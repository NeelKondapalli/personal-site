import { SpacemanCanvas } from "./index";
const Hero = ({ scrollContainer }) => {
    return (
       <div id = "hero" className = "parallax">
            <h1>Hero</h1>
            <SpacemanCanvas scrollContainer = {scrollContainer} />
            <p>Welcome to my page!</p>
            {/* <SpacemanCanvas /> */}
       </div> 
    );
}

export default Hero