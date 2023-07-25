"use client"
import { UserButton, useUser } from "@clerk/nextjs";

const DashBoardPage = () => {

    const user = useUser();
    console.log(user);

    return (
        <div>
            <h1>DashBoardPage</h1>
            <UserButton afterSignOutUrl="/" />
        </div>
    )
}

export default DashBoardPage