import Home from "./Components/Home";

function App() {

  const itineraryData = [
    {
      id: 1,
      place: {
        name: 'Paris',
        country: 'France',
        description: 'The city of love and lights',
        image: 'https://media.istockphoto.com/id/1185953092/photo/the-main-attraction-of-paris-and-all-of-europe-is-the-eiffel-tower-in-the-rays-of-the-setting.jpg?s=612x612&w=0&k=20&c=ZneUFVlR5TPCooxRV1rldUAadqLxZEvOoyVCOrtpcRQ=',
        itineraries: [
          {
            id: 1,
            title: 'Parisian Romance',
            duration: '5',
            activities: ['Eiffel Tower', 'Louvre Museum', 'Champs-Élysées', 'Seine River Cruise']
          },
          {
            id: 2,
            title: 'Paris on a Budget',
            duration: '3',
            activities: ['Notre-Dame', 'Montmartre', 'Picnic at Luxembourg Gardens', 'Free Walking Tour']
          }
        ]
      }
    },
    {
      id: 2,
      place: {
        name: 'Tokyo',
        country: 'Japan',
        description: 'The bustling city of technology and tradition',
        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dG9reW98ZW58MHx8MHx8&w=1000&q=80',
        itineraries: [
          {
            id: 1,
            title: 'Tokyo Adventure',
            duration: '7',
            activities: ['Tokyo Tower', 'Shibuya Crossing', 'Tsukiji Fish Market', 'Robot Restaurant']
          },
          {
            id: 2,
            title: 'Cherry Blossom Season',
            duration: '5',
            activities: ['Ueno Park', 'Shinjuku Gyoen National Garden', 'Chidorigafuchi', 'Sumida River Cruise']
          }
        ]
      }
    },
    {
      id: 3,
      place: {
        name: 'Delhi',
        country: 'India',
        description: 'Delhi offers a vibrant mix of historical landmarks, bustling streets, diverse cultures, and flavorful food.',
        image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/83/e3/1e.jpg',
        itineraries: [
          {
            id: 1,
            title: 'Mughal Places',
            duration: '3',
            activities: ['Taj Mahal', 'Agra Fort', 'Qutub Minar', 'Humayun Tomb', 'Fatehpur Sikhri']
          },
          {
            id: 2,
            title: 'Vibrant Delhi',
            duration: '2',
            activities: ['Connaught Place', 'Secrateriate', 'Parliment', 'India Gate']
          }
        ]
      }
    },
    
    // more places and itineraries...
  ];
  

  return (
    <div className="App">
      <Home data={itineraryData}/>
    </div>
  );
}

export default App;
