import { Badge } from "@imperia/ui/components/ui/badge";
import { Button, buttonVariants } from "@imperia/ui/components/ui/button";
import { Icons } from "@imperia/ui/components/ui/icons";
import { cn } from "@imperia/ui/lib/utils";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col md:flex-row gap-2 items-center justify-center">
            {/* <Card className="rounded-md invisible md:visible">
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
            </div> */}
            <div className="flex flex-col items-center justify-center gap-2">
                <Badge className="text-xs text-muted-foreground" variant="secondary">
                    Coming Soon
                </Badge>
                <h1 className="text-4xl font-semibold leading-tight mt-2">Imperia</h1>
                <p className="text-base font-light text-gray-300">All-in-one Discord bot solution for various tasks.</p>
                <div className="mt-4 flex gap-2">
                    <a
                        href="https://github.com/yehezkieldio/imperia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(buttonVariants({ variant: "outline" }), "text-sm")}
                    >
                        <Icons.github className="w-4 h-4 mr-2" />
                        GitHub
                    </a>
                    <Button variant="outline" className="px-8" disabled>
                        Invite Me
                    </Button>
                </div>
            </div>
        </div>
    );
}
