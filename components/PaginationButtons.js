import { useRouter } from "next/router";
import Link from "next/link";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/solid";

function PaginationButtons() {
    const router =useRouter();

    const startIndex= Number(router.query.start) || 0;
    return (
        <div className="flex max-w-lg text-blue-700 m-10">
            {startIndex >= 10 && (
                <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`} passHref>
                    <a><div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
                        <ChevronLeftIcon className="h-5 "/>
                        <p>Previous</p>
                    </div></a>
                
                </Link>
            )}

            <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`} passHref>
            <a><div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
                <ChevronRightIcon className="h-5 "/>
                <p>Next</p>
            </div></a>
            </Link>

            
           
               {/*Here we  are adding next page item on clicking next with the limit of 10 it will show results with index start with 0 */}
           
        </div>
    )
}

export default PaginationButtons
