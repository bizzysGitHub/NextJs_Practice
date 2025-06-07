import { ReactNode } from "react";



export default function LoginLayout({children}: {children: ReactNode}){
    return(
         <main className="login-layout">{children}</main>

    )
}