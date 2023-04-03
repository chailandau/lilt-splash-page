import FtImages from '@/components/FtImages'
import PageHead from '@/components/Head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Wrapper from '@/components/Wrapper'


export default function Home() {
  return (
    <>
      <PageHead />
      <Header />
      <main>
        <Hero />
        <FtImages />
      </main>
    </>
  )
}
