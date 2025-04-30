import React from 'react';

const BandipurPage = () => {
  return (
    <div className="min-h-screen p-8 bg-green-50">
      <h1 className="text-4xl font-bold text-green-700 mb-6">🌳 Bandipur Forest</h1>
      <p className="text-lg text-gray-700 mb-4">
        Bandipur Forest, located in Karnataka, was once the private hunting ground of the Maharajas of Mysore. Established as a protected reserve in 1931, it was later declared a national park in 1974 under Project Tiger to protect India's dwindling tiger population. Spread over 874 square kilometers, Bandipur is part of the Nilgiri Biosphere Reserve, connecting with Nagarhole, Mudumalai, and Wayanad wildlife sanctuaries. The park is home to Bengal tigers, Indian elephants, leopards, and over 200 species of birds. Bandipur enjoys a rich variety of flora, including teak and sandalwood trees. It is one of the first biosphere reserves in India and plays a crucial role in wildlife conservation. Vehicular traffic is strictly controlled here to minimize disturbance to animals. Today, Bandipur stands as a symbol of India's commitment to protecting its natural heritage.
      </p>

      {/* Example Photos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <img
          src="https://4.bp.blogspot.com/_npWFFuYus3I/SfgNtDpF_SI/AAAAAAAAC8Y/RBFgMHL51mI/w1200-h630-p-k-no-nu/Bandipurfinal.jpg"
          alt="Bandipur Forest"
          className="rounded-lg shadow-lg w-full h-64 object-cover"
        />
        <img
          src="https://onlifeandwildlife.files.wordpress.com/2019/10/img_20180714_170751797_hdr.jpg?w=1024"
          alt="Wildlife"
          className="rounded-lg shadow-lg w-full h-64 object-cover"
        />
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.J_SSmsVA0Nqp545Qk7muPwHaDC&pid=Api&P=0&h=180"
          alt="Elephant"
          className="rounded-lg shadow-lg w-full h-64 object-cover"
        />
        <img
          src="https://www.toptourguide.com/images/bindipur-images.jpg"
          alt="Tiger"
          className="rounded-lg shadow-lg w-full h-64 object-cover"
        />
        <img
          src="https://darter.in/wp-content/uploads/2019/09/Bandipur-3.jpg?is-pending-load=1"
          alt="National Park"
          className="rounded-lg shadow-lg w-full h-64 object-cover"
        />
      </div>
    </div>
  );
};

export default BandipurPage;
