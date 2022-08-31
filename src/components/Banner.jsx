import Button from "./elements/Button";

export const Banner = () => {
    return (
        <div className="relative flex w-full mx-auto banner md:w-2/3 px-7 items-center-justify-between">
            <div className="w-full p-3 banner-description md:w-1/2">
                <h2 className="mb-6 text-4xl font-bold text-white">
                    Food Ordering Made Easy
                </h2>
                <p className="py-2 text-lg font-semibold text-red-600">
                    Get Started Today!
                </p>
                <div className="btn-container">
                    <Button>Order Now</Button>
                    <a href="/menu" className="px-3 font-bold text-yellow-400 hover:text-yellow-500 text-decoration-line">
                        See Menu
                    </a>
                </div>
            </div>
            <div className="flex justify-end w-full p-3 banner-image md:w-1/2">
                <img src={require("../assets/images/pizza.png")} alt="banner" className="max-h-95" />
            </div>
        </div>
    )
}