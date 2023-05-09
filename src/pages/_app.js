import '../../styles/globals.css'
import {Toaster} from "react-hot-toast";
import AuthProvider from "@/context/AuthContext";
import Script from "next/script";
function MyApp({Component, pageProps}) {
    return <>
        <AuthProvider>
            <Component {...pageProps} />
            <Toaster/>

        </AuthProvider>
    </>
}

export default MyApp
