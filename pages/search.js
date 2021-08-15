import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import { API_KEY, CONTEXT_KEY } from "../keys";
import Response from "../Response"
function Search({results}) {
    const router = useRouter();
    console.log(results);
    return (
        <div>
        <Head>  
            <title>{router.query.term}-Google Search</title>
            <link rel="icon" href="/favicon.ico" />
        </Head> 
        {/* title we used router.query.term using useRouter() so that ti fetches the item we search
        with help of term function and put it on the title bar */}

        {/* Header */}
     

        <Header/>


        {/* Search Results */}

        <SearchResults results={results}/>{/*pass the results from server */}
        </div>
    );
}

export default Search; /*if we add getServerSideProps in our code then only it will treat this page not entire site only this page or the page in which we applied
it as server side render page*/
export async function getServerSideProps(context){
    const useDumyData = false; /* dumy data is added so we dont exhaust or daily qouta */
    const startIndex=context.query.start || "0";
    const data = useDumyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
   /* The link will help in making request to the google using API-KEY and uses CONTEXT_KEY so it knows the which site to search and the query that we entered to search*/
   /* if use dumy data it gonna return response else await */
    ).then(response => response.json());/* Passes the response as json object */

    //After the server has rended ...pass the result to the client

    return{
        props:{
            results:data,
        },
    };


}
