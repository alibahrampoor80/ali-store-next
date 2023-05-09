import axios from "axios";
import PostList from "@/components/posts/PostList";
import CategoryMobile from "@/components/posts/CategoryMobile";
import SortBar from "@/components/posts/SortBar";
import CategoryDesktop from "@/components/posts/CategoryDesktop";
import {baseUrl} from "../../../app/constants/api";
import Layout from "@/containers/Layout";
import http from "../../services/httpService";
import querystring from "querystring";
import Pagination from '@mui/material/Pagination';
import {useRouter} from "next/router";
import PaginationComponents from "@/common/Pagination";

export default function Home({blogsData, postCategory}) {


    return <>
        <Layout>

            <div className="container mx-auto lg:max-w-screen-xl px-4 md:px-0 ">
                <CategoryMobile postCategory={postCategory}/>
                <div className="grid gap-8 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)] min-h-screen">
                    <div className={'hidden md:block md:row-span-2 md:col-span-3'}>
                        <CategoryDesktop postCategory={postCategory}/>

                    </div>

                    {/* category mobile */}


                    <div className={'hidden md:block md:col-span-9'}>
                        <SortBar/>
                    </div>
                    {/**/}
                    <div className={'md:col-span-9 grid grid-cols-6 gap-8'}>
                        <PostList blogsData={blogsData.docs}/>
                      <PaginationComponents page={blogsData.page} totalPages={blogsData.totalPages}/>
                    </div>


                </div>

            </div>


        </Layout>
    </>
}

export async function getServerSideProps({req, query}) {

    const {data: result} = await http.get(`/posts?${querystring.stringify(query)}`, {
        headers: {Cookie: req.headers.cookie || ""}
    })
    const {data: postCategory} = await http.get(`/post-category`)
    const {data} = result
    return {
        props: {
            blogsData: data,
            postCategory: postCategory.data
        }
    }

}