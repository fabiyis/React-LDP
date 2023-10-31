/* eslint-disable react/prop-types */
function Card (props) {
    const {coin, price, volume} = props;
    return (
        <div className="bg-black p-5 w-fit rounded-xl shadow-md shadow-black m-5 mt-2">
            <h1 className="text-xl font-bold text-white shadow-md hover:text-red-600"> {coin} </h1>
            <h2 className="text-sm mb-2 text-orange-200"> $ {price}</h2>
            <p className="text-sm font-bold text-green-200">Market Volume ${volume} </p>
        </div>
    );
}

export default Card;