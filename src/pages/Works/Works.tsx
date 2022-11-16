import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Work from "../../components/Work"

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
    {
        name: 'Components',
        imgUrl: 'https://symbols.vn/wp-content/uploads/2022/01/Hinh-Anime-Naruto-ngau-nhat-the-gioi.jpg',
        year: 2012,
        type: 'Dashboard',
        content:
            'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.' +
            'Velit officia consequat duis enim velit mollit.' +
            'Exercitation veniam consequat sunt nostrud amet.'
    },


]

export default function Works() {

    return (
        <>
            <Header typePage={'works'}/>
            <div className="mt">
                <h1 className="font-black ml-[13%] mt-[160px]">Work</h1>
                {
                    listWork.map((value,index) => {
                        return(
                            <Work work={value}/>
                        )
                    })
                }
            </div>
            <Footer />
        </>

    )
}