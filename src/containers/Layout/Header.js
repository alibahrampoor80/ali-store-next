import Link from 'next/link'
import {useAuth, useAuthActions} from "@/context/AuthContext";
import {useDispatch, useSelector} from "react-redux";
import {signout} from "../../redux/user/userActions";

const Header = () => {
    const userInfo = useSelector(state => state.userSignin)
    const {user, loading} = userInfo
    const dispatch = useDispatch()
    console.log(loading)
    return <>

        <header className={`bg-white shadow-md py-2 mb-8 sticky top-0 z-40`}>
            <div className={`container mx-auto xl:max-w-screen-xl px-4 md:px-0
             transition-all ${loading ? "opacity-0" : "opacity-100"}`}>
                <nav className={'flex justify-between'}>
                    <ul className="flex items-center gap-x-5">
                        <li>
                            <Link href={'/'} className={'py-2 block'}>Home</Link>
                        </li>
                        <li>
                            <Link href={'/blogs'} className={'py-2 block'}>blogs</Link>
                        </li>

                    </ul>
                    <div className="flex items-center gap-x-4">
                        {
                            user ? (
                                    <>
                                        <button
                                            className={'bg-red-500 hover:bg-red-700 transition delay-75 px-2 py-1 rounded text-red-100'}
                                            onClick={() => dispatch(signout())}>خروج
                                        </button>
                                        <Link href={'/profile'} className={'py-2 block'}>Profile - <span
                                            className={'text-sm'}>{user.name}</span></Link>
                                    </>
                                ) :
                                <>
                                    <Link href={'/signup'} className={'py-2 block'}>ثبت نام</Link>
                                    <Link href={'/signin'} className={'py-2 block'}>ورود</Link>
                                </>
                        }

                    </div>

                </nav>
            </div>
        </header>
    </>
}

export default Header