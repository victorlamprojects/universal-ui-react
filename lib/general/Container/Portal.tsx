import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
    children: ReactNode
};

const Portal:FC<PortalProps> = ({children}) => {
    const documentDiv = document.createElement("div");
	document.getElementById("root")!.append(documentDiv);
    return createPortal(children, documentDiv);
}

export default Portal;
