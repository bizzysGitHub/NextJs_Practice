import { Auth } from "@/app/auth/_components/Auth";

export default function AuthPage() {
    return(
  
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
         <h1> 
            this is the Auth page.
            <br/>
            
         </h1>
        <Auth/>
        </div>
    )
}

//2505 producers drive indianapolis 46218