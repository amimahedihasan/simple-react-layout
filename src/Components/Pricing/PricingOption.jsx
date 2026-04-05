import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOption = ({pricingPromise}) => {
    const data = use(pricingPromise)
    const pricingData = data.memberships
    console.log(pricingData)


    return (
        <div>
            <h2 className='text-5xl'>Get Our Memberships</h2>
             <div className='grid grid-cols-3 gap-4 mt-6'>
                {
                    pricingData.map(pricing => <PricingCard
                    key = {pricing.id}
                    pricing={pricing}></PricingCard>)
                }
            </div>
            
        </div>
    );
};

export default PricingOption;