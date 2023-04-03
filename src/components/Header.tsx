import Image from "next/image"

const Header = () => {
    return (
        <header>
            <Image
                src="/images/Logo.svg"
                alt="Long Island Laser Tag"
                className="logo"
                fill
                priority
            />
        </header>
    )
}

export default Header