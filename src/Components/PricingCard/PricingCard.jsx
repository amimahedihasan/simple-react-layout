import PricingFeature from "./PricingFeature";

const PricingCard = ({ pricing }) => {
    const { name, price, description, features } = pricing
    console.log(pricing)
    return (
        <div className="border flex flex-col flex-1 bg-amber-700 p-4 rounded-2xl ">
            {/* card header */}
            <div>
                <h1 className="text-7xl">{name}</h1>
                <h1 className="text-3xl">{price}</h1>
            </div>

            {/* card body */}
            <div className="bg-amber-600 p-4 rounded-2xl ">
                <p>{description}</p>
                {
                    features.map((feature, index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
                }
                <button className="btn mt-2 w-full">Subcribe</button>


            </div>


        </div>

    );
};

export default PricingCard;