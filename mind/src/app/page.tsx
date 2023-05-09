//Imports
import Image from 'next/image'
import { Montserrat, Poppins } from 'next/font/google'
import Navbar from './components/navbar'

//Images
import personStudying from './public/person-studying-online.webp'
import dna from './public/DNA.webp'
import mockUp from './public/MockUp.webp'


//Fonts
const montserrat = Montserrat({ subsets: ['latin'] });
const poppins = Poppins({ subsets: ['latin'],  weight: '400', });
//Main Function
export default function Home() {
  return (
    <html>
      <Navbar/>
  
  <div className=" mesh1 h-screen pt-24 lg:pt-0">
    <div className="flex flex-col md:flex-row justify-center max-w-9xl mx-auto my-auto h-screen -translate-y-24">
    <div className="md:w-1/2 flex flex-col justify-center items-center text-white">
      <p className="lg:text-8xl text-6xl font-bold text-center mb-6">Wilkommen bei Mindly</p>
      <p className="lg:text-4xl text-3xl font-bold text-center">Dein Ort zum Unterrichten oder Lesen, egal auf welcher Platform.</p>
    </div>
    <div className="md:w-1/2 flex justify-center items-center">
      <Image
       className="personStudying" 
       src={personStudying}
       alt="Person Studying"
       />
    </div>
    </div>
  </div>
  
<div className="dark:bg-bg1">
  <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl bg-gradient-to-r from-lgBox3Light dark:from-lgBox1 dark:to-lgBox2 to-lgBox4Light rounded-3xl mx-auto items-center justify-center p-6 drop-shadow-2xl -translate-y-36">
    <div className="flex items-start">
      <div className="mr-4 text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">1.</div>
      <a className="text-2xl font-semibold text-white ">Mindly ist auf allen Plattformen optimiert: iOS, Android, Windows und mehr. So sind Ihre Artikel für alle Schüler zugänglich und unabhängig von deren Gerätepräferenzen.</a>
    </div>
      <div className="flex items-start">
        <div className="mr-4 text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">2.</div>
        <p className="text-2xl font-semibold text-white">Konsistente Qualität: Die Qualität Ihrer Artikel wird auf allen Geräten beibehalten, wodurch eine großartige Darstellung Ihrer Inhalte sichergestellt wird.</p>
      </div>
      <div className="flex items-start">
        <div className="mr-4 text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">3.</div>
        <p className="text-2xl font-semibold text-white">Konsistente Qualität Ihrer Artikel auf allen Geräten. Mindly optimiert die Darstellung für alle Plattformen, damit Ihre Inhalte immer zugänglich sind.</p>
      </div>
    </div>
    <p className="text-center lg:text-7xl text-4xl font-bold -translate-y-24 text-black dark:text-white">Entdecke die Vorteile!</p>
    <div>
  
<div className="grid sm:grid-cols-2 lg:grid-cols-3 max-w-screen-2xl mx-auto -translate-y-16">

<div className="shrink-0 hover:shadow-2xl  p-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:scale-105 transition duration-500 dark:bg-bg1 dark:border-gray-700 m-4 flex-none">
    <svg className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>
    <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Einfach aber effektiv</h5>
    </a>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Einfache und intuitive Nutzung der Toolbox: Mindly bietet eine benutzerfreundliche und intuitive Toolbox, die es Lehrkräften ermöglicht, schnell und einfach Artikel zu erstellen.
    </p>
    <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
        Mehr lesen
        <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
    </a> 
</div>

<div className="shrink-0 hover:shadow-2xl p-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:scale-105 transition duration-500 dark:bg-bg1 dark:border-gray-700 m-4">
    <svg className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>
    <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Kompatibilität</h5>
    </a>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Kompatibilität auf allen Plattformen und mobilen Geräten: Die Lernmaterialien auf Mindly sind auf allen Plattformen zugänglich und können auch auf mobilen Geräten wie Smartphones und Tablets genutzt werden. Zudem gibt es eine eigene iOS-App.
  </p>
<a href="#" className="inline-flex items-center text-blue-600 hover:underline">
        Mehr lesen
        <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
    </a>
</div>

<div className="shrink-0 hover:shadow-2xl p-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:scale-105 transition duration-500 dark:bg-bg1 dark:border-gray-700 m-4">
    <svg className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>
    <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Interaktive Elemente einfach gemacht</h5>
    </a>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Interaktive Elemente wie Quizfragen und Umfragen: Mindly bietet Lehrkräften die Möglichkeit, interaktive Elemente wie Quizfragen und Umfragen in ihre Lernmaterialien zu integrieren, um das Engagement der Schüler zu erhöhen.
    </p>
    <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
        Mehr lesen
        <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
    </a>
</div>

<div className="shrink-0 hover:shadow-2xl p-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:scale-105 transition duration-500 dark:bg-bg1 dark:border-gray-700 m-4">
    <svg className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>
    <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Ansprechende Gestaltung</h5>
    </a>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Ansprechende Gestaltung der Lernmaterialien: Die Lernmaterialien auf Mindly sind ansprechend gestaltet und können das Interesse der Schüler steigern.</p>
    <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
        Mehr lesen
        <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
    </a>
</div>

<div className="shrink-0 hover:shadow-2xl p-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:scale-105 transition duration-500 dark:bg-bg1 dark:border-gray-700 m-4">
    <svg className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>
    <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Interaktiv</h5>
    </a>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Wir biten die Möglichkeit, Lerninhalte spielerisch zu vermitteln: Dank der interaktiven Elemente und der ansprechenden Gestaltung können Lehrkräfte Lerninhalte auf spielerische Art und Weise vermitteln.
</p>
<a href="#" className="inline-flex items-center text-blue-600 hover:underline">
        Mehr lesen
        <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
    </a>
</div>

<div className="shrink-0 hover:shadow-2xl p-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:scale-105 transition duration-500 dark:bg-bg1 dark:border-gray-700 m-4">
    <svg className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>
    <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Qualität der Beträge</h5>
    </a>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Fokus auf die Qualität der Inhalte: Mindly übernimmt technische Details, damit Lehrkräfte sich auf die Qualität ihrer Inhalte konzentrieren können.
    </p>
    <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
        Mehr lesen
        <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
    </a>
</div> 
</div>
  

    </div>  
  </div>


  <div className="h-full dark:bg-bg1">
    <p className="text-center text-4xl lg:text-7xl font-bold text-black dark:text-white break-words" >Beispielbeiträge:</p>
    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 mx-auto max-w-7xl py-16">

      <div className="w-96  bg-gradient-to-r from-lgBox3Light dark:from-lgBox2 to-lgBox4Light dark:to-lgBox1 max-h-192 rounded-3xl mx-auto drop-shadow-2xl">
        <div className="p-6">
          <Image 
          src={dna}
          className="rounded-3xl drop-shadow-2xl"
          alt="DNA"
          />
          <p className=" font-bold text-2xl text-white mt-4 poppins.className">DNA-Speicher</p>
          <p className="text-white">DNA-Speicherung könnte die Zukunft des Speicherns von Daten sein, da es eine extrem effektive und stromsparende Lösung bietet und große Firmen wie Microsoft und Google sowie Forschungsinstitute intensiv daran arbeiten, die Produktion zu verbessern.</p>
          <div className="text-center p-4 bg-purple-500 rounded-2xl shadow-xl transition duration-500 hover:bg-cyan-500 hover:shadow-cyan-500/50">
            <a href="dna.html" className="text-white font-bold">Mehr lesen</a>
          </div>
        </div>
      </div>

      <div className="w-96  bg-gradient-to-r from-lgBox3Light dark:from-lgBox2 to-lgBox4Light dark:to-lgBox1 max-h-192 rounded-3xl mx-auto drop-shadow-2xl">
        <div className="p-6">
        <Image 
          src={dna}
          className="rounded-3xl drop-shadow-2xl"
          alt="DNA"
          />       
          <p className="font-bold text-2xl text-white mt-4">DNA-Speicher</p>
          <p className="text-white">DNA-Speicherung könnte die Zukunft des Speicherns von Daten sein, da es eine extrem effektive und stromsparende Lösung bietet und große Firmen wie Microsoft und Google sowie Forschungsinstitute intensiv daran arbeiten, die Produktion zu verbessern.</p>
          <div className="text-center p-4 bg-purple-500 rounded-2xl shadow-xl transition duration-500 hover:bg-cyan-500 hover:shadow-cyan-500/50">
            <a href="dna.html" className="text-white font-bold">Mehr lesen</a>
          </div>
        </div>
      </div>

      <div className="w-96 transition duration-500 hover:scale-105  bg-gradient-to-r from-lgBox3Light dark:from-lgBox2 to-lgBox4Light dark:to-lgBox1 max-h-192 rounded-3xl mx-auto">
        <div className="p-6">
        <Image 
          src={dna}
          className="rounded-3xl drop-shadow-2xl"
          alt="DNA"
          />
          <p className="font-bold text-2xl text-white mt-4">DNA-Speicher</p>
          <p className="text-white">DNA-Speicherung könnte die Zukunft des Speicherns von Daten sein, da es eine extrem effektive und stromsparende Lösung bietet und große Firmen wie Microsoft und Google sowie Forschungsinstitute intensiv daran arbeiten, die Produktion zu verbessern.</p>
          <div className="text-center p-4 bg-purple-500 rounded-2xl shadow-xl transition duration-500 hover:bg-cyan-500 hover:shadow-cyan-500/50">
            <a href="dna.html" className="text-white font-bold">Mehr lesen</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className=" items-center mesh4">
    <div className="flex flex-col lg:flex-row max-w-9xl mx-auto ">
    <div className="lg:pt-24 pt-6 px-2">
    <div className=" bg-blue-900 bg-opacity-70  dark:bg-opacity-60 backdrop-filter backdrop-blur-md p-6 max-w-5xl mx-auto rounded-3xl">
    <p className="text-center text-4xl lg:text-7xl font-bold text-white dark:text-white break-words">Demnächst verfügbar!</p>
    <p className="text-2xl text-purpleTXT pt-4">Wir arbeiten momentan hart daran, dass wir alles veröffentlichen aber gutes braucht halt seine Zeit.
      In der Zwischenzeit kannst du dir gerne das Infoblatt für mindly durchlesen um zu verstehn, wofür wir genau da sind und was für einen mehrwert wir für dich bringen können.
      Zögere nicht bei fragen und zu schreiben, wir sind gerne für dich da.</p>
    </div>
    </div>
    <Image 
        src={mockUp}
        className="lg:w-1/2 w-screen "
        alt="DNA"

          />
           </div>
  </div>



    
  <footer className="bg-gradient-to-r from-purple-600 to-purple-800">
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2">
          <h2 className="text-white text-xl font-bold">Mindly</h2>
          <p className="text-gray-300 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in ullamcorper metus, eget vehicula risus.</p>
        </div>
        <div className="md:col-span-2 flex flex-col justify-between">
          <div className="mt-4 md:mt-0">
            <h3 className="text-white text-lg font-semibold">Links</h3>
            <ul className="mt-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-white text-lg font-semibold">Social Media</h3>
            <ul className="mt-2 flex space-x-4">
              <li><a href="#"><i className="fab fa-facebook-f text-gray-300 hover:text-white"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter text-gray-300 hover:text-white"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram text-gray-300 hover:text-white"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>

</html>


    )}