import Image from "next/image"
import Wrapper from "./Wrapper"

const FtImages = () => {
    return (
        <div id='ft-images'>
            <Wrapper>
                <div className="image blue-glow-border">
                    <Image src='/images/splash-img-1.jpg' alt="Outdoor laser tag tents" fill />
                </div>
                <div className="image blue-glow-border">
                    <Image src='/images/splash-img-2.jpg' alt="Group of kids holding laser tag equipment" fill />
                </div>
            </Wrapper>
        </div>
    )
}

export default FtImages