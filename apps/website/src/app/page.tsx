import { buttonVariants } from "@imperia/ui/components/ui/button";
import { Card } from "@imperia/ui/components/ui/card";
import { Icons } from "@imperia/ui/components/ui/icons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col md:flex-row gap-2 items-center justify-center">
            <Card className="rounded-md invisible md:visible">
                <Image src="/Imperia.png" width={120} height={120} alt="Picture of the author" />
            </Card>
            <div className="flex flex-col gap-2">
                <Card className="rounded-md">
                    <div className="text-left space-y-2 p-8 relative z-10">
                        <h1 className="text-2xl leading-tight text-foreground font-bold max-w-4xl">Imperia</h1>
                        <p className="text-sm font-light text-red-200">
                            All-in-one Discord bot solution for various tasks.
                        </p>
                    </div>
                </Card>
                <Card className="rounded-md border-none bg-none bg-transparent">
                    <Link className={buttonVariants({ variant: "outline" })} href="">
                        <Icons.github className="h-4 w-4 mr-2" />
                        GitHub
                    </Link>
                </Card>
            </div>
        </div>
    );
}
