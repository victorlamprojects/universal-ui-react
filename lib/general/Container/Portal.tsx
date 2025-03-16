import { FC, ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
	id?: string;
    children: ReactNode;
}

const Portal:FC<PortalProps> = ({id="portal", children}) => {
	const target = useRef(document.getElementById(id));
	if(!target.current){
		target.current = document.createElement("div");
		target.current.setAttribute("id", id);
		document.body.append(target.current);
	}
	useEffect(() => {
		return () => {
			if(target?.current?.childNodes?.length === 0){
				target.current.remove();
				target.current = null;
			}
		};
	}, [id]);
    return createPortal(children, target.current, id);
}

export default Portal;
