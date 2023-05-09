import Link from "next/link";
import Layout from "@/containers/Layout";
import {useAuth} from "@/context/AuthContext";


import "react-datepicker/dist/react-datepicker.css";


const HomePage = () => {


    const user = useAuth()
    console.log(user)
    return <>
        <Layout>
            <h1 className={'font-bold text-4xl'}>index page</h1>

        </Layout>
    </>
}
export default HomePage