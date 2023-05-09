
import Link from "next/link";

const notFound = () => {
    return <>
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                </div>
                <h2>صفحه ی مورد نظر شما یافت نشد</h2>
                <p>با عرض پوزش، اما صفحه مورد نظر شما وجود ندارد، حذف شده است. نام تغییر کرده یا هست
                    به طور موقت در دسترس نیست</p>
                <Link href="/">برو به خانه</Link>
            </div>
        </div>

    </>
}
export default notFound