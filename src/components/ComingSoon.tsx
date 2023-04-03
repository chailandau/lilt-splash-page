import Wrapper from "./Wrapper"

const ComingSoon = () => {
    return (
        <Wrapper id="coming-soon">
            <h1>New website coming soon!</h1>
            <p>In the meantime, get in touch via phone or email today!</p>
            <div className="buttons">
                <a href="tel:1-516-323-5584" className="button">516-323-5584</a>
                <a href="mailto:longislandlasertag@gmail.com" className="button secondary">Send us an email</a>
            </div>
        </Wrapper>
    )
}

export default ComingSoon