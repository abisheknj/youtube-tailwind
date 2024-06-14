export function VideoCard(props: any) {

    return <div>
        <img src={props.img}></img>
        <div className="grid grid-cols-12 pl-2">
            <div className="col-span-1">
                <img className="rounded-full w-10 h-10" src={props.authorImg} alt="" />
            </div>
            <div className="col-span-11 pl-2">
               {props.title}

                <div className=" text-gray-400
            text-base">
                {props.author}
                </div>
                <div className=" text-gray-400
            text-base">
                {props.views}
                </div>
            </div>



        </div>

    </div>
}