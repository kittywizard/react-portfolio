import 'animate.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';

function App() {

  return (
    <main>
      <Header />
      <Hero/>
      <section className='card-container'>
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  )
}

export default App
