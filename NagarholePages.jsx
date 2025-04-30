import React from 'react';

const NagarholePage = () => {
  return (
    <div className="min-h-screen p-8 bg-green-50">
      <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">🌿 Nagarhole Forest</h1>

      <p className="text-lg text-gray-700 mb-6">
        Nagarhole Forest, located in the Kodagu district of Karnataka, is one of India's most famous national parks. Established as a wildlife sanctuary in 1955 and later declared a national park in 1988, it forms part of the larger Nilgiri Biosphere Reserve. The park's name, which translates to "Snake River," refers to the meandering Kabini River that flows through it. Nagarhole is renowned for its diverse wildlife, including Bengal tigers, Indian elephants, leopards, and various species of deer. The park is also home to over 250 species of birds, making it a haven for birdwatchers. Its dense teak and sandalwood forests, combined with the tranquil river, make Nagarhole a beautiful yet wild place. As a key component of India's Project Tiger initiative, it plays a vital role in tiger conservation. Today, Nagarhole remains one of the top destinations for wildlife enthusiasts and photographers.
      </p>

      {/* 🖼️ Photo Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <img
          src="http://coorg.xyz/wp-content/uploads/2014/07/Nagarhole-Route-Map1.png"
          alt="Nagarhole Forest Map"
          className="rounded-lg shadow-lg w-full h-64 object-cover"
        />
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.rPXmIs83TBXLUs-5_PUxUgHaEr&pid=Api&P=0&h=180"
          alt="Wildlife Sanctuary"
          className="rounded-lg shadow-lg w-full h-64 object-cover"
        />
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.wvSWIFCAYp9tj3QuiZvFugHaE8&pid=Api&P=0&h=180"
          alt="River Rafting"
          className="rounded-lg shadow-lg w-full h-64 object-cover"
        />
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.aZ9QcGyFvFCqYgjU1YUEIAHaDt&pid=Api&P=0&h=180"
          alt="Jungle"
          className="rounded-lg shadow-lg w-full h-64 object-cover"
        />
        <img
          src="https://images.ixigo.com/image/upload/t_thumb,f_auto/nagarhole-national-park-images-photos-5134c06a831478369ab3c6ba.jpg"
          alt="Bird Watching"
          className="rounded-lg shadow-lg w-full h-64 object-cover"
        />
        <img
          src="https://bigcatsindia.com/wp-content/uploads/2019/04/NagarholeNationalPark-768x485.jpg"
          alt="Black Panther"
          className="rounded-lg shadow-lg w-full h-64 object-cover"
        />
      </div>
    </div>
  );
};

export default NagarholePage;
