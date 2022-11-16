import { Avatar } from "@mui/material";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Work from "../../components/Work";


type workForm = {
    name: string,
    imgUrl: string,
    year: number,
    type: string,
    content: string
}

const listWork: Array<workForm> = [
    {
        name: 'Designing Dashboards',
        imgUrl: 'https://img1.kienthucvui.vn/uploads/2019/10/10/anh-chibi-naruto_110701874.jpg',
        year: 2022,
        type: 'Dashboard',
        content:
            'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.' +
            'Velit officia consequat duis enim velit mollit.' +
            'Exercitation veniam consequat sunt nostrud amet.'
    },
    {
        name: 'Vibrant Portraits of 2020',
        imgUrl: 'https://inkythuatso.com/uploads/images/2022/03/4757790-16-10-42-13.jpg',
        year: 2019,
        type: 'Dashboard',
        content:
            'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.' +
            'Velit officia consequat duis enim velit mollit.' +
            'Exercitation veniam consequat sunt nostrud amet.'
    },
    {
        name: '36 Days of Malayalam type',
        imgUrl: 'https://symbols.vn/wp-content/uploads/2022/01/Hinh-Anime-Naruto-ngau-nhat-the-gioi.jpg',
        year: 2012,
        type: 'Dashboard',
        content:
            'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.' +
            'Velit officia consequat duis enim velit mollit.' +
            'Exercitation veniam consequat sunt nostrud amet.'
    },

]
export default function Home() {
    return (
        <div>
            <Header typePage={'home'}/>
            <div className=" mt-56 ">
                <div className="grid grid-cols-5">
                    <div className="col-span-3 flex justify-end">
                        <div className="w-3/4">
                            <h1 className="font-bold">Hi, I am John, <br /> Creative Technologist</h1>
                            <p className="mt-8">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                Velit officia consequat duis enim velit mollit.
                                Exercitation veniam consequat sunt nostrud amet.
                            </p>
                            <button className="bg-neutral-400 w-52 h-12 text-white text-xl bg-primary mt-9">Dowload Resume</button>
                        </div>
                    </div>
                    <div className="col-span-2 flex justify-center">
                        <Avatar
                            sx={{
                                width: '243px',
                                height: '243px',
                                boxShadow: '0px 10px #EDF7FA'
                            }}
                            alt="Avatar"
                            src="https://inkythuatso.com/uploads/images/2022/03/4757790-16-10-42-13.jpg"
                        />
                    </div>
                </div>


                <div className="w-[100%] pb-[25px] bg-primary_1 mt-[71px] relative">
                    <p className="ml-[13%] text-sm">Recent post</p>
                    <a className="absolute right-[13%] top-7 text-secondry  cursor-pointer  ">View all</a>
                    <div className="flex justify-center w-[100%]">
                        <div className="h-auto min-h-290px w-[36%] bg-white pl-6 pb-5 pt-8 rounded ">
                            <h2 className="font-bold">
                                Making a design system from scratch
                            </h2>
                            <div className="flex mt-6">
                                <p>12 Feb 2020</p>
                                <div className="border-l-[2px] border-border_cl ml-6 mr-6 h-5 mt-[1px]" />
                                <p>Design, Pattern</p>
                            </div>
                            <p className="w-[87%] mt-[11px]">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                Velit officia consequat duis enim velit mollit.
                                Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                        <div className="h-auto min-h-290px w-[35.5%] bg-white pl-6 pt-8 ml-6 rounded">
                            <h2 className="font-bold">
                                Creating pixel perfect icons in Figma
                            </h2>
                            <div className="flex mt-6">
                                <p>12 Feb 2020</p>
                                <div className="border-l-[2px] border-border_cl ml-6 mr-6 h-5 mt-[1px]" />
                                <p>Design, Pattern</p>
                            </div>
                            <p className="w-[87%] mt-[11px]">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                Velit officia consequat duis enim velit mollit.
                                Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="text-sm ml-[13%]">Featured works</p>
                    {
                        listWork.map((value, index) => {
                            return (
                                <div key={index}>
                                    <Work work={value}/>
                                    <hr className="border-t-[1px] w-[75%] ml-[13%] mt-[31px]"></hr>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <Footer />
        </div>
    )
}