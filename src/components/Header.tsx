
const Header = ({ showViewAll, text }: { text: string; showViewAll: boolean }) => {
    return (
        <div className="flex justify-center mt-12">
            <div className="flex justify-between w-full lg:max-w-[82rem]">
                <div className="text-[#9ba2ad]">{text}</div>
                {showViewAll && <div className="text-blue-600">View All</div>}
            </div>
        </div>
    )
}

export default Header