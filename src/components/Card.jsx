/* eslint-disable react/prop-types */
function Card (props) {
    return (
        <div className="bg-black p-5 w-fit rounded-xl shadow-md shadow-black m-5">
            <h1 className="text-2xl font-bold text-white shadow-md hover:text-red-600">
              {props.coin}
            </h1>
            <h2 className="text-xl mb-2 text-orange-200">{props.price}</h2>
            <p className="text-xl font-bold text-gray-200 underline">
                volume {props.volume}
            </p>
        </div>

    );
}

export default Card;