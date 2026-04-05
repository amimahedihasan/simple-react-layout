import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricingCard from '../DaisyPricingCard/DaisyPricingCard';

const PricingOption = ({pricingPromise}) => {
    const data = use(pricingPromise)
    const pricingData = data.memberships
    console.log(pricingData)


    return (
        <div>
            <h2 className='text-5xl'>Get Our Memberships</h2>
             <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
                {/* {
                    pricingData.map(pricing => <PricingCard
                    key = {pricing.id}
                    pricing={pricing}></PricingCard>)
                } */}
                {
                    pricingData.map(pricing => <DaisyPricingCard key={pricing.id} pricing={pricing}></DaisyPricingCard>)
                }
            </div>
            
        </div>
    );
};

export default PricingOption;