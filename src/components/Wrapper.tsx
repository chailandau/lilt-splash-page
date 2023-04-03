import { FC } from "react"
import { WrapperProps } from "./ComponentTypes"



const Wrapper: FC<WrapperProps> = ({ id, children }) => {
    return (
        <div className="wrapper" id={id}>
            {children && children}
        </div>
    )
}

export default Wrapper