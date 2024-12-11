"use client";
// import { useRouter } from "next/router";
// import logout from "../_actions/logout";
import { Button } from "@/components/ui/button";

const Logout = () => {
    // const router = useRouter();
    const handleLogout = () => {
    //     logout.bind(router);
    };
    return (
        <Button
            onClick={handleLogout}
            className="w-full text-center pointer-events-auto flex-none rounded-md px-2 py-[0.3125rem] font-medium"
        >
            logout
        </Button>
    );
};

export default Logout;
