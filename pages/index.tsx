import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from '../components/Siderbar'
import Center from '../components/Center'

const Home: NextPage = () => {
	return (
		<div className='bg-black h-screen overflow-hidden'>
					<Head>
						<title>Spotify 2.0</title>
						<meta name='description' content='Spotify clone' />
						<link rel='icon' href='/favicon.ico' />
					</Head>

					<main className='flex'>
						<Sidebar />
						<Center />
					</main>

					<div className='sticky bottom-0 text-white'>
						{/* <Player /> */}
					</div>
		</div>
	)
}

export default Home
