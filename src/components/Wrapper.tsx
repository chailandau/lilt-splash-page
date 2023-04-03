import { FC } from "react"
import { WrapperProps } from "./ComponentTypes"



const Wrapper: FC<WrapperProps> = ({ children }) => {
    return (
        <div className="wrapper">
            {children && children}
        </div>
    )
}

export default Wrapper