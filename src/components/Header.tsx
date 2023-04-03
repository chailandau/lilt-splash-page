import Image from "next/image"
import Wrapper from "./Wrapper"

const Header = () => {
    return (
        <header>
            <Wrapper>
                <div className="image">
                    <Image
                        src="/images/Logo.svg"
                        alt="Long Island Laser Tag"
                        className="logo"
                        fill
                        priority
                    />
                </div>

            </Wrapper>
        </header>
    )
}

export default Header