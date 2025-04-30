import React from 'react';

const DandeliPage = () => {
  return (
    <div className="min-h-screen p-8 bg-green-50">
      <h1 className="text-4xl font-bold text-green-700 mb-6">🌿 Dandeli Wildlife Sanctuary</h1>

      <p className="text-lg text-gray-700 mb-6">
        Dandeli Forest, located in Uttara Kannada district of Karnataka, is known for its lush greenery and rich wildlife. It was declared a wildlife sanctuary in 1956 and later became part of the Dandeli-Anshi Tiger Reserve. The forests of Dandeli are a mix of dense deciduous trees and bamboo, making it a perfect home for black panthers, tigers, elephants, and the rare Malabar giant squirrel. Dandeli is also famous for birdwatching, with over 300 species of birds, including the majestic hornbills. The Kali River, flowing through the sanctuary, adds to its scenic beauty and adventure opportunities like river rafting. Historically, Dandeli was important for timber and paper industries. Today, it plays a major role in eco-tourism and conservation efforts in Karnataka. Its untouched wilderness makes it a paradise for nature lovers and adventure seekers.
      </p>

      {/* 🖼️ Photo Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <img
          src="https://i.ytimg.com/vi/TBwNNGXjKVM/maxresdefault.jpg"
          alt="Dandeli Forest"
          className="rounded-lg shadow-lg w-full h-64 object-cover"
        />
        <img
          src="https://i1.wp.com/kaziranganationalparkassam.in/wp-content/uploads/2021/07/IMG-20210711-WA0007.jpg?resize=1024%2C768&ssl=1"
          alt="Wildlife Sanctuary"
          className="rounded-lg shadow-lg w-full h-64 object-cover"
        />
        <img
          src="https://cdn.pixabay.com/photo/2020/03/27/04/16/dandeli-4972457_1280.jpg"
          alt="River Rafting"
          className="rounded-lg shadow-lg w-full h-64 object-cover"
        />
        <img
          src="https://dandelikaliadventure.com/wp-content/uploads/2021/11/sykes-point-dandeli-header.jpg"
          alt="Jungle"
          className="rounded-lg shadow-lg w-full h-64 object-cover"
        />
        <img
          src="https://www.holidify.com/images/cmsuploads/compressed/Sathodi_Falls_20200406142637.JPG"
          alt="Bird Watching"
          className="rounded-lg shadow-lg w-full h-64 object-cover"
        />
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.Y5DxIcMupG_SU--RU6UkaAAAAA&pid=Api&P=0&h=180"
          alt="Black Panther"
          className="rounded-lg shadow-lg w-full h-64 object-cover"
        />
      </div>
    </div>
  );
};

export default DandeliPage;
