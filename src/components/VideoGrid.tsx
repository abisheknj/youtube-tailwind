import { VideoCard } from "./VideoCard"


const videos = [
    {
        img: "/thumbnail.jpg",
        title: "Increadble Apple event of 2023",
        author: "Marques Brownlee",
        authorImg: "/thumbnail.jpg",
        views: "2M Views | 1 days ago"
    },
    {
        img: "/thumbnail2.jpg",
        title: "Step by Step Road map to get a remote job",
        author: "Harkirat Singh",
        authorImg: "/logo_harkirat.jpg",
        views: "169k Views | 10 days ago"
    },
    {
        img: "/thumbnail.jpg",
        title: "Increadble Apple event of 2023",
        author: "Marques Brownlee",
        authorImg: "/thumbnail.jpg",
        views: "2M Views | 1 days ago"
    },
    {
        img: "/thumbnail2.jpg",
        title: "Step by Step Road map to get a remote job",
        author: "Harkirat Singh",
        authorImg: "/logo_harkirat.jpg",
        views: "169k Views | 10 days ago"
    }

]


export const VideoGrid = () => {

    return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {videos.map(video => <div>
            <VideoCard 
            img={video.img}
            title={video.title}
            author={video.author}
            authorImg ={video.authorImg}
            views={video.views}
            />
            </div>)}


    </div>



}