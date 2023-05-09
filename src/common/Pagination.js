import Pagination from "@mui/material/Pagination";
import {useRouter} from "next/router";

const PaginationComponents = ({totalPages, page}) => {
    const router = useRouter()

    const pageHandler = (event, page) => {
        router.query.page = page
        router.push({pathname: router.pathname, query: router.query}, undefined, {scroll: false})
    }
    return <>
        <div className={' col-span-6 flex justify-center'} dir={"ltr"}>

            {
                totalPages > 1 &&
                (
                    <Pagination count={totalPages} page={page} color="primary"
                                onChange={pageHandler}/>
                )
            }

        </div>
    </>
}

export default PaginationComponents