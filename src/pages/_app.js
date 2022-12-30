import NextApp from 'next/app';
import '../styles/tailwind.scss'
import { SiteContext, useSiteContext } from 'hooks/use-site';
import { SearchProvider } from 'hooks/use-search';
import NextNProgress from 'nextjs-progressbar';
import variables from 'styles/_variables.module.scss';

// export default function App({ Component, pageProps }) {
//   return (
//     <>
//       <Component {...pageProps} />
//     </>
//   )
// }
function App({ Component, pageProps = {}, metadata, recentPosts, categories, menus }) {
  const site = useSiteContext({
    metadata,
    recentPosts,
    categories,
    menus,
  });

  return (
    <SiteContext.Provider value={site}>
      <SearchProvider>
        <NextNProgress height={4} color={variables.progressbarColor} />
        <Component {...pageProps} />
      </SearchProvider>
    </SiteContext.Provider>
  );
}

export default App;