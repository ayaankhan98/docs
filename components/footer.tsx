import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Linkedin, SlackIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t w-full h-16">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3 max-sm:px-4">
        <div className="flex items-center gap-3">
          {/* <CommandIcon className="sm:block hidden w-5 h-5 text-muted-foreground" /> */}
          <img src="icon.png" height={30} width={30} />
          <p className="text-center">
            Copyright &#169; {" "} 2024-2025
            <Link
              className="px-1 underline underline-offset-2"
              href="https://github.com/robonito"
            >
              Robonito
            </Link>
            {/* . The source code is available on{" "}
            <Link
              className="px-1 underline underline-offset-2"
              href="https://github.com/nisabmohd/Aria-Docs"
            >
              GitHub
            </Link>
            . */}
          </p>
        </div>

        <div className="gap-4 items-center hidden md:flex">
          <FooterButtons />
        </div>
      </div>
    </footer>
  );
}

export function FooterButtons() {
  return (
    <>
      <Link
        href="https://join.slack.com/t/robonito/shared_invite/zt-2sanyrjr5-gPDeppZ7UsV0gCk~rDg~yw"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <SlackIcon className="h-4 w-4 mr-2 text-gray-600 fill-current" />
        Slack
      </Link>
      <Link
        href="https://www.linkedin.com/company/robonito"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <Linkedin className="h-4 w-4 mr-2 text-blue-600 fill-current" />
        LinkedIn
      </Link>
    </>
  );
}