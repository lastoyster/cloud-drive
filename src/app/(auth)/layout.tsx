import Navbar from "@/components/shared/navbar";
import Sidebar from "@/components/shared/sidebar";
import Menu from "@/components/shared/menu"; 
import { ChildProps } from "@/types";
import React from from "react";

const AuthLayout =({children}:ChildProps)=>{
    return (
    <div className="relative">
    <div className="absolute inset-0 z-40 w-screen h-screen bg-b">
        {children}</main> 
    </div>
    );
};

export default AuthLayout ;