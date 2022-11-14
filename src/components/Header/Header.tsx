export default function Header() {
    return (
        <div className="h-16 fixed top-0 z-10 w-full">
            <ul className="flex text-xl font-medium mt-7 absolute right-16">
                <li className="mr-8">Works</li>
                <li className="mr-8">Blog</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}