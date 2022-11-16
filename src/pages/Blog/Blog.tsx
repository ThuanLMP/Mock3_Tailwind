import Footer from "../../components/Footer";
import Header from "../../components/Header";


type blogForm = {
    name: string,
    year: number,
    type: string,
    content: string
}

const listBlog: Array<blogForm> = [
    {
        name: 'UI Interactions of the week',
        year: 2022,
        type: 'Dashboard',
        content:
            'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.' +
            'Velit officia consequat duis enim velit mollit.' +
            'Exercitation veniam consequat sunt nostrud amet.'
    },
    {
        name: 'UI Interactions of the week',
        year: 2022,
        type: 'Dashboard',
        content:
            'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.' +
            'Velit officia consequat duis enim velit mollit.' +
            'Exercitation veniam consequat sunt nostrud amet.'
    },
    {
        name: 'UI Interactions of the week',
        year: 2022,
        type: 'Dashboard',
        content:
            'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.' +
            'Velit officia consequat duis enim velit mollit.' +
            'Exercitation veniam consequat sunt nostrud amet.'
    },
    {
        name: 'UI Interactions of the week',
        year: 2022,
        type: 'Dashboard',
        content:
            'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.' +
            'Velit officia consequat duis enim velit mollit.' +
            'Exercitation veniam consequat sunt nostrud amet.'
    },
]
export default function Blog() {

    return (
        <>
            <Header typePage={'blog'}/>
            <div className="mt-[160px]">
                <h1 className="font-bold ml-[20%]">Blog</h1>

                {
                    listBlog.map((value, index) => {
                        return (
                            <div className="flex justify-center">
                                <div className="w-[60%]">
                                    <h2 className="font-bold mt-[55px] text-3xl">UI Interactions of the week</h2>
                                    <div className="flex mt-6">
                                        <p className="text-xl">12 Feb 2020</p>
                                        <div className="border-l-[2px] border-black ml-6 mr-6 h-5 mt-[3px]" />
                                        <p className="text-xl">Design, Pattern</p>
                                    </div>

                                    <p className="mt-2">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                        Velit officia consequat duis enim velit mollit.
                                        Exercitation veniam consequat sunt nostrud amet.</p>
                                </div>
                            </div>
                        )

                    })
                }

                <hr className="border-t-[1px] w-[65%] ml-[20%] mt-[31px]"></hr>

            </div>
            <Footer />
        </>
    )
}