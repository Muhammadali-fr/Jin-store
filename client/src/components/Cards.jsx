import { Card } from "@nextui-org/react";

const items = [
    { title: "Item 1", price: "$10", img: "https://www.wsupercars.com/wallpapers-regular/Hennessey/2023-Hennessey-Venom-F5-Revolution-001-2160.jpg" },
    { title: "Item 2", price: "$15", img: "https://www.wsupercars.com/wallpapers-regular/Audi/2025-Audi-RS3-Sportback-004-2160.jpg" },
    { title: "Item 3", price: "$20", img: "https://via.placeholder.com/300" },
    { title: "Item 4", price: "$25", img: "https://via.placeholder.com/300" },
];

const CardList = () => {

    const handleClick = (item) => {
        alert(item.title)
    }
    return (
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 container mx-auto">
            {items.map((item, index) => (
                <Card
                    className="relative bg-gray-200 rounded h-64"
                    key={index}
                    isPressable
                    shadow="sm"
                    onPress={() => handleClick(item)}
                >
                    {/* Image fills the full height and width */}
                    <img
                        alt={item.title}
                        className="w-full h-full object-cover   "
                        src={item.img}
                    />
                    {/* Overlaid footer with blur effect */}
                    <div className="absolute flex items-center justify-between bottom-0 left-0 w-full backdrop-blur p-2 rounded-b-2xl">
                        <b className="text-white">{item.title}</b>
                        <p className="text-white    ">{item.price}</p>
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default CardList;
