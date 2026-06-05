import { FaEye, FaStar, FaShareAlt } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
    const {
        title,
        author,
        image_url,
        details,
        tags,
        rating,
        total_view,
    } = news;

    const formattedDate= new Date(author.published_date).toLocaleDateString()

    return (
        <div className="card bg-base-100 shadow-md mb-6">
            {/* Header */}
            <div className="flex justify-between items-center bg-base-200 p-4">
                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-12 h-12 rounded-full object-cover"
                    />

                    <div>
                        <h3 className="font-bold">{author.name}</h3>
                        <p className="text-sm text-gray-500">
                            {formattedDate}
                        </p>
                    </div>
                </div>

                <button className="flex gap-1 text-gray-500 hover:text-primary text-xl">
                    <BsBookmark className="cursor-pointer" />
                    <FaShareAlt className="cursor-pointer" />
                </button>
            </div>

            {/* Body */}
            <div className="p-4">
                <h2 className="text-2xl font-bold leading-relaxed mb-4">
                    {title}
                </h2>

                <img
                    src={image_url}
                    alt={title}
                    className="w-full h-72 object-cover rounded-lg"
                />

                <div className="mt-5 text-gray-500 leading-8">
                    <span>
                        {formattedDate}
                    </span>

                    {" | "}

                    <span>
                        {tags.join(", ")}
                    </span>

                    <p className="mt-2">
                        {details.length > 250
                            ? `${details.slice(0, 250)}...`
                            : details}
                    </p>

                    <button className="text-orange-500 font-bold mt-2">
                        Read More
                    </button>
                </div>
            </div>

            {/* Footer */}
            <div className="border-t border-base-300 p-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    {[...Array(rating.number)].map((_, index) => (
                        <FaStar
                            key={index}
                            className="text-orange-400"
                        />
                    ))}

                    <span className="font-semibold text-gray-600 ml-1">
                        {rating.number}
                    </span>
                </div>

                <div className="flex items-center gap-2 text-gray-500">
                    <FaEye />
                    <span>{total_view.toLocaleString()}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;