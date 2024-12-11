import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Group } from "lucide-react";
import Link from "next/link";
import Logout from "./_components/Logout";


type Props = {
    children: React.ReactNode;
};


const Chatroom = ({
    chat,
}: {
    chat: { imgSrc: string; id: string; name: string };
}) => {
    return (
        <Link
            href={`/chat/${chat.id}`}
            className="p-2 mb-1 w-full flex gap-2 items-center border-b border-slate-200 hover:bg-slate-50 rounded-xl
          "
        >
            <Avatar>
                <AvatarImage src={chat.imgSrc} />
                <AvatarFallback>
                    <Group />
                </AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
                <div className="font-medium">{chat.name}</div>
                <div className="text-slate-700">{chat.name}</div>
            </div>
        </Link>
    );
};

const chats: { imgSrc: string; id: string; name: string }[] = [
    {
        imgSrc: "/plus/img/avatar-1.jpg",
        id: "1",
        name: "Leonard Krasner",
    },
    {
        imgSrc: "/plus/img/avatar-2.jpg",
        id: "2",
        name: "Leonard Krasner",
    },
    {
        imgSrc: "/plus/img/avatar-3.jpg",
        id: "3",
        name: "Leonard Krasner",
    },
    {
        imgSrc: "/plus/img/avatar-4.jpg",
        id: "4",
        name: "Leonard Krasner",
    },
    {
        imgSrc: "/plus/img/avatar-5.jpg",
        id: "5",
        name: "Leonard Krasner",
    },
];


const Layout = ({ children }: Props) => {
    return (
        <div className="flex p-2 gap-2 h-screen">
            <Card className="w-[300px] h-full flex flex-col">
                <CardHeader className="pb-2">
                    <div className="flex items-center border-b-2">
                        <CardTitle>Chat</CardTitle>
                        <CardDescription>&nbsp;rooms</CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="p-2 h-full overflow-y-auto scroll-smooth">
                    {chats.map(
                        (chat: {
                            imgSrc: string;
                            id: string;
                            name: string;
                        }) => (
                            <Chatroom key={chat.id} chat={chat} />
                        ),
                    )}
                </CardContent>
                <CardFooter className="m-2 flex flex-col justify-between items-center p-4 border rounded-xl gap-4">
                    <div className="">
                        <div className="font-medium">Leonard Krasner</div>
                        <div className="mt-1 text-slate-700">
                            @leonardkrasner
                        </div>
                    </div>
                    <Link
                        href="/user/edit"
                        className="w-full text-center pointer-events-auto flex-none rounded-md px-2 py-[0.3125rem] font-medium text-slate-700 ring-1 shadow-xs ring-slate-700/10 hover:bg-slate-50"
                    >
                        edit
                    </Link>
                    <Logout />
                </CardFooter>
            </Card>
            <Card className="p-2 h-full w-full">{children}</Card>
        </div>
    );
};

export default Layout;
