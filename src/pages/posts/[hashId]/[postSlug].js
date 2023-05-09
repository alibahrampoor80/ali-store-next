import axios from "axios";
import {baseUrl} from "../../../../app/constants/api";
import {BookmarkIcon, LinkIcon} from "@heroicons/react/24/outline";
import {BookmarkIcon as SolideBookmarkIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import {toPersianDigits} from "@/app/toPersianDigits";
import PostInteraction from "@/components/posts/PostInteraction";
import {FaTelegram} from "react-icons/fa";
import {IoLogoLinkedin, IoLogoTwitter} from "react-icons/io";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {useState} from "react";
import {MdContentCopy} from "react-icons/md";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PostList from "@/components/posts/PostList";
import PostComments from "@/components/posts/PostComments";
import toLocalDate from "@/app/toLocalDate";
import Layout from "@/containers/Layout";
import http from "../../../services/httpService";

const PostPage = ({post}) => {
    const [copied, setCopied] = useState(false);

    const copyHandler = () => {
        setCopied(true);
        toast.success("کپی شد");
        setTimeout(() => {
            setCopied(false);
        }, 1000);
    };
    return (
        <>
            <Layout>
                <div className="bg-gray-50 min-h-screen">
                    <div className="md:max-w-screen-lg container mx-auto">
                        <header
                            className="flex flex-col md:flex-row gap-y-5 md:justify-between md:items-start mb-12 mx-auto max-w-screen-md">
                            {/* author data */}
                            <div className="flex items-stretch">
                                <img
                                    className="w-14 h-14 md:w-20 md:h-20 rounded-full ring-2 ring-white object-cover"
                                    src="/img/re IMG_9343 (Copy).JPG"
                                    alt={post.author.name}
                                />
                                <div className="flex flex-col mr-4 justify-between">
                                    <div>
                  <span className="font-extrabold text-base">
                    {post.author.name}
                  </span>
                                        <Link
                                            href={`/blogs/${post.category.englishTitle}`}
                                            className="bg-white border border-blue-500 text-xs text-blue-500 px-3 py-1 mr-2 rounded-full transition-all duration-300 hover:bg-blue-500 hover:text-white  "
                                        >
                                            {post.category.title}
                                        </Link>
                                    </div>
                                    <span className="font-normal text-xs hidden md:block ">
                  {post.author.biography}
                </span>

                                    <div className="font-normal text-myGray-400 text-sm ">
                                        <span>{toLocalDate(post.createdAt)}</span>
                                        <span className="mx-1"> &bull;</span>

                                        <span> خواندن</span>
                                        <span> {toPersianDigits(post.readingTime)} </span>
                                        <span>دقیقه </span>
                                    </div>
                                </div>
                            </div>
                            {/* interactions buttons */}
                            <div className="flex">
                                <button>
                                    <LinkIcon className="h-6 w-6 hover:text-black text-gray-500 cursor-pointer "/>
                                </button>
                                <button
                                    className="mr-4 border border-gray-300 text-gray-500 hover:text-gray-600 rounded-full px-3 py-1 flex items-center">
                <span className="ml-1 text-xs ">
                  {post.isBookmarked ? "ذخیره شده" : "ذخیره"}
                </span>
                                    {post.isBookmarked ? (
                                        <SolideBookmarkIcon className="h-6 w-6 fill-current"/>
                                    ) : (
                                        <BookmarkIcon className="h-6 w-6 stroke-current"/>
                                    )}
                                </button>
                            </div>
                        </header>
                        <main
                            className={
                                "prose prose-xl prose-slate prose-h1:text-3xl prose-h1:font-black prose-h2:text-2xl prose-h2:font-extrabold prose-p:leading-9 md:prose-p:text-lg md:prose-p:leading-10 prose-img:rounded-xl prose-a:text-blue-500 mb-8 max-w-screen-md mx-auto"
                            }
                        >
                            <h1>{post.title}</h1>
                            <h2>عنوان اول تستی</h2>
                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                                جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
                                طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
                                فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
                                موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
                                نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
                                دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                            </p>
                            <h2>عنوان دوم تستی</h2>
                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                                جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
                                طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
                                فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
                                موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
                                نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
                                دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                            </p>
                        </main>
                        {/*  post tags like-bookmark  */}
                        <section>
                            <ul className={"flex items-center flex-wrap gap-x-4 mb-6"}>
                                {["جاوا اسکریپت", "ری اکت", "نکست", "نود", "ویو"].map(
                                    (tag, index) => (
                                        <li
                                            className={
                                                "px-3 py-1 rounded-2xl bg-gray-200 hover:bg-gray-100 transition-all cursor-pointer text-gray-600 text-sm mb-3 block"
                                            }
                                            key={index}
                                        >
                                            {tag}
                                        </li>
                                    )
                                )}
                            </ul>
                            <div
                                className={
                                    "flex items-center flex-col gap-y-8 md:flex-row md:justify-between"
                                }
                            >
                                <PostInteraction
                                    blog={post}
                                    isSmall={false}
                                    className={"justify-evenly w-full md:w-auto"}
                                />

                                {/*  share btns */}
                                <div className="flex items-center gap-x-6 justify-between w-full md:w-auto">
                                    <div className="flex items-center md:gap-x-4 gap-x-6 w-full md:w-auto ">
                                        <a
                                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${process.env.NEXT_PUBLIC_DOMAIM_URL}posts/${post.hashId}/${post.slug}`}
                                            target="_blank"
                                            className="block"
                                            rel="noreferrer"
                                        >
                                            <IoLogoLinkedin
                                                size={30}
                                                className="fill-gray-400 hover:fill-gray-500 transition-all duration-300 cursor-pointer"
                                            />
                                        </a>
                                        <a
                                            href={`https://twitter.com/share?text=${post.title}&url=${process.env.NEXT_PUBLIC_DOMAIM_URL}posts/${post.hashId}/${post.slug}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="block"
                                        >
                                            <IoLogoTwitter
                                                size={24}
                                                className="fill-gray-400  hover:fill-gray-500 transition-all duration-300 cursor-pointer"
                                            />
                                        </a>
                                        <a
                                            className="block"
                                            rel="noreferrer"
                                            target="_blank"
                                            href={`https://telegram.me/share/url?url=${process.env.NEXT_PUBLIC_DOMAIM_URL}posts/${post.hashId}/${post.slug}&text=${post.title}`}
                                        >
                                            <FaTelegram
                                                className="fill-gray-400 hover:fill-gray-500 transition-all duration-300 cursor-pointer"
                                                size={24}
                                            />
                                        </a>
                                    </div>

                                    <div className="relative">
                                        <CopyToClipboard
                                            text={`${process.env.NEXT_PUBLIC_DOMAIM_URL}posts/${post.hashId}/${post.slug}`}
                                            onCopy={copyHandler}
                                        >
                                            <div
                                                className={
                                                    "bg-gray-100 border px-3 py-1 rounded-2xl text-gray-600 flex items-center gap-x-2 cursor-pointer text-sm md:text-base"
                                                }
                                                style={{width: "max-content"}}
                                            >
                                                <span>کپی لینک </span>
                                                <MdContentCopy size={24}/>
                                            </div>
                                        </CopyToClipboard>
                                        {/*{copied && <span*/}
                                        {/*    className={'absolute bottom-0 left-0 bg-blue-500 px-3 py-1 rounded-2xl text-white'}>کپی شد</span>}*/}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className={"mb-20"}>
                            <h2 className={"font-extrabold text-2xl md:text-3xl mb-8"}>
                                پست های مشابه
                            </h2>
                            <div className="grid grid-cols-6 gap-8">
                                <PostList blogsData={post.related}/>
                            </div>
                        </section>
                        {/*  post comments  */}
                        <PostComments post={post}/>
                    </div>
                </div>
                <ToastContainer/>
            </Layout>
        </>
    );
};

export default PostPage;

export async function getServerSideProps(ctx) {
    const {query, req} = ctx;
    const {postSlug} = query;

    const {data: {data},} = await http.get(`/posts/${postSlug}`, {
        headers: {Cookie: req.headers.cookie || ""}
    });
    return {
        props: {
            post: data,
        },
    };
}
