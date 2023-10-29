/* eslint-disable react/prop-types */
function Card (props) {
    return (
        <div className="bg-red-500 p-5 w-fit rounded-xl shadow-md mt-48 mb-1 shadow-black m-5">
            <h1 className="text-2xl font-bold text-white shadow-md">
              {props.coin}
            </h1>
            <h2 className="text-xl mb-2">{props.price}</h2>
            <p className="text-xl font-bold text-gray-200 underline">
                volume {props.volume}
            </p>
        </div>

    );
}

export default Card;