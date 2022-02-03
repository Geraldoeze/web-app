import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Error = () => {
    const router = useRouter();
    useEffect(()=>{
     setTimeout(()=> {
        router.push('/');
     }, 4000)  
    }, [])

    return (  
        <div>
            <h1>Ooooppps</h1>
            <p>Sorry this page does not exist</p>
            <p>Click here to go <Link href="/"><a>back</a></Link></p>
        </div>
    );
}
 
export default Error;