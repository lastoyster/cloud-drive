import {create} from "zustand";

type SubscriptionPlan = {
    subscriptions:  "Basic"|  "Pro";
    setSubscriptions: (subscription: "Basic"| "Pro")=> void;
    isLoaded: boolean;
    setIsLoading:(isLoading: boolean) => void;
    totalStorage: number;
    setTotalStorage:(totalStorage: number) => void;
};

export const useSubscription = 
create<SubscriptionPlan>((set) => ({
subscriptions: "Basic", setSubscriptions:(subscription) => set({subscriptions:Subscription}), 
isLoading:true,
setIsLoading:(isLoading) => set({isLoading}),
totalStorage:0,
setTotalStorage:(totalStorage) => set({totalStorage}),
}));