import Head from "next/head";
import Script from 'next/script'
import CustomComponents from "../components/custom/Custom-components";

export default function Home() {
   return (
      <div>
         <Script src="//fast.appcues.com/122182.js" />
         <Script id="show-banner">
            {`window.AppcuesSettings = {
         enableURLDetection: true
      };`}
         </Script>
         <Script id="show-banner2">
            {`window.Appcues.identify(
  "122182", // unique, required
  {
    role: "Admin", // Current user’s role or permissions
    accountId: "122182", // Current user's account ID
    firstName: "John", // current user's first name
  }
);`}
         </Script>
         <script ></script>
         <Head>
            <title>Binay Maharjan - A Software Engineer</title>
            <meta
               name="description"
               content="Binay Maharjan - A Software Engineer"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <CustomComponents />
      </div>
   );
}
