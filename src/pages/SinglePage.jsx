import { useParams } from 'react-router-dom'
import { useEffect , useState } from 'react'
import { CalendarDays , Clock } from "lucide-react"
import dayjs from "dayjs"
import axios from 'axios'

const SinglePage = () => {

    const { slug } =  useParams()
    const [data,setData] = useState({})

    useEffect(() => {
        queryData()
    },[])

    const queryData = async() => {
        const data = await axios.post("https://api.suwizx.dev/kasedtakorn/graphql", {
            query: `query post($slug: String = "") {
              postBy(slug: $slug) {
                id
                title
                content
                date
                categories {
                  nodes {
                    link
                    name
                  }
                }
                featuredImage {
                  node {
                    altText
                    sourceUrl
                  }
                }
              }
            }`,
            variables:{
              slug: slug
            }
          }, {
              headers: {
                'Content-Type': 'application/json'
              }
            })
        setData(data.data.data.postBy)
    }

    return(
        <>
        {data?.featuredImage?.node?.sourceUrl ? (<img class="w-full h-[250px] object-cover" src={data?.featuredImage?.node?.sourceUrl} alt={data?.title}></img>) : (<div className="w-full h-[250px] bg-base-300"></div>)}
            <div className="max-w-5xl mx-auto my-10 px-4">
                <div className="flex items-center py-2">
                    <span className="inline-flex items-center"><span className="pr-1"><CalendarDays /></span>{dayjs(data?.date).format("D MMMM YYYY")}</span>
                    <span className="inline-flex items-center ml-2"><span className="pr-1"><Clock /></span>{dayjs(data?.date).format("HH:mm")}</span>
                </div>
                <h2 className="text-4xl font-bold">{data?.title}</h2>
            </div>
            <div className="max-w-5xl mx-auto p-4">
                <article  className="prose-xl prose-headings:font-bold w-full bg-base-300 p-4 rounded-xl prose-p:font-sarabun prose-img:rounded-md prose-a:text-orange-400 hover:prose-a:underline">
                <div
                dangerouslySetInnerHTML={{
                    __html: data?.content
                }}></div>
                </article>
            </div>
        </>
    )

}

export default SinglePage