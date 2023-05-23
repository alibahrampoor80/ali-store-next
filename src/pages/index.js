import Link from "next/link";
import Layout from "@/containers/Layout";
import "react-datepicker/dist/react-datepicker.css";
import {useSelector} from "react-redux";


const HomePage = () => {
    const userInfo = useSelector(state => state.userSignin)
    const {user,loading} = userInfo
    return <>
        <Layout>
            <h1 className={'font-bold text-4xl'}>index page</h1>

        </Layout>
    </>
}
export default HomePage