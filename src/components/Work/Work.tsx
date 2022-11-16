import { useNavigate } from "react-router-dom"

type workForm = {
    name: string,
    imgUrl: string,
    year: number,
    type: string,
    content: string
}
type Props = {
    work: workForm
}

export default function Work({ work }: Props) {
    const navigate = useNavigate()
    return (
        <div className='flex ml-[13%] mt-7'>
            <div>
                <img  className="rounded w-64 h-48"   src={work.imgUrl} />
            </div>

            <div className="w-[62%] ml-4 mt-[-5px]">
                <h2 className="cursor-pointer font-bold" onClick={() => {
                    navigate('../work_detail')
                }}>{work.name}</h2>

                <div className='flex align-middle mt-5 mb-5'>
                    <span className="w-16 h-6 bg-slate-800 rounded-2xl flex justify-center font-black text-white mr-6">{work.year}</span>
                    <p className="text-xl mt-[-3px] text-text_1 ">{work.type}</p>
                </div>
                <p className="w-[95%]">
                    {work.content}
                </p>
            </div>

        </div>
    )
}