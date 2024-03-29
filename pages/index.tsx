import List from '@/components/list'
import Banner from '@/components/banner'
import Header from '@/components/header'
import { Movie } from '@/typings'
import requests from '@/utils/request'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { useEffect } from 'react'


interface Props {
  netflixOriginals: Movie[],
  trendingNow: Movie[],
  topRated: Movie[],
  actionMovies: Movie[],
  comedyMovies: Movie[],
  horrorMovies: Movie[],
  romanceMovies: Movie[],
  documentaries: Movie[],
}

const Home = ({
  netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow
}: Props) => {


  return (
    <div className={`relative h-screen bg-gradient-to-b lg:h-[140vh]`}>
      <Head>
        <title>Netflix | Home</title>
      </Head>
      {/* header  */}
      <Header />
      <main>
        {/* Banner  */}
        <Banner netflixOriginals={netflixOriginals} />
        {/* Rows */}
        <section className="md:space-y-24">
          <List title="Trending Now" movies={trendingNow} />
          <List title="Top Rated" movies={topRated} />
          <List title="Action Thrillers" movies={actionMovies} />
          {/* My List Component */}
          {/* {list.length > 0 && <List title="My List" movies={list} />} */}
          <List title="Comedies" movies={comedyMovies} />
          <List title="Scary Movies" movies={horrorMovies} />
          <List title="Romance Movies" movies={romanceMovies} />
          <List title="Documentaries" movies={documentaries} />
        </section>
      </main>
    </div>
  )




}
export default Home;
export const getServerSideProps = async () => {
  try {
    const [
      netflixOriginals,
      trendingNow,
      topRated,
      actionMovies,
      comedyMovies,
      horrorMovies,
      romanceMovies,
      documentaries,
    ] = await Promise.all([
      fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
      fetch(requests.fetchTrending).then((res) => res.json()),
      fetch(requests.fetchTopRated).then((res) => res.json()),
      fetch(requests.fetchActionMovies).then((res) => res.json()),
      fetch(requests.fetchComedyMovies).then((res) => res.json()),
      fetch(requests.fetchHorrorMovies).then((res) => res.json()),
      fetch(requests.fetchRomanceMovies).then((res) => res.json()),
      fetch(requests.fetchDocumentaries).then((res) => res.json()),
    ]);


    return {
      props: {
        netflixOriginals: netflixOriginals.results,
        trendingNow: trendingNow.results,
        topRated: topRated.results,
        actionMovies: actionMovies.results,
        comedyMovies: comedyMovies.results,
        horrorMovies: horrorMovies.results,
        romanceMovies: romanceMovies.results,
        documentaries: documentaries.results,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {},
    };
  }
};
