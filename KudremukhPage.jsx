import React from 'react';

const KudremukhPage = () => {
  return (
    <div className="min-h-screen p-8 bg-green-50">
      <h1 className="text-4xl font-bold text-green-700 mb-6">🌿 Kudremukha Forests</h1>

      <p className="text-lg text-gray-700 mb-6">
        Kudremukh Forest, located in the Chikkamagaluru district of Karnataka, is known for its stunning landscapes and biodiversity. The name "Kudremukh" means "horse face" in Kannada, referring to the unique shape of one of its peaks. Initially famous for its rich iron ore deposits, Kudremukh was declared a national park in 1987 to protect its fragile ecosystem. The forest is a part of the Western Ghats, a UNESCO World Heritage Site, and is home to tigers, leopards, Malabar civets, and a variety of endemic birds and plants. The area features thick evergreen forests, grasslands, and beautiful streams. Kudremukh is also a popular trekking destination because of its rolling hills and scenic beauty. Mining activities have been stopped to conserve its environment, making it a key success story in balancing nature and development. Today, Kudremukh stands as a green paradise for nature lovers and adventurers.
      </p>

      {/* 🖼️ Photo Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <img
          src="https://cdn-assets.alltrails.com/static-map/production/best/area/10187222/parks-india-karnataka-kudremukh-national-park-waterfall-10187222-20220911080843000000-763x240-1.png"
          alt="Kudremukh National Park Waterfall"
          className="rounded-lg shadow-lg w-full h-64 object-cover"
        />
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.CGyDip1_ERxPBhiYoTb3kgHaEt&pid=Api&P=0&h=180"
          alt="Wildlife Sanctuary"
          className="rounded-lg shadow-lg w-full h-64 object-cover"
        />
        <img
          src="https://cdn-bbgio.nitrocdn.com/gczrOkaimEMxJOFiDrkhHCxqRwOBQveV/assets/static/optimized/rev-feeb3f7/wp-content/uploads/2018/12/riverwoods_Wildlife_chikamagalur.jpg"
          alt="River Rafting"
          className="rounded-lg shadow-lg w-full h-64 object-cover"
        />
        <img
          src="http://planenews.com/wp-content/uploads/2016/10/kudremukh-national-park-6.jpg"
          alt="Jungle"
          className="rounded-lg shadow-lg w-full h-64 object-cover"
        />
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.LpD3pCy3gagQ3_psrzSfQgHaFk&pid=Api&P=0&h=180"
          alt="Bird Watching"
          className="rounded-lg shadow-lg w-full h-64 object-cover"
        />
        <img
          src="http://manipaltaxi.com/images/bhadra-wildlife-sanctuary.jpg"
          alt="Black Panther"
          className="rounded-lg shadow-lg w-full h-64 object-cover"
        />
      </div>
    </div>
  );
};

export default KudremukhPage;
