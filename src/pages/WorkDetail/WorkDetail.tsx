import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function WorkDetail() {
    return (
        <>
            <Header typePage={'work_detail'}/>
            <div className="flex justify-center mt-36">
                <div className="w-[60%]">
                    <h1 className="font-bold">Designing Dashboards with usability in mind</h1>
                    <div className="flex align-middle mt-8">
                        <span className="flex justify-center text-white font-black w-[62px] h-[25px] bg-red-500 rounded-2xl mr-7">2020</span>
                        <p className="text-xl">Dashboard, User Experience Design</p>
                    </div>
                    <br/>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit.
                        Exercitation veniam consequat sunt nostrud amet.
                    </p>
                    <img className="mt-11" src="https://inkythuatso.com/uploads/images/2022/03/4757790-16-10-42-13.jpg" />
                    <div className="mt-14">
                        <h2 className="text-[30px] font-medium">Heading 1</h2>
                        <h3 className="text-[24px] font-medium mt-3 mb-3">Heading 2</h3>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <img className="mt-6 mb-8" src="https://inkythuatso.com/uploads/images/2022/03/4757790-16-10-42-13.jpg" />
                        <img src="https://inkythuatso.com/uploads/images/2022/03/4757790-16-10-42-13.jpg" />
                    </div>

                </div>
            </div>
            <Footer />
        </>

    )
}