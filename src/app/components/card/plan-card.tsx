import React from 'react';
import {Button} from '../ui/button';
import {Seperator} from '../ui/seperator';
import {Check} from 'lucide-react';
import axios from 'axios';
import {useUser} from '@clerk/nextjs';
import {toast} from 'sonner';
import {useSubscriptions} from '@hooks/use-subscription';

interface PlanCardProps{
    name:string;
    description:string;
    price:string;
   options:string; 
   priceId?:string;
}

const PlanCard =({
    description,
    name,
    options,
    price,
    priceId,
}: PlanCardProps)=> {
    const {user} = useUser();
    const {subscription} = useSubscription();

    const onSubmit=()=>{
        const promise = axios.post('/api/subscription', {
            email: user?.emailAddress[0].emailAddress,
            fullName: user?.fullName,
            userId: user?.id,
            priceId,
        }).then((res)=> window.open(res.data, '_blank '));
        toast.promise(promise, {
            loading: 'Loading... ',
            success: 'Subscribed!',
            error: 'Error subscribing',
    });
};

return(
    <div className="border rounded-md p-4">
    <h1 className="text-center text-xl">{name}</h1>
    <div className="text-center mt-4 text-xl">{description}</div>
    <span className="mr-2 text-5xl font-extrabold">
        {price !=='Free'&& '$'}
        {price}
    </span>
    <span className='text-gray-500 dark:text-gray-400'>{month}</span>
    </div>  
    {priceId ?(
        <div className='w-full flex justify-center'>
        <Button onClick={onSubmit} >
        {subscription === 'Basic' ? : 'Subscribe'}</Button>
        </div>
    )}
)