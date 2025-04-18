// // export const beachStates = [
// //   {
// //     name: 'Goa',
// //     description: 'Famous for its vibrant beaches and nightlife',
// //     coordinates: { x: 28, y: 70 },
// //     region: 'West India',
// //     highlights: ['Calangute Beach', 'Baga Beach', 'Anjuna Beach'],
// //     beaches: [
// //       {
// //         name: 'Calangute Beach',
// //         description: 'Known as the Queen of Beaches, Calangute is the largest beach in North Goa. Perfect for swimming and sunbathing, it offers various water sports activities.',
// //         image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
// //         embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31102.473950142456!2d73.73972341755676!3d15.552992841903748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe69fae4e1e7a1%3A0xa1549e15e2aa3c2d!2sCalangute%20Beach!5e0!3m2!1sen!2sin!4v1708368657593',
// //         "latitude": 15.5524, "longitude": 73.7551

// //       },
// //       {
// //         name: 'Baga Beach',
// //         description: 'Famous for its nightlife and water sports, Baga Beach is one of the most popular beaches in Goa. It\'s known for parasailing and jet skiing.',
// //         image: 'https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?ixlib=rb-4.0.3',
// //         embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.8345800306825!2d73.74165467608402!3d15.55242078529744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe69fae4e1e7a1%3A0x3be3e61c423b6d6b!2sBaga%20Beach!5e0!3m2!1sen!2sin!4v1708368691231',
// //         "latitude": 15.5524, "longitude": 73.7516
// //       },
// //       {
// //         name: 'Anjuna Beach',
// //         description: 'Popular for its Wednesday flea market and trance parties, Anjuna Beach features unique rock formations and clear waters.',
// //         image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
// //         embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.6542704521015!2d73.73893417608429!3d15.581948985295364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe69f17e20e7a1%3A0xc5e90e665e70a1e9!2sAnjuna%20Beach!5e0!3m2!1sen!2sin!4v1708368725015',"latitude": 15.5873, "longitude": 73.7437 
// //       }
// //     ]
// //   },
// //   {
// //     name: 'Kerala',
// //     description: 'Known for serene backwaters and pristine beaches',
// //     coordinates: { x: 32, y: 85 },
// //     region: 'South India',
// //     highlights: ['Varkala Beach', 'Kovalam Beach', 'Marari Beach'],
// //     beaches: [
// //       {
// //         name: 'Varkala Beach',
// //         description: 'A scenic beach with dramatic cliffs and clear waters, perfect for swimming and sunbathing.',
// //         image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
// //         embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.986748907227!2d76.68343627605962!3d8.737879591464123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05df97f447d5e5%3A0x1a8e6365b57f79f1!2sVarkala%20Beach!5e0!3m2!1sen!2sin!4v1708368799093',"latitude": 8.7379, "longitude": 76.7163
        
// //       },
// //       {
// //         name: 'Kovalam Beach',
// //         description: 'Famous for its crescent-shaped beaches and lighthouse, offering excellent opportunities for surfing.',
// //         image: 'https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?ixlib=rb-4.0.3',
// //         embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.986748907227!2d76.97849437605962!3d8.737879591464123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05df98a9f53c97%3A0x3f20b3f73917c3fa!2sKovalam%20Beach!5e0!3m2!1sen!2sin!4v1708368843211',"latitude": 8.4003, "longitude": 76.9787
// //       }
// //     ]
// //   },
// //   {
// //     name: 'Maharashtra', 
// //     description: 'Home to beautiful Konkan coast beaches',
// //     coordinates: { x: 32, y: 60 },
// //     region: 'West India',
// //     highlights: ['Alibaug Beach', 'Ganpatipule Beach', 'Tarkarli Beach'],
// //     beaches: [
// //       {
// //         name: 'Alibaug Beach',
// //         description: 'A historic beach town known for its clean shores and fort views.',
// //         image: 'https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?ixlib=rb-4.0.3',
// //         embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15085.685635587707!2d72.86785514999999!3d18.641400600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8f0425974a0c7%3A0xc8ea58b3bb7fd9a8!2sAlibaug%20Beach!5e0!3m2!1sen!2sin!4v1708339200000',"latitude": 18.6411, "longitude": 72.8722

// //       },
// //       {
// //         name: 'Tarkarli Beach',
// //         description: 'Famous for its white sands and crystal clear waters, perfect for snorkeling and scuba diving.',
// //         image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?ixlib=rb-4.0.3',
// //         embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15331.312896097465!2d73.48749454999999!3d16.0419934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe48f16d0269c7%3A0xc10d99781cc78e75!2sTarkarli%20Beach!5e0!3m2!1sen!2sin!4v1708372200000',"latitude": 16.0411, "longitude": 73.4633

        
// //       }
// //     ]
// //   },
// //   {
// //     name: 'Gujarat',
// //     description: 'Features some of the longest coastlines in India',
// //     coordinates: { x: 22, y: 45 },
// //     region: 'West India',
// //     highlights: ['Diu Beach', 'Somnath Beach', 'Mandvi Beach'],
// //     beaches: [
// //       {
// //         name: 'Diu Beach',
// //         description: 'A peaceful beach known for its Portuguese architecture and water sports.',
// //         image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
// //         embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59713.83249357943!2d70.83944474863281!3d20.70557329999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be31d327d33fb75%3A0x16e3d4d4e5308b31!2sNagoa%20Beach%20-%20Diu!5e0!3m2!1sen!2sin!4v1739988237373!5m2!1sen!2sin',"latitude": 20.7140, "longitude": 70.9879
// //       }
// //     ]
// //   },
// //   {
// //     name: 'Tamil Nadu',
// //     description: 'Rich in cultural heritage with beautiful coastal areas',
// //     coordinates: { x: 38, y: 88 },
// //     region: 'South India',
// //     highlights: ['Marina Beach', 'Mahabalipuram Beach', 'Kanyakumari Beach'],
// //     beaches: [
// //       {
// //         name: 'Marina Beach',
// //         description: 'One of the longest urban beaches in the world, famous for its sunrise views.',
// //         image: 'https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?ixlib=rb-4.0.3',
// //         embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.760290789682!2d80.280711!3d13.046754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267d2b1e1f1b1%3A0x8f8e0b8e0b8e0b8e!2sMarina%20Beach!5e0!3m2!1sen!2sin!4v1708372200000',"latitude": 13.0500, "longitude": 80.2824

// //       }
// //     ]
// //   },
// //   {
// //     name: 'Andhra Pradesh',
// //     description: 'Known for its pristine and less crowded beaches',
// //     coordinates: { x: 45, y: 75 },
// //     region: 'South India',
// //     highlights: ['Rishikonda Beach', 'Ramakrishna Beach', 'Yarada Beach'],
// //     beaches: [
// //       {
// //         name: 'Rishikonda Beach',
// //         description: 'Known as the Jewel of the East Coast, perfect for surfing and swimming.',
// //         image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?ixlib=rb-4.0.3',
// //         embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.0000000000005!2d83.00000000000001!3d17.000000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a394313d6e6e6e6%3A0x7e7e7e7e7e7e7e7e!2sRishikonda%20Beach!5e0!3m2!1sen!2sin!4v1708372200000',"latitude": 17.7583, "longitude": 83.3689 

// //       }
// //     ]
// //   },
// //   {
// //     name: 'Odisha',
// //     description: 'Features serene beaches and rich cultural heritage',
// //     coordinates: { x: 58, y: 62 },
// //     region: 'East India',
// //     highlights: ['Puri Beach', 'Chandipur Beach', 'Gopalpur Beach'],
// //     beaches: [
// //       {
// //         name: 'Puri Beach',
// //         description: 'Famous for its religious significance and golden sands.',
// //         image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?ixlib=rb-4.0.3',
// //         embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.0000000000005!2d85.00000000000001!3d19.000000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a394313d6e6e6e6%3A0x7e7e7e7e7e7e7e7e!2sPuri%20Beach!5e0!3m2!1sen!2sin!4v1708372200000',
// //         "latitude": 19.7983,
// //         "longitude": 85.8274

// //       }
// //     ]
// //   },
// //   {
// //     name: 'Karnataka',
// //     description: 'Home to pristine beaches and rich marine life',
// //     coordinates: { x: 30, y: 75 },
// //     region: 'South India',
// //     highlights: ['Om Beach', 'Murudeshwara Beach', 'Gokarna Beach'],
// //     beaches: [
// //       {
// //         name: 'Om Beach',
// //         description: 'Named for its Om-shaped shoreline, known for its scenic beauty and water sports.',
// //         image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?ixlib=rb-4.0.3',
// //         embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.760290789682!2d74.314182!3d14.525516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf7b1e1e1e1e1e%3A0x2e2e2e2e2e2e2e2e!2sOm%20Beach!5e0!3m2!1sen!2sin!4v1708372200000',"latitude": 14.5146, "longitude": 74.3220 

// //       }
// //     ]
// //   },
// //   {
// //     name: 'West Bengal',
// //     description: 'Features unique delta region beaches',
// //     coordinates: { x: 68, y: 50 },
// //     region: 'East India',
// //     highlights: ['Digha Beach', 'Mandarmani Beach', 'Bakkhali Beach'],
// //     beaches: [
// //       {
// //         name: 'Digha Beach',
// //         description: 'One of the widest beaches in West Bengal, known for its gentle slope.',
// //         image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?ixlib=rb-4.0.3',
// //         embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.0000000000005!2d87.00000000000001!3d21.000000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a394313d6e6e6e6%3A0x7e7e7e7e7e7e7e7e!2sDigha%20Beach!5e0!3m2!1sen!2sin!4v1708372200000',"latitude": 21.6270, "longitude": 87.5242

// //       }
// //     ]
// //   }
// // ];


// export const beachStates = [
//   {
//     name: 'Goa',
//     description: 'Famous for its vibrant beaches and nightlife',
//     coordinates: { x: 28, y: 70 },
//     region: 'West India',
//     highlights: ['Calangute Beach', 'Baga Beach', 'Anjuna Beach'],
//     beaches: [
//       [
//         {
//           name: 'Calangute Beach',
//           Review: 'Suitable for families, casual tourists, beach lovers, shopping enthusiasts.',
//           description: 'Calangute Beach, often referred to as the "Queen of Beaches," is one of the most popular destinations in North Goa. Known for its expansive golden sands and vibrant atmosphere, it offers a range of water sports, bustling markets, and a lively nightlife scene, attracting tourists from around the world.\n\nFamous Places Near Calangute Beach:\n\n1. Baga Beach: Located just north of Calangute, Baga Beach is renowned for its energetic nightlife, water sports, and beachside shacks. Latitude: 15.5524, Longitude: 73.7516.\n\n2. Anjuna Flea Market: A vibrant market held every Wednesday, offering a variety of goods from clothing to handicrafts. Latitude: 15.5873, Longitude: 73.7436.\n\n3. Fort Aguada: A 17th-century Portuguese fort offering panoramic views of the Arabian Sea. Latitude: 15.4925, Longitude: 73.7735.\n\n4. Chapora Fort: Famous for its scenic views and Bollywood connections, it offers a panoramic vista of the surrounding coastline. Latitude: 15.6046, Longitude: 73.7445.\n\n5. St. Alex Church: Known for its distinctive architecture and calm ambiance, this is one of the oldest churches in Goa. Latitude: 15.5403, Longitude: 73.7625.',
//           famousPlaces: [
//             {
//               name: 'Baga Beach',
//               distance: '2 km',
//               description: 'Popular for nightlife, shacks, and water sports.',
//               image: 'https://images.unsplash.com/photo-1593620529462-619501b0f7f1?ixlib=rb-4.0.3',
              
//             },
//             {
//               name: 'Anjuna Flea Market',
//               distance: '6 km',
//               description: 'Colorful Wednesday market with clothes, jewelry, and more.',
//               image: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Anjuna_Flea_Market_Goa.jpg'
//             },
//             {
//               name: 'Fort Aguada',
//               distance: '8 km',
//               description: 'Historic Portuguese fort with sea views.',
//               image: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Fort_Aguada_Goa.jpg'
//             },
//             {
//               name: 'Chapora Fort',
//               distance: '10 km',
//               description: 'Popular viewpoint and historic fort.',
//               image: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Chapora_Fort.jpg'
//             },
//             {
//               name: 'St. Alex Church',
//               distance: '1.5 km',
//               description: 'Iconic white church with classic Goan architecture.',
//               image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/St_Alex_Church_Calangute_Goa.jpg'
//             }
//           ],
//           activities: [
//             {
//               name: 'Jet Skiing',
//               price: '₹1,000 per ride',
//               image: 'https://images.unsplash.com/photo-1584277260742-332ff69f2c3a'
//             },
//             {
//               name: 'Parasailing',
//               price: '₹1,500 for 15 mins',
//               image: 'https://images.unsplash.com/photo-1571066811602-716837b2b536'
//             },
//             {
//               name: 'Banana Boat Ride',
//               price: '₹800 per person',
//               image: 'https://images.unsplash.com/photo-1584963717557-3baf3df42b18'
//             }
//           ],
//           image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
//           embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31102.473950142456!2d73.73972341755676!3d15.552992841903748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe69fae4e1e7a1%3A0xa1549e15e2aa3c2d!2sCalangute%20Beach!5e0!3m2!1sen!2sin!4v1708368657593',
//           latitude: 15.5524,
//           longitude: 73.7551
//         },
//         {
//           name: 'Baga Beach',
//           Review: 'Suitable for partygoers, adventure seekers, nightlife lovers, water sports enthusiasts.',
//           description: 'Baga Beach is a vibrant coastal destination in North Goa, renowned for its lively nightlife, water sports, and bustling shacks. It offers a perfect blend of relaxation and adventure, attracting tourists from around the world.\n\nFamous Places Near Baga Beach:\n\n1. Anjuna Flea Market: A lively marketplace filled with local crafts, clothes, and food. Latitude: 15.5873, Longitude: 73.7436.\n\n2. Calangute Beach: A sandy haven for beach lovers and water activities. Latitude: 15.5439, Longitude: 73.7553.\n\n3. Fort Aguada: A sea-facing Portuguese fort with a lighthouse. Latitude: 15.4925, Longitude: 73.7735.\n\n4. Chapora Fort: Scenic location perfect for sunsets and photos. Latitude: 15.6046, Longitude: 73.7445.\n\n5. Saturday Night Market: A popular night market filled with food, music, and shopping. Latitude: 15.5916, Longitude: 73.7759.',
//           famousPlaces: [
//             {
//               name: 'Anjuna Flea Market',
//               distance: '5 km',
//               description: 'Bustling market with a mix of goods and local art.',
//               image: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Anjuna_Flea_Market_Goa.jpg'
//             },
//             {
//               name: 'Calangute Beach',
//               distance: '2 km',
//               description: 'Golden sandy beach with buzzing tourist activity.',
//               image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80'
//             },
//             {
//               name: 'Fort Aguada',
//               distance: '9 km',
//               description: 'Historic fortress overlooking the Arabian Sea.',
//               image: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Fort_Aguada_Goa.jpg'
//             },
//             {
//               name: 'Chapora Fort',
//               distance: '8 km',
//               description: 'Famous viewpoint and historic ruin.',
//               image: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Chapora_Fort.jpg'
//             },
//             {
//               name: 'Saturday Night Market',
//               distance: '3 km',
//               description: 'Colorful evening market with music and local products.',
//               image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Night_market_Goa.jpg'
//             }
//           ],
//           activities: [
//             {
//               name: 'Bumper Ride',
//               price: '₹700 per person',
//               image: 'https://images.unsplash.com/photo-1571085864936-b7d118f99574'
//             },
//             {
//               name: 'Dolphin Watching',
//               price: '₹1,200 per person',
//               image: 'https://images.unsplash.com/photo-1613066497982-ff2ed93e5793'
//             },
//             {
//               name: 'Jet Skiing',
//               price: '₹1,000 per ride',
//               image: 'https://images.unsplash.com/photo-1584277260742-332ff69f2c3a'
//             }
//           ],
//           image: 'https://images.unsplash.com/photo-1593620529462-619501b0f7f1?ixlib=rb-4.0.3',
//           embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.8345800306825!2d73.74165467608402!3d15.55242078529744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe69fae4e1e7a1%3A0x3be3e61c423b6d6b!2sBaga%20Beach!5e0!3m2!1sen!2sin!4v1708368691231',
//           latitude: 15.5524,
//           longitude: 73.7516
//         },
//         {
//           name: 'Anjuna Beach',
//           Review: 'Perfect for backpackers, hippie culture lovers, trance music fans, flea market shoppers.',
//           description: 'Anjuna Beach is one of the most famous beaches in North Goa, known for its stunning rocky coastline, vibrant nightlife, and historic charm. It is a hotspot for backpackers, party lovers, and adventure seekers who visit for its trance parties, lively flea markets, and breathtaking sunset views.',
//           famousPlaces: [
//             {
//               name: 'Curlies Beach Shack',
//               distance: '1 km',
//               description: 'Iconic beach shack known for music and seafood.',
//               image: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Curlies_Anjuna_Goa.jpg'
//             },
//             {
//               name: 'Anjuna Flea Market',
//               distance: '0.5 km',
//               description: 'Goa’s most famous open-air market for local goods.',
//               image: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Anjuna_Flea_Market_Goa.jpg'
//             },
//             {
//               name: 'Chapora Fort',
//               distance: '6 km',
//               description: 'Offers panoramic views of Vagator and nearby beaches.',
//               image: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Chapora_Fort.jpg'
//             },
//             {
//               name: 'Vagator Beach',
//               distance: '5 km',
//               description: 'Scenic and clean beach popular with foreigners.',
//               image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Vagator_Beach.jpg'
//             },
//             {
//               name: 'St. Michael’s Church',
//               distance: '3 km',
//               description: 'One of the oldest churches in Goa, built in 1595.',
//               image: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/St_Michaels_Church_Anjuna.jpg'
//             }
//           ],
//           activities: [
//             {
//               name: 'Trance Parties',
//               price: 'Free / Cover ₹500+',
//               image: 'https://images.unsplash.com/photo-1544435253-0df08e6a3cba'
//             },
//             {
//               name: 'Scuba Diving',
//               price: '₹3,000 per dive',
//               image: 'https://images.unsplash.com/photo-1574185880143-6a2c08c218f4'
//             },
//             {
//               name: 'Snorkeling',
//               price: '₹1,500 per session',
//               image: 'https://images.unsplash.com/photo-1591189023383-d5ee6771fd42'
//             }
//           ],
//           image: 'https://images.unsplash.com/photo-1723141614224-4148b475310e?ixlib=rb-4.0.3',
//           embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.6542704521015!2d73.73893417608429!3d15.581948985295364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe69f17e20e7a1%3A0xc5e90e665e70a1e9!2sAnjuna%20Beach!5e0!3m2!1sen!2sin!4v1708368725015',
//           latitude: 15.5873,
//           longitude: 73.7437
//         }
//       ]      
//     ]
//   },
//   {
//     name: 'Kerala',
//     description: 'Known for serene backwaters and pristine beaches',
//     coordinates: { x: 32, y: 85 },
//     region: 'South India',
//     highlights: ['Varkala Beach', 'Kovalam Beach', 'Marari Beach'],
//     beaches: [
//       {
//         name: 'Varkala Beach',
//         Review: 'Best time to visit: October to March.',
//         description: 'Varkala Beach, also known as Papanasam Beach, is a stunning cliffside beach in Kerala, famous for its natural springs and breathtaking views. It’s a spiritual and scenic destination ideal for rejuvenation and relaxation.\n\nFamous Places Near Varkala Beach:\n\n1. Janardanaswamy Temple: An ancient Hindu temple dedicated to Lord Vishnu, known for its religious significance and coastal views. Latitude: 8.7375, Longitude: 76.7175.\n\n2. Sivagiri Mutt: A spiritual center and the resting place of reformer Sree Narayana Guru, promoting peace and equality. Latitude: 8.7320, Longitude: 76.7232.\n\n3. Anchuthengu Fort: A historical British fort offering sea views and a glimpse into Kerala’s colonial history. Latitude: 8.6510, Longitude: 76.7677.\n\n4. Varkala Cliff: A vibrant spot with cafés and shops lining the red cliffs that overlook the Arabian Sea. Latitude: 8.7382, Longitude: 76.7110.',
//         famousPlaces: [
//           {
//             name: 'Janardanaswamy Temple',
//             description: 'Historic temple dedicated to Lord Vishnu with coastal surroundings.',
//             distance: '2 km',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Janardanaswamy_Temple.jpg'
//           },
//           {
//             name: 'Sivagiri Mutt',
//             description: 'Spiritual pilgrimage center associated with Sree Narayana Guru.',
//             distance: '5 km',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Sivagiri_Mutt_Varkala.jpg'
//           },
//           {
//             name: 'Anchuthengu Fort',
//             description: 'Colonial-era fort with historical significance and sea views.',
//             distance: '12 km',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Anjengo_Fort.jpg'
//           },
//           {
//             name: 'Varkala Cliff',
//             description: 'Scenic red cliffs with cafés, shops, and sea views.',
//             distance: '0.3 km',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Varkala_Cliff_View.jpg'
//           }
//         ],
//         activities: [
//           {
//             name: 'Surfing',
//             price: '₹1,660 per hour',
//             description: 'Ride the waves on the Arabian Sea with surfboard rentals and classes.',
//             image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782'
//           },
//           {
//             name: 'Paragliding',
//             price: '₹4,150 for 30 mins',
//             description: 'Soar above cliffs and ocean with thrilling aerial views.',
//             image: 'https://images.unsplash.com/photo-1509099836639-18ba103c9b08'
//           }
//         ],
//         image: 'https://images.unsplash.com/photo-1732974539647-ec69ccbe3b49?ixlib=rb-4.0.3',
//         embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.986748907227!2d76.68343627605962!3d8.737879591464123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05df97f447d5e5%3A0x1a8e6365b57f79f1!2sVarkala%20Beach!5e0!3m2!1sen!2sin!4v1708368799093',
//         latitude: 8.7379,
//         longitude: 76.6834
//       },
//       {
//         name: 'Marari Beach',
//         Review: 'Best time to visit: September to February.',
//         description: 'Marari Beach is a tranquil beach in Kerala, known for its peaceful atmosphere and traditional fishing villages. It’s an ideal escape from crowds and a place to experience Kerala’s authentic coastal life.\n\nFamous Places Near Marari Beach:\n\n1. Mararikulam Shiva Temple: A revered temple dedicated to Lord Shiva, known for its traditional rituals. Latitude: 9.6035, Longitude: 76.3017.\n\n2. Pathiramanal Island: A scenic island on the Vembanad Lake, rich in birdlife and natural beauty. Latitude: 9.6155, Longitude: 76.3955.\n\n3. Arthunkal Church: A historic Christian pilgrimage site with Portuguese architectural style. Latitude: 9.6070, Longitude: 76.3144.\n\n4. Alleppey Backwaters: A network of serene lagoons and canals, ideal for houseboat experiences. Latitude: 9.4981, Longitude: 76.3388.',
//         famousPlaces: [
//           {
//             name: 'Mararikulam Shiva Temple',
//             description: 'Ancient temple dedicated to Lord Shiva, set in serene surroundings.',
//             distance: '3 km',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Mararikulam_Shiva_Temple.jpg'
//           },
//           {
//             name: 'Pathiramanal Island',
//             description: 'Peaceful island with lush greenery and migratory birds.',
//             distance: '8 km',
//             image: 'https://res.cloudinary.com/dgtguq97k/image/upload/v1744042259/cld-sample-4.jpg'
//           },
//           {
//             name: 'Arthunkal Church',
//             description: 'Prominent Christian pilgrimage site built in Portuguese style.',
//             distance: '7 km',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Arthunkal_Church.jpg'
//           },
//           {
//             name: 'Alleppey Backwaters',
//             description: 'Popular for houseboat cruises and tranquil water channels.',
//             distance: '12 km',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Houseboat_Alleppey_Kerala.jpg'
//           }
//         ],
//         activities: [
//           {
//             name: 'Kayaking',
//             price: '₹1,250 per hour',
//             description: 'Paddle through serene backwaters and enjoy peaceful surroundings.',
//             image: 'https://images.unsplash.com/photo-1586381529947-5237e0c7d3c1'
//           },
//           {
//             name: 'Beach Yoga',
//             price: 'Free',
//             description: 'Rejuvenating yoga sessions on the quiet, clean shoreline.',
//             image: 'https://images.unsplash.com/photo-1535378571741-21f4f8f1d9b9'
//           },
//           {
//             name: 'Fishing Tour',
//             price: '₹1,000 for 2 hours',
//             description: 'Experience traditional fishing techniques with local fishermen.',
//             image: 'https://images.unsplash.com/photo-1572441710565-600c2a3be4ef'
//           },
//           {
//             name: 'Cycling Tour',
//             price: '₹800 for 3 hours',
//             description: 'Ride through coconut groves and coastal villages.',
//             image: 'https://images.unsplash.com/photo-1602526212346-e5f50d4a36ef'
//           }
//         ],
//         image: 'https://images.unsplash.com/photo-1590581553362-1718d635bb7f?ixlib=rb-4.0.3',
//         embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.7649858721546!2d76.30193007606365!3d9.601842593084254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07986f725f85b3%3A0xc8e228dd08f2cd9e!2sMarari%20Beach!5e0!3m2!1sen!2sin!4v1708368823923',
//         latitude: 9.6018,
//         longitude: 76.3019
//       },
      
      
//       {
//         name: 'Kovalam Beach',
//         Review: 'Suitable for Families, honeymooners, water sports enthusiasts (surfing, parasailing, jet skiing).',
//         description: 'Kovalam Beach, located in Kerala, is famous for its crescent-shaped shoreline, lighthouse views, and vibrant beachside activities. It is a popular retreat for families and adventure seekers, offering a tranquil yet lively coastal experience.\n\nFamous Places Near Kovalam Beach:\n\n1. Lighthouse Beach: The most popular stretch in Kovalam, known for its red-and-white striped lighthouse offering panoramic sea views. Latitude: 8.3830, Longitude: 76.9739.\n\n2. Halcyon Castle: A heritage structure turned luxury hotel, showcasing Kerala’s colonial-era architecture. Latitude: 8.3965, Longitude: 76.9778.\n\n3. Vizhinjam Marine Aquarium: A compact aquarium showcasing local marine life, perfect for families and kids. Latitude: 8.3785, Longitude: 76.9823.\n\n4. Vellayani Lake: A peaceful freshwater lake ideal for picnics and evening strolls, just a short drive from the beach. Latitude: 8.4026, Longitude: 76.9975.\n\n5. Padmanabhapuram Palace: A wooden palace complex showcasing traditional Kerala architecture and heritage. Latitude: 8.2438, Longitude: 77.3419.',
//         famousPlaces: [
//           {
//             name: 'Lighthouse Beach',
//             description: 'Popular stretch with a scenic lighthouse offering panoramic coastal views.',
//             distance: '0.5 km',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Lighthouse_Beach_Kovalam.jpg'
//           },
//           {
//             name: 'Halcyon Castle',
//             description: 'Historic royal residence turned luxury heritage hotel.',
//             distance: '2 km',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Halcyon_Castle.jpg'
//           },
//           {
//             name: 'Vizhinjam Marine Aquarium',
//             description: 'Compact aquarium featuring regional marine life exhibits.',
//             distance: '2.5 km',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Vizhinjam_Aquarium.jpg'
//           },
//           {
//             name: 'Vellayani Lake',
//             description: 'Serene freshwater lake ideal for leisure and picnics.',
//             distance: '7 km',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Vellayani_Lake.jpg'
//           },
//           {
//             name: 'Padmanabhapuram Palace',
//             description: 'A grand wooden palace reflecting Kerala’s architectural splendor.',
//             distance: '50 km',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Padmanabhapuram_Palace.jpg'
//           }
//         ],
//         activities: [
//           {
//             name: 'Kayaking',
//             price: '₹1,250 per hour',
//             description: 'Paddle through calm coastal waters for a peaceful ocean adventure.',
//             image: 'https://images.unsplash.com/photo-1586381529947-5237e0c7d3c1'
//           },
//           {
//             name: 'Beach Yoga',
//             price: 'Free',
//             description: 'Join early morning sessions for relaxation with sea breezes.',
//             image: 'https://images.unsplash.com/photo-1535378571741-21f4f8f1d9b9'
//           },
//           {
//             name: 'Surfing Lessons',
//             price: '₹1,650 per hour',
//             description: 'Catch the waves with beginner-friendly surfing tutorials.',
//             image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
//           },
//           {
//             name: 'Parasailing',
//             price: '₹2,000 per ride',
//             description: 'Experience thrilling aerial views of Kovalam’s coastline.',
//             image: 'https://images.unsplash.com/photo-1604928835722-7e7052f2d00d'
//           },
//           {
//             name: 'Jet Skiing',
//             price: '₹2,500 for 15 minutes',
//             description: 'High-speed fun on the waves for adventure lovers.',
//             image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0'
//           }
//         ],
//         image: 'https://images.unsplash.com/photo-1615289139857-99b7eb0702dd?ixlib=rb-4.0.3',
//         embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.986748907227!2d76.97849437605962!3d8.737879591464123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05df98a9f53c97%3A0x3f20b3f73917c3fa!2sKovalam%20Beach!5e0!3m2!1sen!2sin!4v1708368843211',
//         latitude: 8.4003,
//         longitude: 76.9787
//       }      
//     ]
//   },
//   {
//     name: 'Maharashtra', 
//     description: 'Home to beautiful Konkan coast beaches',
//     coordinates: { x: 32, y: 60 },
//     region: 'West India',
//     highlights: ['Alibaug Beach', 'Juhu Beach', 'Tarkarli Beach'],
//     beaches: [
//       [
//         {
//           name: 'Alibaug Beach',
//           Review: 'Ideal for weekend travelers, history lovers, and adventure seekers.',
//           description: 'Alibaug Beach is a popular coastal destination in Maharashtra, known for its black sand shores, scenic views of the Arabian Sea, and proximity to historic forts. The beach is famous for its beautiful sunsets, water sports, and the iconic Kolaba Fort visible during low tide.',
//           famousPlaces: [
//             {
//               name: 'Kolaba Fort',
//               distance: '1.5 km',
//               description: 'A historic 17th-century fort built by Shivaji Maharaj, accessible during low tide by walking across the beach.',
//               image: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Kolaba_Fort_Alibag.jpg'
//             },
//             {
//               name: 'Varsoli Beach',
//               distance: '3 km',
//               description: 'A quieter beach known for its cleanliness and peaceful surroundings, ideal for relaxation.',
//               image: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Varsoli_Beach.jpg'
//             }
//           ],
//           activities: [
//             {
//               name: 'Banana Boat Ride',
//               price: '₹500 per person',
//               description: 'A fun and bumpy water adventure perfect for groups and thrill seekers.',
//               image: 'https://images.unsplash.com/photo-1583337130417-3346a1f59c4b'
//             },
//             {
//               name: 'Jet Skiing',
//               price: '₹700 for 15 minutes',
//               description: 'Experience high-speed excitement over the waves with professional instructors.',
//               image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
//             }
//           ],
//           image: 'https://images.unsplash.com/photo-1474533883693-59a44dbb964e?ixlib=rb-4.0.3',
//           embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15085.685635587707!2d72.86785514999999!3d18.641400600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8f0425974a0c7%3A0xc8ea58b3bb7fd9a8!2sAlibaug%20Beach!5e0!3m2!1sen!2sin!4v1708339200000',
//           latitude: 18.6411,
//           longitude: 72.8722
//         },
//         {
//           name: 'Juhu Beach',
//           Review: 'Best for city dwellers, food lovers, and Bollywood enthusiasts.',
//           description: 'Juhu Beach is one of Mumbai’s most famous beaches, known for its lively atmosphere, street food stalls, and Bollywood celebrity residences nearby. It is a popular spot for locals and tourists to enjoy scenic sunsets and recreational activities.',
//           famousPlaces: [
//             {
//               name: 'ISKCON Temple',
//               distance: '2 km',
//               description: 'A serene and spiritual Hindu temple complex dedicated to Lord Krishna, known for its beautiful architecture.',
//               image: 'https://upload.wikimedia.org/wikipedia/commons/2/25/ISKCON_Temple%2C_Juhu.jpg'
//             },
//             {
//               name: 'Prithvi Theatre',
//               distance: '3.5 km',
//               description: 'A cultural hub for performing arts and theatre enthusiasts, offering regular shows and workshops.',
//               image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Prithvi_Theatre.jpg'
//             }
//           ],
//           activities: [
//             {
//               name: 'Street Food Tasting',
//               price: '₹150 per person',
//               description: 'Try classic Mumbai snacks like pav bhaji, bhel puri, and vada pav along the beach.',
//               image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0'
//             },
//             {
//               name: 'Horse Carriage Ride',
//               price: '₹300 per ride',
//               description: 'Enjoy a leisurely horse-drawn carriage ride along the beach during sunset.',
//               image: 'https://images.unsplash.com/photo-1605460375648-278bcbd579a6'
//             }
//           ],
//           image: 'https://images.unsplash.com/photo-1715227262631-c0f8e0414b81?ixlib=rb-4.0.3',
//           embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30161.16556886536!2d72.80894426955493!3d19.101263254919647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9bf95d4ba07%3A0x35047c9c36b6cea1!2sJuhu%2C%20Mumbai%2C%20Maharashtra%20400049!5e0!3m2!1sen!2sin!4v1742751905418!5m2!1sen!2sin',
//           latitude: 19.0989,
//           longitude: 72.8265
//         },
//         {
//           name: 'Tarkarli Beach',
//           Review: 'Ideal to visit in October to May.',
//           description: 'Tarkarli Beach is a pristine coastal destination in Maharashtra, known for its crystal-clear waters, white sandy shores, and vibrant marine life. It is famous for scuba diving, snorkeling, and houseboat stays along the Karli River.',
//           famousPlaces: [
//             {
//               name: 'Sindhudurg Fort',
//               distance: '7 km',
//               description: 'A 17th-century sea fort built by Shivaji Maharaj, known for its strategic location and architecture.',
//               image: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Sindhudurg_Fort.jpg'
//             },
//             {
//               name: 'Karli River Backwaters',
//               distance: '2.5 km',
//               description: 'A peaceful river stretch offering houseboat rides and stunning sunset views near the beach.',
//               image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Karli_River.jpg'
//             }
//           ],
//           activities: [
//             {
//               name: 'Scuba Diving',
//               price: '₹1500 per person',
//               description: 'Explore the vibrant coral reefs and marine life under the expert guidance of certified instructors.',
//               image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a'
//             },
//             {
//               name: 'Snorkeling',
//               price: '₹800 per person',
//               description: 'Enjoy shallow water marine exploration, ideal for beginners and kids.',
//               image: 'https://images.unsplash.com/photo-1551970634-747846a548cb'
//             }
//           ],
//           image: 'https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?ixlib=rb-4.0.3',
//           embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15331.312896097465!2d73.48749454999999!3d16.0419934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe48f16d0269c7%3A0xc10d99781cc78e75!2sTarkarli%20Beach!5e0!3m2!1sen!2sin!4v1708372200000',
//           latitude: 16.0411,
//           longitude: 73.4633
//         }
//       ]      
//     ]
//   },
//   {
//     name: 'Gujarat',
//     description: 'Features some of the longest coastlines in India',
//     coordinates: { x: 22, y: 45 },
//     region: 'West India',
//     highlights: ['Diu Beach', 'Dwaraka Beach', 'Mandvi Beach'],
//     beaches: [
//       [
//         {
//           name: 'Dwaraka Beach',
//           Review: 'Suitable for Families, Adventure Seekers, Water Sports Enthusiasts, Couples.',
//           description: 'Dwaraka Beach is a sacred and serene coastal destination in Gujarat, located near the famous Dwarkadhish Temple. It is known for its spiritual significance, golden sands, and beautiful sunsets over the Arabian Sea.',
//           image: 'https://images.unsplash.com/photo-1600261006257-2e937f6c025e?ixlib=rb-4.0.3',
//           embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29545.33210331588!2d68.94629307501205!3d22.23376015297856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39569c3a770ffb07%3A0xa58bec5d5f233a0a!2sDwarka%20Beach!5e0!3m2!1sen!2sin!4v1742740230365!5m2!1sen!2sin',
//           latitude: 22.2378,
//           longitude: 68.9627,
//           famousPlaces: [
//             {
//               name: 'Dwarkadhish Temple',
//               distance: '0.5 km',
//               description: 'An ancient Hindu temple dedicated to Lord Krishna, known for its architecture and spiritual aura.',
//               image: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Dwarkadhish_Temple%2C_Dwarka.jpg'
//             },
//             {
//               name: 'Rukmini Devi Temple',
//               distance: '2.3 km',
//               description: 'Dedicated to Krishna’s consort Rukmini, this temple is known for its detailed carvings and peaceful environment.',
//               image: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Rukmini_Devi_Temple%2C_Dwarka.jpg'
//             },
//             {
//               name: 'Sudama Setu',
//               distance: '0.6 km',
//               description: 'A pedestrian bridge over the Gomti river offering great views of the beach and temples.',
//               image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Sudama_Setu_-_Dwarka.jpg'
//             },
//             {
//               name: 'Gomti Ghat',
//               distance: '0.7 km',
//               description: 'A sacred bathing ghat on the banks of the Gomti River, often visited by pilgrims.',
//               image: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Gomti_Ghat%2C_Dwarka.jpg'
//             }
//           ],
//           activities: [
//             {
//               name: 'Camel Ride',
//               price: 'INR 150',
//               description: 'Enjoy a traditional camel ride along the beach at sunset.',
//               image: 'https://images.unsplash.com/photo-1590916971189-31769e7b6f5f'
//             },
//             {
//               name: 'Spiritual Walk',
//               price: 'Free',
//               description: 'Take a calm spiritual walk from Dwarkadhish Temple to the Gomti Ghat.',
//               image: 'https://images.unsplash.com/photo-1532635248-96eecfdfa278'
//             },
//             {
//               name: 'Photography Tour',
//               price: 'INR 300',
//               description: 'Capture scenic shots of temples, ghats, and the Arabian coastline.',
//               image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb'
//             }
//           ]
//         },
//         {
//           name: 'Mandvi Beach',
//           Review: 'Suitable for Pilgrims, Spiritual Travelers, History Enthusiasts, Elderly Visitors.',
//           description: 'Mandvi Beach is a pristine and peaceful beach in Gujarat, known for its golden sands, calm waters, and the historical Vijay Vilas Palace nearby. It is a perfect spot for relaxation and camel rides along the shore.',
//           image: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-4.0.3',
//           embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58835.70632156935!2d69.29546442114406!3d22.830917761700665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395135cfb3ffffff%3A0xb7c3fcf0d26d8510!2sMandvi%20Beach!5e0!3m2!1sen!2sin!4v1742750097365!5m2!1sen!2sin',
//           latitude: 22.8318,
//           longitude: 69.3560,
//           famousPlaces: [
//             {
//               name: 'Vijay Vilas Palace',
//               distance: '6 km',
//               description: 'A grand royal residence with Rajput architecture and scenic gardens.',
//               image: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Vijay_Vilas_Palace_-_Mandvi.jpg'
//             },
//             {
//               name: 'Shipbuilding Yard',
//               distance: '3 km',
//               description: 'Traditional wooden shipbuilding site offering a glimpse into maritime heritage.',
//               image: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Mandvi_Shipyard.jpg'
//             },
//             {
//               name: 'Topansar Lake',
//               distance: '1.5 km',
//               description: 'A quiet freshwater lake ideal for birdwatching and relaxation.',
//               image: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Topansar_Lake.jpg'
//             }
//           ],
//           activities: [
//             {
//               name: 'Camel Safari',
//               price: 'INR 200',
//               description: 'Enjoy a slow ride across the shore on a decorated camel.',
//               image: 'https://images.unsplash.com/photo-1589738896352-3e9f7418769e'
//             },
//             {
//               name: 'Beach Volleyball',
//               price: 'INR 100',
//               description: 'Engage in a fun match of volleyball with fellow beachgoers.',
//               image: 'https://images.unsplash.com/photo-1601134467661-f39d4aa7cc13'
//             },
//             {
//               name: 'Jet Skiing',
//               price: 'INR 500',
//               description: 'Experience high-speed thrills on the calm waters of Mandvi.',
//               image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
//             }
//           ]
//         },
//         {
//           name: 'Diu Beach',
//           Review: 'Best time to visit is October to March, suitable for nature lovers.',
//           description: 'Diu Beach is a serene coastal destination known for its soft golden sands, clear blue waters, and Portuguese-influenced architecture. It offers a mix of relaxation, adventure, and cultural exploration.',
//           image: 'https://images.unsplash.com/photo-1647578178323-0bbc9bd55e73?ixlib=rb-4.0.3',
//           embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59713.83249357943!2d70.83944474863281!3d20.70557329999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be31d327d33fb75%3A0x16e3d4d4e5308b31!2sNagoa%20Beach%20-%20Diu!5e0!3m2!1sen!2sin!4v1739988237373!5m2!1sen!2sin',
//           latitude: 20.7140,
//           longitude: 70.9879,
//           famousPlaces: [
//             {
//               name: 'Diu Fort',
//               distance: '3.5 km',
//               description: 'A majestic Portuguese-era fort with sea-facing ramparts and cannons.',
//               image: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Diu_Fort.jpg'
//             },
//             {
//               name: 'St. Paul\'s Church',
//               distance: '3 km',
//               description: 'One of the best examples of baroque architecture in India, built in the 17th century.',
//               image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/St_Paul%27s_Church%2C_Diu.jpg'
//             },
//             {
//               name: 'Naida Caves',
//               distance: '4 km',
//               description: 'A maze of rock formations and natural caves perfect for photography and exploration.',
//               image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Naida_Caves%2C_Diu.jpg'
//             }
//           ],
//           activities: [
//             {
//               name: 'Parasailing',
//               price: 'INR 600',
//               description: 'Fly high above Diu Beach and enjoy panoramic views.',
//               image: 'https://images.unsplash.com/photo-1611262588035-50f88ef6678f'
//             },
//             {
//               name: 'Banana Boat Ride',
//               price: 'INR 300',
//               description: 'A thrilling group activity on an inflatable banana-shaped boat.',
//               image: 'https://images.unsplash.com/photo-1551617384-5f9a3f4b37a5'
//             },
//             {
//               name: 'Snorkeling',
//               price: 'INR 700',
//               description: 'Explore shallow marine life in the clear blue waters of Diu.',
//               image: 'https://images.unsplash.com/photo-1504609813445-6c91e0a0a1d5'
//             }
//           ]
//         }
//       ]      

//     ]
//   },
//   {
//     name: 'Tamil Nadu',
//     description: 'Rich in cultural heritage with beautiful coastal areas',
//     coordinates: { x: 38, y: 88 },
//     region: 'South India',
//     highlights: ['Marina Beach', 'Mahabalipuram Beach', 'Kanyakumari Beach'],
//     beaches: [
//       {
//         name: 'Marina Beach',
//         Review: 'Best to visit in November – February (Winter).',
//         description: 'Marina Beach in Chennai is one of the longest urban beaches in the world, famous for its golden sands, vibrant atmosphere, and historic landmarks.',
//         image: 'https://images.unsplash.com/photo-1732793080226-48c07917cb27?ixlib=rb-4.0.3',
//         embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.760290789682!2d80.280711!3d13.046754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267d2b1e1f1b1%3A0x8f8e0b8e0b8e0b8e!2sMarina%20Beach!5e0!3m2!1sen!2sin!4v1708372200000',
//         latitude: 13.0500,
//         longitude: 80.2824,
//         famousPlaces: [
//           {
//             name: 'Vivekananda House',
//             distance: '0.5 km',
//             description: 'A historic landmark associated with Swami Vivekananda’s visit to Chennai, showcasing exhibits on his life.',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Vivekanandar_Illam.jpg'
//           },
//           {
//             name: 'Madras University',
//             distance: '0.8 km',
//             description: 'One of the oldest and most prestigious universities in India with colonial architecture.',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/2/29/University_of_Madras.jpg'
//           },
//           {
//             name: 'Lighthouse Chennai',
//             distance: '1 km',
//             description: 'An iconic lighthouse with a viewing gallery offering panoramic views of Marina Beach.',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Marina_beach_Lighthouse.jpg'
//           },
//           {
//             name: 'Government Museum',
//             distance: '3 km',
//             description: 'A vast museum complex showcasing ancient artifacts, sculptures, and natural history exhibits.',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Government_Museum_Chennai.jpg'
//           }
//         ],
//         activities: [
//           {
//             name: 'Horse Riding',
//             price: 'INR 100',
//             description: 'Enjoy short horse rides along the beachside guided by locals.',
//             image: 'https://images.unsplash.com/photo-1533721068194-85e63ae9c3b5?ixlib=rb-4.0.3'
//           },
//           {
//             name: 'Street Food Tasting',
//             price: 'INR 150',
//             description: 'Try popular local snacks like sundal, bhaji, and murukku along the beachfront.',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Sundal.jpg'
//           },
//           {
//             name: 'Kite Flying',
//             price: 'INR 80',
//             description: 'Popular activity especially during weekends with plenty of open space.',
//             image: 'https://images.unsplash.com/photo-1602067792351-e208d3e8058b?ixlib=rb-4.0.3'
//           },
//           {
//             name: 'Photography',
//             price: 'INR 200',
//             description: 'Capture the beautiful views, colonial buildings, and beach activities.',
//             image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3'
//           }
//         ]
//       },
//       {
//         name: 'Mahabalipuram Beach',
//         Review: 'Suitable for History Buffs, Architecture Enthusiasts, Adventure Seekers.',
//         description: 'Mahabalipuram Beach is a picturesque coastal destination known for its ancient rock-cut temples, golden sands, and vibrant cultural heritage.',
//         image: 'https://images.unsplash.com/photo-1708637570263-2a630ffa485e?ixlib=rb-4.0.3',
//         embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31148.1393186157!2d80.17501434125403!3d12.61402484112966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53acaf771807fb%3A0xe8f764e4f0f1ec45!2sMahabalipuram%20Beach!5e0!3m2!1sen!2sin!4v1742753273161!5m2!1sen!2sin',
//         latitude: 12.6208,
//         longitude: 80.1914,
//         famousPlaces: [
//           {
//             name: 'Shore Temple',
//             distance: '0.3 km',
//             description: 'A UNESCO World Heritage Site built during the Pallava dynasty, overlooking the Bay of Bengal.',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Shore_Temple.jpg'
//           },
//           {
//             name: 'Pancha Rathas',
//             distance: '0.9 km',
//             description: 'Monolithic rock-cut temples representing different architectural styles of the Pallavas.',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Pancha_Rathas.jpg'
//           },
//           {
//             name: 'Arjuna’s Penance',
//             distance: '0.8 km',
//             description: 'A massive rock carving depicting scenes from the Mahabharata.',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Arjuna%27s_Penance.JPG'
//           },
//           {
//             name: 'Butter Ball Rock',
//             distance: '1.2 km',
//             description: 'A gravity-defying giant boulder balanced on a slope.',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Krishna%27s_Butterball.jpg'
//           }
//         ],
//         activities: [
//           {
//             name: 'Surfing',
//             price: 'INR 1000',
//             description: 'Ride the waves on this adventure-friendly beach with surfing schools available.',
//             image: 'https://images.unsplash.com/photo-1517638851339-d4aa0e6f1d19?ixlib=rb-4.0.3'
//           },
//           {
//             name: 'Temple Tour',
//             price: 'INR 250',
//             description: 'Explore ancient architecture and sculptures guided by locals.',
//             image: 'https://images.unsplash.com/photo-1581591524229-0d9d441aad44?ixlib=rb-4.0.3'
//           },
//           {
//             name: 'Seafood Feast',
//             price: 'INR 400',
//             description: 'Enjoy freshly caught seafood in shacks and seaside restaurants.',
//             image: 'https://images.unsplash.com/photo-1590080877031-3a2666aeb75e?ixlib=rb-4.0.3'
//           },
//           {
//             name: 'Shopping Handicrafts',
//             price: 'INR 300',
//             description: 'Buy stone carvings and handmade crafts from local markets.',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Mahabalipuram_crafts.jpg'
//           }
//         ]
//       },
//       {
//         name: 'Kanykumari Beach',
//         Review: 'suitable for Pilgrims, Nature Lovers, Sunrise & Sunset Enthusiasts.',
//         description: 'Kanyakumari Beach is a unique coastal destination where the Arabian Sea, Bay of Bengal, and Indian Ocean meet, offering breathtaking sunrise and sunset views.',
//         image: 'https://images.unsplash.com/photo-1573043576848-56250cd36770?ixlib=rb-4.0.3',
//         embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1975.0733171253262!2d77.55297148811968!3d8.08652465352786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04ed310b4e670d%3A0xa41f5be93b4cba9a!2sKanyakumari%20Beach!5e0!3m2!1sen!2sin!4v1742753332120!5m2!1sen!2sin',
//         latitude: 8.0780,
//         longitude: 77.5520,
//         famousPlaces: [
//           {
//             name: 'Vivekananda Rock Memorial',
//             distance: '0.6 km (boat ride)',
//             description: 'A spiritual monument built in honor of Swami Vivekananda situated on a small island.',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Vivekananda_Rock_Memorial_Kanyakumari.jpg'
//           },
//           {
//             name: 'Thiruvalluvar Statue',
//             distance: '0.6 km (boat ride)',
//             description: 'A 133-feet tall statue of the Tamil poet and philosopher Thiruvalluvar.',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Thiruvalluvar_Statue.jpg'
//           },
//           {
//             name: 'Kanyakumari Temple',
//             distance: '0.4 km',
//             description: 'An ancient temple dedicated to the goddess Devi Kanya Kumari.',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Kanyakumari_Amman_Temple.jpg'
//           },
//           {
//             name: 'Gandhi Memorial Mandapam',
//             distance: '0.5 km',
//             description: 'Built in honor of Mahatma Gandhi where his ashes were kept before immersion.',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Gandhi_Memorial_Mandapam_Kanyakumari.jpg'
//           }
//         ],
//         activities: [
//           {
//             name: 'Sunrise Viewing',
//             price: 'Free',
//             description: 'Experience the iconic sunrise over the confluence of three seas.',
//             image: 'https://images.unsplash.com/photo-1603145733144-9c6486df1c35?ixlib=rb-4.0.3'
//           },
//           {
//             name: 'Boating to Rock Memorial',
//             price: 'INR 50',
//             description: 'Take a boat ride to Vivekananda Rock and Thiruvalluvar Statue.',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Kanyakumari_Boat_Jetty.jpg'
//           },
//           {
//             name: 'Photography',
//             price: 'INR 200',
//             description: 'Capture beautiful seascapes and cultural monuments.',
//             image: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?ixlib=rb-4.0.3'
//           },
//           {
//             name: 'Cultural Souvenir Shopping',
//             price: 'INR 300',
//             description: 'Buy conch shells, local crafts, and traditional souvenirs.',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Kanyakumari_Market_Shop.jpg'
//           }
//         ]
//       }
      
//     ]
//   },
//   {
//     name: 'Andhra Pradesh',
//     description: 'Known for its pristine and less crowded beaches',
//     coordinates: { x: 45, y: 75 },
//     region: 'South India',
//     highlights: ['Rishikonda Beach', 'Ramakrishna Beach', 'Yarada Beach'],
//     beaches: [
//       [
//         {
//           name: 'Rishikonda Beach',
//           Review: 'Suitable for Adventure seekers, water sports lovers.',
//           description: 'Rishikonda Beach is a picturesque beach in Visakhapatnam, Andhra Pradesh, known for its golden sands, clear waters, and adventure water sports.',
//           image: 'https://images.unsplash.com/photo-1709531327387-8f206373149b?ixlib=rb-4.0.3',
//           embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.0000000000005!2d83.00000000000001!3d17.000000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a394313d6e6e6e6%3A0x7e7e7e7e7e7e7e7e!2sRishikonda%20Beach!5e0!3m2!1sen!2sin!4v1708372200000',
//           latitude: 17.7583,
//           longitude: 83.3689,
//           famousPlaces: [
//             {
//               name: 'Kailasagiri',
//               distance: '9 km',
//               description: 'A scenic hilltop park offering panoramic views of the coastline, famous for the giant Shiva-Parvati statue.',
//               image: 'https://images.unsplash.com/photo-1617105292662-c3261f03f6a5?ixlib=rb-4.0.3'
//             },
//             {
//               name: 'INS Kursura Submarine Museum',
//               distance: '11 km',
//               description: 'A real submarine turned museum, showcasing life and operations inside a naval submarine.',
//               image: 'https://images.unsplash.com/photo-1648050143056-14e6c5e83937?ixlib=rb-4.0.3'
//             },
//             {
//               name: 'Tenneti Park',
//               distance: '10 km',
//               description: 'A beachfront park with lush greenery, ocean views, and a favorite spot for photography.',
//               image: 'https://images.unsplash.com/photo-1622199021482-0f8d54349e69?ixlib=rb-4.0.3'
//             },
//             {
//               name: 'Indira Gandhi Zoological Park',
//               distance: '13 km',
//               description: 'A large zoo nestled in forested hills, home to diverse flora and fauna.',
//               image: 'https://images.unsplash.com/photo-1626337189432-134f4a60d570?ixlib=rb-4.0.3'
//             }
//           ],
//           activities: [
//             {
//               name: 'Jet Skiing',
//               price: 'INR 600',
//               description: 'Experience the thrill of speeding through the waves on a high-powered jet ski.',
//               image: 'https://images.unsplash.com/photo-1621161475675-63015c3ff59c?ixlib=rb-4.0.3'
//             },
//             {
//               name: 'Banana Boat Ride',
//               price: 'INR 400',
//               description: 'A fun and bumpy ride across the surf on an inflatable banana-shaped boat.',
//               image: 'https://images.unsplash.com/photo-1620750439295-ff1c2e3c882d?ixlib=rb-4.0.3'
//             },
//             {
//               name: 'Parasailing',
//               price: 'INR 800',
//               description: 'Fly high above the beach while being towed by a speedboat for panoramic views.',
//               image: 'https://images.unsplash.com/photo-1602405698420-d2d96d1b33e2?ixlib=rb-4.0.3'
//             },
//             {
//               name: 'Beach Volleyball',
//               price: 'INR 150',
//               description: 'Enjoy a friendly game of volleyball with fellow beachgoers.',
//               image: 'https://images.unsplash.com/photo-1567773549014-8be1d0c6cd32?ixlib=rb-4.0.3'
//             }
//           ]
//         },
      
//         {
//           name: 'Ramakrishna Beach',
//           Review: 'Suitable for Families, casual visitors, photographers, food lovers, best time to visit November to February.',
//           description: 'Ramakrishna Beach, located in Visakhapatnam, is a popular beach known for its scenic beauty, peaceful atmosphere, and vibrant promenade.',
//           image: 'https://images.unsplash.com/photo-1582597000839-e3a4274f8753?ixlib=rb-4.0.3',
//           embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15202.610920872668!2d83.31433457105457!3d17.713857772187488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39436f113dca6d%3A0xd76a1de2271dff26!2sRamakrishna%20Beach!5e0!3m2!1sen!2sin!4v1742753668129',
//           latitude: 17.7175,
//           longitude: 83.3442,
//           famousPlaces: [
//             {
//               name: 'Victory at Sea War Memorial',
//               distance: '0.5 km',
//               description: 'A tribute to the Indian Navy’s victory in the 1971 war with Pakistan, located right on the beach road.',
//               image: 'https://images.unsplash.com/photo-1626369478834-bdf31406a4d0?ixlib=rb-4.0.3'
//             },
//             {
//               name: 'Visakha Museum',
//               distance: '1 km',
//               description: 'A maritime and historical museum showcasing artifacts, models, and naval memorabilia.',
//               image: 'https://images.unsplash.com/photo-1539581240941-98f14ec1eebd?ixlib=rb-4.0.3'
//             },
//             {
//               name: 'VUDA Park',
//               distance: '2 km',
//               description: 'A well-maintained park with skating rink, musical fountain, and children’s play area.',
//               image: 'https://images.unsplash.com/photo-1620977162181-612cb67e6908?ixlib=rb-4.0.3'
//             },
//             {
//               name: 'AU Convention Center',
//               distance: '3.5 km',
//               description: 'A major venue for events and exhibitions near the beach.',
//               image: 'https://images.unsplash.com/photo-1587573089271-552eb3d253a3?ixlib=rb-4.0.3'
//             }
//           ],
//           activities: [
//             {
//               name: 'Street Food Tasting',
//               price: 'INR 200',
//               description: 'Savor local delights like murri mixture, pani puri, and masala corn from beachside stalls.',
//               image: 'https://images.unsplash.com/photo-1551506448-94fc2f2d66ab?ixlib=rb-4.0.3'
//             },
//             {
//               name: 'Camel Rides',
//               price: 'INR 150',
//               description: 'Enjoy a short ride along the shore on a decorated camel.',
//               image: 'https://images.unsplash.com/photo-1615474711801-ecba154bc5c5?ixlib=rb-4.0.3'
//             },
//             {
//               name: 'Sunset Photography',
//               price: 'Free',
//               description: 'Capture the beautiful sunset views with the sea and city in the backdrop.',
//               image: 'https://images.unsplash.com/photo-1572997499733-6bb8daba2053?ixlib=rb-4.0.3'
//             },
//             {
//               name: 'Promenade Walk',
//               price: 'Free',
//               description: 'Take a peaceful walk along the vibrant and clean beachfront promenade.',
//               image: 'https://images.unsplash.com/photo-1610450034763-63f68e3cf158?ixlib=rb-4.0.3'
//             }
//           ]
//         },
      
//         {
//           name: 'Yarada Beach',
//           Review: 'Suitable for Peace seekers, nature lovers, couples, photographers.',
//           description: 'Yarada Beach, located near Visakhapatnam, is a secluded and pristine beach surrounded by lush green hills, offering a serene escape from the city.',
//           image: 'https://images.unsplash.com/photo-1710403766789-f6e544fdf114?ixlib=rb-4.0.3',
//           embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15207.347264949381!2d83.26280677102841!3d17.657886179293172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39421da4370733%3A0xa4ef41bc1f76ebe8!2sYarada%20Beach!5e0!3m2!1sen!2sin!4v1742753725995',
//           latitude: 17.6542,
//           longitude: 83.2775,
//           famousPlaces: [
//             {
//               name: 'Dolphin’s Nose Light House',
//               distance: '6 km',
//               description: 'An iconic cliff-top lighthouse offering stunning views of the Bay of Bengal.',
//               image: 'https://images.unsplash.com/photo-1524511591125-7e73893b10c1?ixlib=rb-4.0.3'
//             },
//             {
//               name: 'Gangavaram Port Viewpoint',
//               distance: '8 km',
//               description: 'Offers a fantastic view of the port and nearby industrial operations with sea backdrops.',
//               image: 'https://images.unsplash.com/photo-1616432721835-30d3bb6d6a02?ixlib=rb-4.0.3'
//             },
//             {
//               name: 'Simhachalam Temple',
//               distance: '23 km',
//               description: 'An ancient and architecturally rich temple dedicated to Lord Narasimha.',
//               image: 'https://images.unsplash.com/photo-1582021490786-6e7be87d525d?ixlib=rb-4.0.3'
//             }
//           ],
//           activities: [
//             {
//               name: 'Picnic with Sea View',
//               price: 'Free',
//               description: 'Enjoy a quiet picnic by the shore, away from the crowds.',
//               image: 'https://images.unsplash.com/photo-1601924928574-25f8fcde45c8?ixlib=rb-4.0.3'
//             },
//             {
//               name: 'Beach Meditation',
//               price: 'Free',
//               description: 'Unwind and relax with beachside yoga or meditation surrounded by nature.',
//               image: 'https://images.unsplash.com/photo-1589372051427-b96189fdc063?ixlib=rb-4.0.3'
//             },
//             {
//               name: 'Nature Photography',
//               price: 'Free',
//               description: 'Capture the lush greenery and dramatic seascapes at this hidden gem.',
//               image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3'
//             }
//           ]
//         }
//       ]      
//     ]
//   },
//   {
//     name: 'Odisha',
//     description: 'Features serene beaches and rich cultural heritage',
//     coordinates: { x: 58, y: 62 },
//     region: 'East India',
//     highlights: ['Puri Beach', 'Chandipur Beach', 'Gopalpur Beach'],
//     beaches: [
//       [
//         {
//           name: 'Puri Beach',
//           Review: 'Suitable for Pilgrims, families, cultural tourists, adventure seekers.',
//           description: 'Puri Beach, located on the Bay of Bengal in Odisha, is famous for its golden sands, spiritual significance, and vibrant beachside activities.',
//           image: 'https://images.unsplash.com/photo-1648472243961-f9060e984066?ixlib=rb-4.0.3',
//           embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.0000000000005!2d85.00000000000001!3d19.000000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a394313d6e6e6e6%3A0x7e7e7e7e7e7e7e7e!2sPuri%20Beach!5e0!3m2!1sen!2sin!4v1708372200000',
//           latitude: 19.7983,
//           longitude: 85.8274,
//           famousPlaces: [
//             {
//               name: 'Jagannath Temple',
//               distance: '1.2 km',
//               description: 'A sacred Hindu temple and one of the Char Dham pilgrimage sites.',
//               image: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Jagannath_Temple_Puri.jpg'
//             },
//             {
//               name: 'Puri Swargadwar Market',
//               distance: '500 m',
//               description: 'Bustling market known for handicrafts, shells, and local snacks.',
//               image: 'https://i.imgur.com/KRyxrS2.jpg'
//             },
//             {
//               name: 'Narendra Tank',
//               distance: '2.5 km',
//               description: 'A holy tank used during rituals, especially during the Chandan Yatra.',
//               image: 'https://i.imgur.com/xUP0RR4.jpg'
//             },
//             {
//               name: 'Sudarsan Sand Art Museum',
//               distance: '650 m',
//               description: 'Museum showcasing the stunning sand sculptures by Sudarsan Pattnaik.',
//               image: 'https://i.imgur.com/QfxXbqS.jpg'
//             }
//           ],
//           activities: [
//             {
//               name: 'Camel Ride',
//               price: 'INR 150',
//               description: 'Enjoy a scenic ride along the beach on a decorated camel.',
//               image: 'https://i.imgur.com/3vEob6K.jpg'
//             },
//             {
//               name: 'Sea Bathing',
//               price: 'Free',
//               description: 'Popular among pilgrims and visitors for a holy dip.',
//               image: 'https://i.imgur.com/0YKP4Kc.jpg'
//             },
//             {
//               name: 'Beach Volleyball',
//               price: 'INR 100 (equipment rental)',
//               description: 'Friendly games set up on the sandy shores.',
//               image: 'https://i.imgur.com/fOZBIiL.jpg'
//             },
//             {
//               name: 'Street Food Tasting',
//               price: 'INR 50–200',
//               description: 'Savor delicious local seafood and snacks along the promenade.',
//               image: 'https://i.imgur.com/4bR7h1L.jpg'
//             }
//           ]
//         },
//         {
//           name: 'Chandipur Beach',
//           Review: 'Best Time to Visit November to February.',
//           description: 'Chandipur Beach, located in Odisha, is known for its unique "vanishing sea" phenomenon, where the water recedes up to 5 km during low tide.',
//           image: 'https://images.unsplash.com/photo-1665571282680-3ba75f9f2584?ixlib=rb-4.0.3',
//           embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29708.608754451834!2d87.0119112071103!3d21.44590083454637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1cf2cb47f43b01%3A0x3327f44e5f020eec!2sChandipur%20Beach!5e0!3m2!1sen!2sin!4v1742754032863!5m2!1sen!2sin',
//           latitude: 21.4693,
//           longitude: 87.0219,
//           famousPlaces: [
//             {
//               name: 'DRDO Integrated Test Range',
//               distance: '4.5 km',
//               description: 'India’s missile testing facility located nearby.',
//               image: 'https://i.imgur.com/Ok6ExDK.jpg'
//             },
//             {
//               name: 'Panchalingeswar Temple',
//               distance: '35 km',
//               description: 'A hilltop temple dedicated to Lord Shiva.',
//               image: 'https://i.imgur.com/5r9d3Kv.jpg'
//             },
//             {
//               name: 'Balaramgadi Fishing Harbour',
//               distance: '3 km',
//               description: 'A calm spot where tourists can see fishermen at work.',
//               image: 'https://i.imgur.com/RFrSy2O.jpg'
//             },
//             {
//               name: 'Nilagiri Palace',
//               distance: '42 km',
//               description: 'A historic palace with a scenic setting and royal heritage.',
//               image: 'https://i.imgur.com/y9r0k6r.jpg'
//             }
//           ],
//           activities: [
//             {
//               name: 'Tide Watching',
//               price: 'Free',
//               description: 'Observe the rare vanishing sea phenomenon.',
//               image: 'https://i.imgur.com/3NUyy0X.jpg'
//             },
//             {
//               name: 'Sand Biking',
//               price: 'INR 200 per 30 mins',
//               description: 'Ride quad bikes along the flat seabed.',
//               image: 'https://i.imgur.com/5VaYGOy.jpg'
//             },
//             {
//               name: 'Crab Hunting',
//               price: 'INR 50 (guide optional)',
//               description: 'Fun and safe activity during low tide with local guidance.',
//               image: 'https://i.imgur.com/qeo3SSv.jpg'
//             },
//             {
//               name: 'Photography',
//               price: 'Free',
//               description: 'Capture surreal shots of the disappearing sea and marine life.',
//               image: 'https://i.imgur.com/Y1XOKZg.jpg'
//             }
//           ]
//         },
//         {
//           name: 'Gopalpur Beach',
//           Review: 'Suitable for Couples, solo travelers, peace seekers, seafood lovers.',
//           description: 'Gopalpur Beach, located in Odisha, is a quiet and pristine beach known for its golden sands, gentle waves, and colonial history.',
//           image: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-4.0.3',
//           embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15066.590215750757!2d84.89518752180992!3d19.254186119418275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d58fbdfda9d25%3A0x574db8f203402852!2sGopalpur%20Beach!5e0!3m2!1sen!2sin!4v1742754093704!5m2!1sen!2sin',
//           latitude: 19.2636,
//           longitude: 84.9054,
//           famousPlaces: [
//             {
//               name: 'Gopalpur Lighthouse',
//               distance: '450 m',
//               description: 'Climb up for a panoramic view of the Bay of Bengal.',
//               image: 'https://i.imgur.com/xW3QQPw.jpg'
//             },
//             {
//               name: 'Old Jetty',
//               distance: '700 m',
//               description: 'Remnants of Gopalpur’s colonial port history.',
//               image: 'https://i.imgur.com/6ZbyzKH.jpg'
//             },
//             {
//               name: 'Berhampur City',
//               distance: '15 km',
//               description: 'Known for temples, shopping, and authentic Odia cuisine.',
//               image: 'https://i.imgur.com/Ad3M7mP.jpg'
//             },
//             {
//               name: 'Taratarini Temple',
//               distance: '32 km',
//               description: 'A prominent Shakti Peetha nestled on the Kumari hills.',
//               image: 'https://i.imgur.com/zBHH9zU.jpg'
//             }
//           ],
//           activities: [
//             {
//               name: 'Beach Walk',
//               price: 'Free',
//               description: 'Stroll along the calm and scenic beach.',
//               image: 'https://i.imgur.com/l8jsAdL.jpg'
//             },
//             {
//               name: 'Seafood Tasting',
//               price: 'INR 150–400',
//               description: 'Enjoy fresh and authentic seafood at local shacks.',
//               image: 'https://i.imgur.com/YGuzYWv.jpg'
//             },
//             {
//               name: 'Sunbathing',
//               price: 'Free',
//               description: 'Ideal for a peaceful sunbath with less crowd.',
//               image: 'https://i.imgur.com/ctbV6NE.jpg'
//             },
//             {
//               name: 'Photography',
//               price: 'Free',
//               description: 'Perfect beach for candid and nature photography.',
//               image: 'https://i.imgur.com/WFb5XcD.jpg'
//             }
//           ]
//         }
//       ]      
//     ]
//   },
//   {
//     name: 'Karnataka',
//     description: 'Home to pristine beaches and rich marine life',
//     coordinates: { x: 30, y: 75 },
//     region: 'South India',
//     highlights: ['Om Beach', 'Murudeshwara Beach', 'Gokarna Beach'],
//     beaches: [
//       {
//         name: 'Om Beach',
//         Review: 'Suitable for Backpackers, Adventure seekers, Solo travelers, Young groups',
//         description: 'Om Beach, located in Gokarna, Karnataka, is famous for its unique Om-shaped shoreline, golden sands, and scenic coastal beauty. It is a hub for adventure seekers and spiritual travelers alike.',
//         image: 'https://images.unsplash.com/photo-1554787990-fd7a431e3b0a?ixlib=rb-4.0.3',
//         embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.760290789682!2d74.314182!3d14.525516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf7b1e1e1e1e1e%3A0x2e2e2e2e2e2e2e2e!2sOm%20Beach!5e0!3m2!1sen!2sin!4v1708372200000',
//         latitude: 14.5146,
//         longitude: 74.3220,
//         famousPlaces: [
//           {
//             name: 'Half Moon Beach',
//             distance: '1.5 km',
//             description: 'A secluded crescent-shaped beach only accessible by boat or trek from Om Beach, perfect for peaceful escapes.',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Halfmoon_Beach_Gokarna.jpg'
//           },
//           {
//             name: 'Paradise Beach',
//             distance: '2 km',
//             description: 'Known for its rocky coastline and serene vibe, this beach is popular among backpackers and campers.',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Paradise_beach.jpg'
//           },
//           {
//             name: 'Gokarna Mahabaleshwar Temple',
//             distance: '3.8 km',
//             description: 'An ancient temple dedicated to Lord Shiva, drawing pilgrims from across India.',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Mahabaleshwar_Temple_Gokarna.jpg'
//           }
//         ],
//         activities: [
//           {
//             name: 'Banana Boat Ride',
//             price: 'INR 400',
//             description: 'Thrilling group activity ideal for adventure seekers.',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Banana_boat.jpg'
//           },
//           {
//             name: 'Jet Skiing',
//             price: 'INR 600',
//             description: 'Experience high-speed fun on the waves of Om Beach.',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Jet_Ski_in_Goa.jpg'
//           },
//           {
//             name: 'Yoga Sessions',
//             price: 'INR 300',
//             description: 'Join morning yoga sessions on the beach for relaxation and mindfulness.',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Yoga_on_beach.jpg'
//           }
//         ]
//       },
//       {
//         name: 'Murudeshwara Beach',
//         Review: 'Suitable for Pilgrims, Families, Spiritual travelers,best time to visit in September to february',
//         description: 'Murudeshwara Beach, located in Karnataka, is famous for its pristine shoreline, breathtaking sunsets, and the iconic Murudeshwara Temple with its towering Shiva statue.',
//         image: 'https://images.unsplash.com/photo-1702398460766-df7410e5e4a5?ixlib=rb-4.0.3',
//         embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.595021759692!2d74.48375317323388!3d14.101067689115089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc47b6a156dc8d%3A0x5d35327bef7b26a2!2sMurudeshwara%20Beach!5e0!3m2!1sen!2sin!4v1742752571998!5m2!1sen!2sin',
//         latitude: 14.0943,
//         longitude: 74.4840,
//         famousPlaces: [
//           {
//             name: 'Murudeshwara Temple',
//             distance: '0.2 km',
//             description: 'Home to the second tallest Shiva statue in the world, overlooking the beach.',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Murudeshwara_Temple.jpg'
//           },
//           {
//             name: 'Netrani Island',
//             distance: '20 km',
//             description: 'A popular spot for scuba diving and marine life exploration.',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Netrani_Island.jpg'
//           },
//           {
//             name: 'Bhatkal Fort',
//             distance: '16 km',
//             description: 'A historic fort near Bhatkal showcasing Indo-Islamic architecture.',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Bhatkal_Fort.jpg'
//           }
//         ],
//         activities: [
//           {
//             name: 'Scuba Diving (Netrani)',
//             price: 'INR 3500',
//             description: 'Explore the rich marine biodiversity around Netrani Island.',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Scuba_Diving_Netrani.jpg'
//           },
//           {
//             name: 'Temple Tour',
//             price: 'INR 200',
//             description: 'Guided temple visits with spiritual stories and history.',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Murudeshwara_inner_sanctum.jpg'
//           },
//           {
//             name: 'Beach Camel Rides',
//             price: 'INR 150',
//             description: 'Enjoy scenic camel rides along the beach, great for families.',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Camel_beach_ride.jpg'
//           }
//         ]
//       },
//       {
//         name: 'Gokarna Beach',
//         Review: 'Suitable for Spiritual seekers, Budget travelers, Peace lovers.',
//         description: 'Gokarna Beach, located in Karnataka, is a serene and spiritual destination known for its golden sands, tranquil waters, and proximity to sacred temples.',
//         image: 'https://images.unsplash.com/photo-1708883950297-63eb8f46f8a0?ixlib=rb-4.0.3',
//         embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30896.802558069725!2d74.29299874391636!3d14.536253942661226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe83d61cc8edb7%3A0x909513ca502e1759!2sGokarna%20Main%20Beach!5e0!3m2!1sen!2sin!4v1742752487310!5m2!1sen!2sin',
//         latitude: 14.5500,
//         longitude: 74.3184,
//         famousPlaces: [
//           {
//             name: 'Mahabaleshwar Temple',
//             distance: '0.3 km',
//             description: 'A historic temple dedicated to Lord Shiva, attracting devotees all year round.',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Mahabaleshwar_Temple_Gokarna.jpg'
//           },
//           {
//             name: 'Kudle Beach',
//             distance: '1.2 km',
//             description: 'A peaceful stretch perfect for yoga, sunset watching, and beach cafes.',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Kudle_Beach.jpg'
//           },
//           {
//             name: 'Mirjan Fort',
//             distance: '11 km',
//             description: 'A beautiful fort with rich historical significance and scenic views.',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Mirjan_Fort.jpg'
//           }
//         ],
//         activities: [
//           {
//             name: 'Trekking to Beaches',
//             price: 'INR 250',
//             description: 'Trek between the beaches of Gokarna for stunning coastal views.',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Gokarna_trek.jpg'
//           },
//           {
//             name: 'Spiritual Tour',
//             price: 'INR 300',
//             description: 'Visit temples and spiritual spots with a local guide.',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Gokarna_Temple.jpg'
//           },
//           {
//             name: 'Kayaking',
//             price: 'INR 500',
//             description: 'Enjoy kayaking through the gentle waves of the Arabian Sea.',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Kayak_beach.jpg'
//           }
//         ]
//       }
//     ]
//   },
//   {
//     name: 'West Bengal',
//     description: 'Features unique delta region beaches',
//     coordinates: { x: 68, y: 50 },
//     region: 'East India',
//     highlights: ['Digha Beach', 'Mandarmani Beach', 'Bakkhali Beach'],
//     beaches: [
//       [
//         {
//           name: 'Digha Beach',
//           Review: 'Suitable for Families, Tourists and Weekend travelers',
//           description: 'One of the widest beaches in West Bengal, known for its gentle slope and vibrant market areas. It offers beautiful sunsets, delicious seafood, and ample water activities.',
//           image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?ixlib=rb-4.0.3',
//           embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.0000000000005!2d87.00000000000001!3d21.000000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a394313d6e6e6e6%3A0x7e7e7e7e7e7e7e7e!2sDigha%20Beach!5e0!3m2!1sen!2sin!4v1708372200000',
//           latitude: 21.6270,
//           longitude: 87.5242,
//           famousPlaces: [
//             {
//               name: 'Marine Aquarium & Regional Centre',
//               distance: '1.5 km',
//               description: 'One of India\'s largest marine aquariums, home to a variety of exotic marine species.',
//               image: 'https://example.com/marine-aquarium.jpg'
//             },
//             {
//               name: 'Amarabati Park',
//               distance: '2.0 km',
//               description: 'A beautiful park with lush greenery, well-maintained gardens, and boating facilities.',
//               image: 'https://example.com/amarabati-park.jpg'
//             },
//             {
//               name: 'Digha Science Centre',
//               distance: '1.8 km',
//               description: 'A must-visit for science lovers, featuring interactive exhibits and planetarium shows.',
//               image: 'https://example.com/science-centre.jpg'
//             },
//             {
//               name: 'Chandaneswar Temple',
//               distance: '6.5 km',
//               description: 'A revered Shiva temple attracting devotees from West Bengal and Odisha.',
//               image: 'https://example.com/chandaneswar-temple.jpg'
//             }
//           ],
//           activities: [
//             {
//               name: 'Banana Boat Ride',
//               price: 'INR 400',
//               description: 'Enjoy a thrilling ride across the waves on an inflatable banana boat.',
//               image: 'https://example.com/banana-ride.jpg'
//             },
//             {
//               name: 'Speed Boating',
//               price: 'INR 600',
//               description: 'High-speed fun in the sea with great views of the coastline.',
//               image: 'https://example.com/speed-boat.jpg'
//             },
//             {
//               name: 'Camel Ride',
//               price: 'INR 150',
//               description: 'Traditional camel rides along the beach, fun for all ages.',
//               image: 'https://example.com/camel-ride.jpg'
//             },
//             {
//               name: 'Seafood Tasting Tour',
//               price: 'INR 500',
//               description: 'Indulge in the best of local seafood from beachside stalls.',
//               image: 'https://example.com/seafood-tour.jpg'
//             }
//           ]
//         },
//         {
//           name: 'Mandarmani Beach',
//           Review: 'Suitable for Adventure seekers and Couples',
//           description: 'A serene and less crowded beach in West Bengal, known for its long motorable shoreline and water sports activities.',
//           image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3',
//           embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59334.53193488415!2d87.5724495216797!3d21.647970900000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a032fd93a4bf789%3A0xa8e634453578d6a3!2sMandarmani%20Beach!5e0!3m2!1sen!2sin!4v1742754587450!5m2!1sen!2sin',
//           latitude: 21.6542,
//           longitude: 87.7164,
//           famousPlaces: [
//             {
//               name: 'Digha Beach',
//               distance: '15 km',
//               description: 'A popular sea beach known for its scenic beauty and vibrant atmosphere.',
//               image: 'https://example.com/digha-beach.jpg'
//             },
//             {
//               name: 'Shankarpur Beach',
//               distance: '12 km',
//               description: 'A less explored beach offering tranquility and a glimpse into local fishing traditions.',
//               image: 'https://example.com/shankarpur.jpg'
//             },
//             {
//               name: 'Tajpur Beach',
//               distance: '10 km',
//               description: 'A secluded beach known for its red crabs and serene environment.',
//               image: 'https://example.com/tajpur.jpg'
//             },
//             {
//               name: 'Udaipur Beach',
//               distance: '20 km',
//               description: 'A serene beach near the Odisha border, known for its pristine beauty.',
//               image: 'https://example.com/udaipur.jpg'
//             }
//           ],
//           activities: [
//             {
//               name: 'Jet Skiing',
//               price: 'INR 700',
//               description: 'High-adrenaline water sport perfect for adventure lovers.',
//               image: 'https://example.com/jetski.jpg'
//             },
//             {
//               name: 'ATV Ride on the Shore',
//               price: 'INR 500',
//               description: 'Ride along the wide beach sands on a powerful ATV.',
//               image: 'https://example.com/atv.jpg'
//             },
//             {
//               name: 'Beach Cycling',
//               price: 'INR 200',
//               description: 'Rent a cycle and ride freely along the coastline.',
//               image: 'https://example.com/cycling.jpg'
//             },
//             {
//               name: 'Parasailing',
//               price: 'INR 1000',
//               description: 'Enjoy the aerial view of the sea and beach while parasailing.',
//               image: 'https://example.com/parasailing.jpg'
//             }
//           ]
//         },
//         {
//           name: 'Bakkhali Beach',
//           Review: 'Suitable for Nature Lovers and peace-seekers, best to visit in October to March',
//           description: 'A peaceful destination in West Bengal, known for its natural beauty, scenic surroundings, and quiet ambiance. Ideal for slow travelers and solitude seekers.',
//           image: 'https://images.unsplash.com/photo-1695289260739-d188d264f096?ixlib=rb-4.0.3',
//           embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14842.698971146217!2d88.25786232306966!3d21.559569790200847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a03a38a516e8abb%3A0xdd9ce1e7b6f1a246!2sBAKKHALI%20SEA%20BEACH!5e0!3m2!1sen!2sin!4v1742754480865!5m2!1sen!2sin',
//           latitude: 21.5626,
//           longitude: 88.2671,
//           famousPlaces: [
//             {
//               name: 'Henry\'s Island',
//               distance: '2 km',
//               description: 'A peaceful retreat with mangroves and an untouched beach.',
//               image: 'https://example.com/henrys-island.jpg'
//             },
//             {
//               name: 'Jambu Dwip',
//               distance: '3.5 km',
//               description: 'A secluded island accessible only by boat, home to diverse marine life.',
//               image: 'https://example.com/jambu-dwip.jpg'
//             },
//             {
//               name: 'Fraserganj Wind Park',
//               distance: '1.5 km',
//               description: 'A wind energy site featuring British-era ruins and beautiful sea views.',
//               image: 'https://example.com/fraserganj.jpg'
//             },
//             {
//               name: 'Crocodile Breeding Centre',
//               distance: '1.2 km',
//               description: 'A conservation park offering an educational experience on crocodile species.',
//               image: 'https://example.com/crocodile-centre.jpg'
//             }
//           ],
//           activities: [
//             {
//               name: 'Bird Watching',
//               price: 'INR 100',
//               description: 'Explore bird habitats around the mangroves and estuaries.',
//               image: 'https://example.com/bird-watching.jpg'
//             },
//             {
//               name: 'Boating to Jambu Dwip',
//               price: 'INR 300',
//               description: 'Take a scenic boat ride to a nearby island rich in marine life.',
//               image: 'https://example.com/boat-jambudwip.jpg'
//             },
//             {
//               name: 'Fishing Tour',
//               price: 'INR 250',
//               description: 'Experience the local fishing culture with guided fishing trips.',
//               image: 'https://example.com/fishing-tour.jpg'
//             },
//             {
//               name: 'Sunset Photography',
//               price: 'INR 0',
//               description: 'Capture serene sunset views — a paradise for photographers.',
//               image: 'https://example.com/sunset-photo.jpg'
//             }
//           ]
//         }
//       ]
      
//     ]
//   }
// ];
// export const beachStates = [
//   {
//     name: 'Goa',
//     description: 'Famous for its vibrant beaches and nightlife',
//     coordinates: { x: 28, y: 70 },
//     region: 'West India',
//     highlights: ['Calangute Beach', 'Baga Beach', 'Anjuna Beach'],
//     beaches: [
//       {
//         name: 'Calangute Beach',
//         description: 'Known as the Queen of Beaches, Calangute is the largest beach in North Goa. Perfect for swimming and sunbathing, it offers various water sports activities.',
//         image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
//         embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31102.473950142456!2d73.73972341755676!3d15.552992841903748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe69fae4e1e7a1%3A0xa1549e15e2aa3c2d!2sCalangute%20Beach!5e0!3m2!1sen!2sin!4v1708368657593',
//         "latitude": 15.5524, "longitude": 73.7551

//       },
//       {
//         name: 'Baga Beach',
//         description: 'Famous for its nightlife and water sports, Baga Beach is one of the most popular beaches in Goa. It\'s known for parasailing and jet skiing.',
//         image: 'https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?ixlib=rb-4.0.3',
//         embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.8345800306825!2d73.74165467608402!3d15.55242078529744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe69fae4e1e7a1%3A0x3be3e61c423b6d6b!2sBaga%20Beach!5e0!3m2!1sen!2sin!4v1708368691231',
//         "latitude": 15.5524, "longitude": 73.7516
//       },
//       {
//         name: 'Anjuna Beach',
//         description: 'Popular for its Wednesday flea market and trance parties, Anjuna Beach features unique rock formations and clear waters.',
//         image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
//         embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.6542704521015!2d73.73893417608429!3d15.581948985295364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe69f17e20e7a1%3A0xc5e90e665e70a1e9!2sAnjuna%20Beach!5e0!3m2!1sen!2sin!4v1708368725015',"latitude": 15.5873, "longitude": 73.7437 
//       }
//     ]
//   },
//   {
//     name: 'Kerala',
//     description: 'Known for serene backwaters and pristine beaches',
//     coordinates: { x: 32, y: 85 },
//     region: 'South India',
//     highlights: ['Varkala Beach', 'Kovalam Beach', 'Marari Beach'],
//     beaches: [
//       {
//         name: 'Varkala Beach',
//         description: 'A scenic beach with dramatic cliffs and clear waters, perfect for swimming and sunbathing.',
//         image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
//         embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.986748907227!2d76.68343627605962!3d8.737879591464123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05df97f447d5e5%3A0x1a8e6365b57f79f1!2sVarkala%20Beach!5e0!3m2!1sen!2sin!4v1708368799093',"latitude": 8.7379, "longitude": 76.7163
        
//       },
//       {
//         name: 'Kovalam Beach',
//         description: 'Famous for its crescent-shaped beaches and lighthouse, offering excellent opportunities for surfing.',
//         image: 'https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?ixlib=rb-4.0.3',
//         embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.986748907227!2d76.97849437605962!3d8.737879591464123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05df98a9f53c97%3A0x3f20b3f73917c3fa!2sKovalam%20Beach!5e0!3m2!1sen!2sin!4v1708368843211',"latitude": 8.4003, "longitude": 76.9787
//       }
//     ]
//   },
//   {
//     name: 'Maharashtra', 
//     description: 'Home to beautiful Konkan coast beaches',
//     coordinates: { x: 32, y: 60 },
//     region: 'West India',
//     highlights: ['Alibaug Beach', 'Ganpatipule Beach', 'Tarkarli Beach'],
//     beaches: [
//       {
//         name: 'Alibaug Beach',
//         description: 'A historic beach town known for its clean shores and fort views.',
//         image: 'https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?ixlib=rb-4.0.3',
//         embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15085.685635587707!2d72.86785514999999!3d18.641400600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8f0425974a0c7%3A0xc8ea58b3bb7fd9a8!2sAlibaug%20Beach!5e0!3m2!1sen!2sin!4v1708339200000',"latitude": 18.6411, "longitude": 72.8722

//       },
//       {
//         name: 'Tarkarli Beach',
//         description: 'Famous for its white sands and crystal clear waters, perfect for snorkeling and scuba diving.',
//         image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?ixlib=rb-4.0.3',
//         embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15331.312896097465!2d73.48749454999999!3d16.0419934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe48f16d0269c7%3A0xc10d99781cc78e75!2sTarkarli%20Beach!5e0!3m2!1sen!2sin!4v1708372200000',"latitude": 16.0411, "longitude": 73.4633

        
//       }
//     ]
//   },
//   {
//     name: 'Gujarat',
//     description: 'Features some of the longest coastlines in India',
//     coordinates: { x: 22, y: 45 },
//     region: 'West India',
//     highlights: ['Diu Beach', 'Somnath Beach', 'Mandvi Beach'],
//     beaches: [
//       {
//         name: 'Diu Beach',
//         description: 'A peaceful beach known for its Portuguese architecture and water sports.',
//         image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
//         embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59713.83249357943!2d70.83944474863281!3d20.70557329999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be31d327d33fb75%3A0x16e3d4d4e5308b31!2sNagoa%20Beach%20-%20Diu!5e0!3m2!1sen!2sin!4v1739988237373!5m2!1sen!2sin',"latitude": 20.7140, "longitude": 70.9879
//       }
//     ]
//   },
//   {
//     name: 'Tamil Nadu',
//     description: 'Rich in cultural heritage with beautiful coastal areas',
//     coordinates: { x: 38, y: 88 },
//     region: 'South India',
//     highlights: ['Marina Beach', 'Mahabalipuram Beach', 'Kanyakumari Beach'],
//     beaches: [
//       {
//         name: 'Marina Beach',
//         description: 'One of the longest urban beaches in the world, famous for its sunrise views.',
//         image: 'https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?ixlib=rb-4.0.3',
//         embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.760290789682!2d80.280711!3d13.046754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267d2b1e1f1b1%3A0x8f8e0b8e0b8e0b8e!2sMarina%20Beach!5e0!3m2!1sen!2sin!4v1708372200000',"latitude": 13.0500, "longitude": 80.2824

//       }
//     ]
//   },
//   {
//     name: 'Andhra Pradesh',
//     description: 'Known for its pristine and less crowded beaches',
//     coordinates: { x: 45, y: 75 },
//     region: 'South India',
//     highlights: ['Rishikonda Beach', 'Ramakrishna Beach', 'Yarada Beach'],
//     beaches: [
//       {
//         name: 'Rishikonda Beach',
//         description: 'Known as the Jewel of the East Coast, perfect for surfing and swimming.',
//         image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?ixlib=rb-4.0.3',
//         embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.0000000000005!2d83.00000000000001!3d17.000000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a394313d6e6e6e6%3A0x7e7e7e7e7e7e7e7e!2sRishikonda%20Beach!5e0!3m2!1sen!2sin!4v1708372200000',"latitude": 17.7583, "longitude": 83.3689 

//       }
//     ]
//   },
//   {
//     name: 'Odisha',
//     description: 'Features serene beaches and rich cultural heritage',
//     coordinates: { x: 58, y: 62 },
//     region: 'East India',
//     highlights: ['Puri Beach', 'Chandipur Beach', 'Gopalpur Beach'],
//     beaches: [
//       {
//         name: 'Puri Beach',
//         description: 'Famous for its religious significance and golden sands.',
//         image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?ixlib=rb-4.0.3',
//         embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.0000000000005!2d85.00000000000001!3d19.000000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a394313d6e6e6e6%3A0x7e7e7e7e7e7e7e7e!2sPuri%20Beach!5e0!3m2!1sen!2sin!4v1708372200000',
//         "latitude": 19.7983,
//         "longitude": 85.8274

//       }
//     ]
//   },
//   {
//     name: 'Karnataka',
//     description: 'Home to pristine beaches and rich marine life',
//     coordinates: { x: 30, y: 75 },
//     region: 'South India',
//     highlights: ['Om Beach', 'Murudeshwara Beach', 'Gokarna Beach'],
//     beaches: [
//       {
//         name: 'Om Beach',
//         description: 'Named for its Om-shaped shoreline, known for its scenic beauty and water sports.',
//         image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?ixlib=rb-4.0.3',
//         embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.760290789682!2d74.314182!3d14.525516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf7b1e1e1e1e1e%3A0x2e2e2e2e2e2e2e2e!2sOm%20Beach!5e0!3m2!1sen!2sin!4v1708372200000',"latitude": 14.5146, "longitude": 74.3220 

//       }
//     ]
//   },
//   {
//     name: 'West Bengal',
//     description: 'Features unique delta region beaches',
//     coordinates: { x: 68, y: 50 },
//     region: 'East India',
//     highlights: ['Digha Beach', 'Mandarmani Beach', 'Bakkhali Beach'],
//     beaches: [
//       {
//         name: 'Digha Beach',
//         description: 'One of the widest beaches in West Bengal, known for its gentle slope.',
//         image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?ixlib=rb-4.0.3',
//         embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.0000000000005!2d87.00000000000001!3d21.000000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a394313d6e6e6e6%3A0x7e7e7e7e7e7e7e7e!2sDigha%20Beach!5e0!3m2!1sen!2sin!4v1708372200000',"latitude": 21.6270, "longitude": 87.5242

//       }
//     ]
//   }
// ];


export const beachStates = [
  {
    name: 'Goa',
    description: 'Famous for its vibrant beaches and nightlife',
    coordinates: { x: 28, y: 70 },
    region: 'West India',
    highlights: ['Calangute Beach', 'Baga Beach', 'Anjuna Beach'],
    beaches: [
        {
          name: 'Calangute Beach',
          Review: 'Suitable for families, casual tourists, beach lovers, shopping enthusiasts.',
          description: 'Calangute Beach, often referred to as the "Queen of Beaches," is one of the most popular destinations in North Goa. Known for its expansive golden sands and vibrant atmosphere, it offers a range of water sports, bustling markets, and a lively nightlife scene, attracting tourists from around the world.\n\nFamous Places Near Calangute Beach:\n\n1. Baga Beach: Located just north of Calangute, Baga Beach is renowned for its energetic nightlife, water sports, and beachside shacks. Latitude: 15.5524, Longitude: 73.7516.\n\n2. Anjuna Flea Market: A vibrant market held every Wednesday, offering a variety of goods from clothing to handicrafts. Latitude: 15.5873, Longitude: 73.7436.\n\n3. Fort Aguada: A 17th-century Portuguese fort offering panoramic views of the Arabian Sea. Latitude: 15.4925, Longitude: 73.7735.\n\n4. Chapora Fort: Famous for its scenic views and Bollywood connections, it offers a panoramic vista of the surrounding coastline. Latitude: 15.6046, Longitude: 73.7445.\n\n5. St. Alex Church: Known for its distinctive architecture and calm ambiance, this is one of the oldest churches in Goa. Latitude: 15.5403, Longitude: 73.7625.',
          famousPlaces: [
            {
              name: 'Baga Beach',
              distance: '2 km',
              description: 'Popular for nightlife, shacks, and water sports.',
              image: 'https://images.unsplash.com/photo-1593620529462-619501b0f7f1?ixlib=rb-4.0.3',
              
            },
            {
              name: 'Anjuna Flea Market',
              distance: '6 km',
              description: 'Colorful Wednesday market with clothes, jewelry, and more.',
              image: 'https://media.gettyimages.com/id/481691639/photo/people-in-a-market-anjuna-beach-flea-market-anjuna-beach-anjuna-bardez-north-goa-goa-india.jpg?s=612x612&w=0&k=20&c=nPyGXXFmwpyvdh3GhOBnU2kwYMrfAoa5r4WxqRp7o1c='
            },
            {
              name: 'Fort Aguada',
              distance: '8 km',
              description: 'Historic Portuguese fort with sea views.',
              image: 'https://media.gettyimages.com/id/157694985/photo/view-from-aguada-fort.jpg?s=612x612&w=0&k=20&c=CZIcF7hhcUefRJPM0QauH3NbWXuhpncYUqTQcH4-ssg='
            },
            {
              name: 'Chapora Fort',
              distance: '10 km',
              description: 'Popular viewpoint and historic fort.',
              image: 'https://media.gettyimages.com/id/180790603/photo/chapora-fort-goa.jpg?s=612x612&w=0&k=20&c=UnKWAAvgBBdE5wMiJobt4l26TWM-X7BkmRf3ArC0KGU='
            },
            {
              name: 'St. Alex Church',
              distance: '1.5 km',
              description: 'Iconic white church with classic Goan architecture.',
              image: 'https://media.gettyimages.com/id/1314934874/photo/exterior-of-st-alex-roman-catholic-church-calangute-goa-india.jpg?s=612x612&w=0&k=20&c=c-IO8xfRufXg-sOnW_pnzo1UYNajYynFam2RDtRoEhs='
            }
          ],
          activities: [
            {
              name: 'Jet Skiing',
              price: '₹1,000 per ride',
              image: 'https://media.gettyimages.com/id/1411295710/photo/jet-ski-adventure.jpg?s=612x612&w=0&k=20&c=7s8iMUJDWOUgLp-2JusNVOqbU1GnKIU1KQdJtaBuMz8='
            },
            {
              name: 'Parasailing',
              price: '₹1,500 for 15 mins',
              image: 'https://media.gettyimages.com/id/1141688597/photo/tandem-jump-in-paragliding.jpg?s=612x612&w=0&k=20&c=BJw8DTCbsEHza1kuOADmZFTr46cnlbOlA4x0sSQRmow='
            },
            {
              name: 'Banana Boat Ride',
              price: '₹800 per person',
              image: 'https://media.gettyimages.com/id/1152482249/photo/banana-boat-fun.jpg?s=612x612&w=0&k=20&c=_eifcpDkaofoq-NNgG_5oEq85dKDXbjmOjRXFnV-U8Y='
            }
          ],
          image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
          embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31102.473950142456!2d73.73972341755676!3d15.552992841903748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe69fae4e1e7a1%3A0xa1549e15e2aa3c2d!2sCalangute%20Beach!5e0!3m2!1sen!2sin!4v1708368657593',
          latitude: 15.5524,
          longitude: 73.7551
        },
        {
          name: 'Baga Beach',
          Review: 'Suitable for partygoers, adventure seekers, nightlife lovers, water sports enthusiasts.',
          description: 'Baga Beach is a vibrant coastal destination in North Goa, renowned for its lively nightlife, water sports, and bustling shacks. It offers a perfect blend of relaxation and adventure, attracting tourists from around the world.\n\nFamous Places Near Baga Beach:\n\n1. Anjuna Flea Market: A lively marketplace filled with local crafts, clothes, and food. Latitude: 15.5873, Longitude: 73.7436.\n\n2. Calangute Beach: A sandy haven for beach lovers and water activities. Latitude: 15.5439, Longitude: 73.7553.\n\n3. Fort Aguada: A sea-facing Portuguese fort with a lighthouse. Latitude: 15.4925, Longitude: 73.7735.\n\n4. Chapora Fort: Scenic location perfect for sunsets and photos. Latitude: 15.6046, Longitude: 73.7445.\n\n5. Saturday Night Market: A popular night market filled with food, music, and shopping. Latitude: 15.5916, Longitude: 73.7759.',
          famousPlaces: [
            {
              name: 'Anjuna Flea Market',
              distance: '5 km',
              description: 'Bustling market with a mix of goods and local art.',
              image: 'https://media.gettyimages.com/id/481691639/photo/people-in-a-market-anjuna-beach-flea-market-anjuna-beach-anjuna-bardez-north-goa-goa-india.jpg?s=612x612&w=0&k=20&c=nPyGXXFmwpyvdh3GhOBnU2kwYMrfAoa5r4WxqRp7o1c='
            },
            {
              name: 'Calangute Beach',
              distance: '2 km',
              description: 'Golden sandy beach with buzzing tourist activity.',
              image: 'https://media.gettyimages.com/id/463430451/photo/calangute-goa-india-the-calangute-beach-with-umbrellas-blue-sky-white-sand-and-blue-sea-is-one.jpg?s=612x612&w=0&k=20&c=IDkRXo9-HZBkCWH9_KfUIolyl128d5GGw4mxu0ScnKA='
            },
            {
              name: 'Fort Aguada',
              distance: '9 km',
              description: 'Historic fortress overlooking the Arabian Sea.',
              image: 'https://media.gettyimages.com/id/157694985/photo/view-from-aguada-fort.jpg?s=612x612&w=0&k=20&c=CZIcF7hhcUefRJPM0QauH3NbWXuhpncYUqTQcH4-ssg='
            },
            {
              name: 'Chapora Fort',
              distance: '8 km',
              description: 'Famous viewpoint and historic ruin.',
              image: 'https://media.gettyimages.com/id/180790603/photo/chapora-fort-goa.jpg?s=612x612&w=0&k=20&c=UnKWAAvgBBdE5wMiJobt4l26TWM-X7BkmRf3ArC0KGU='
            },
            {
              name: 'Saturday Night Market',
              distance: '3 km',
              description: 'Colorful evening market with music and local products.',
              image: 'https://media.gettyimages.com/id/175225064/photo/the-night-market-held-every-saturday-night-in-anjuna-north-goa-india-2008.jpg?s=612x612&w=0&k=20&c=w9HxOmHr2Bd0ktj4nbPaNSU-zFkNNoP4cULLQsmIqaA='
            }
          ],
          activities: [
            {
              name: 'Bumper Ride',
              price: '₹700 per person',
              image: 'https://media.gettyimages.com/id/950287930/photo/teenage-girl-in-bumper-cars-with-teddy-bear-and-friends.jpg?s=612x612&w=0&k=20&c=ECd2SrpQjc_t6JvU58I-QTr-C9guQKgsBZDMj2kdJhw='
            },
            {
              name: 'Dolphin Watching',
              price: '₹1,200 per person',
              image: 'https://media.gettyimages.com/id/514811255/photo/two-couples.jpg?s=612x612&w=0&k=20&c=QW03NDKd4BBAm8iuvzirs4UvNwMViPhqODmyxeMzijE='
            },
            {
              name: 'Jet Skiing',
              price: '₹1,000 per ride',
              image: 'https://media.gettyimages.com/id/1411295710/photo/jet-ski-adventure.jpg?s=612x612&w=0&k=20&c=7s8iMUJDWOUgLp-2JusNVOqbU1GnKIU1KQdJtaBuMz8='
              
            }
          ],
          image: 'https://images.unsplash.com/photo-1593620529462-619501b0f7f1?ixlib=rb-4.0.3',
          embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.8345800306825!2d73.74165467608402!3d15.55242078529744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe69fae4e1e7a1%3A0x3be3e61c423b6d6b!2sBaga%20Beach!5e0!3m2!1sen!2sin!4v1708368691231',
          latitude: 15.5524,
          longitude: 73.7516
        },
        {
          name: 'Anjuna Beach',
          Review: 'Perfect for backpackers, hippie culture lovers, trance music fans, flea market shoppers.',
          description: 'Anjuna Beach is one of the most famous beaches in North Goa, known for its stunning rocky coastline, vibrant nightlife, and historic charm. It is a hotspot for backpackers, party lovers, and adventure seekers who visit for its trance parties, lively flea markets, and breathtaking sunset views.',
          famousPlaces: [
            {
              name: 'Curlies Beach Shack',
              distance: '1 km',
              description: 'Iconic beach shack known for music and seafood.',
              image: 'https://media.gettyimages.com/id/481691517/photo/tourists-on-the-beach-curlies-bar-and-restaurant-anjuna-north-goa-goa-india.jpg?s=612x612&w=0&k=20&c=ypThu0p48P7WzBhQ5jrJEBRYW5y7pnBi5JDeaeMnM_0='
            },
            {
              name: 'Anjuna Flea Market',
              distance: '0.5 km',
              description: 'Goa’s most famous open-air market for local goods.',
              image: 'https://media.gettyimages.com/id/481691639/photo/people-in-a-market-anjuna-beach-flea-market-anjuna-beach-anjuna-bardez-north-goa-goa-india.jpg?s=612x612&w=0&k=20&c=nPyGXXFmwpyvdh3GhOBnU2kwYMrfAoa5r4WxqRp7o1c='
              
            },
            {
              name: 'Chapora Fort',
              distance: '6 km',
              description: 'Offers panoramic views of Vagator and nearby beaches.',
              image: 'https://media.gettyimages.com/id/180790603/photo/chapora-fort-goa.jpg?s=612x612&w=0&k=20&c=UnKWAAvgBBdE5wMiJobt4l26TWM-X7BkmRf3ArC0KGU='
              
            },
            {
              name: 'Vagator Beach',
              distance: '5 km',
              description: 'Scenic and clean beach popular with foreigners.',
              image: 'https://media.gettyimages.com/id/148675739/photo/vagator-beach-headland.jpg?s=612x612&w=0&k=20&c=kIDYUWYKY6Ifmc8IdUyI3zAs0LUTGUXZ54tJYghh1ts='
            },
            {
              name: 'St. Michaels Church',
              distance: '3 km',
              description: 'One of the oldest churches in Goa, built in 1595.',
              image: 'https://media.gettyimages.com/id/976714640/photo/interior-of-the-church-of-saint-michael-san-candido-trentino-alto-adige-italy-13th-18th-century.jpg?s=612x612&w=0&k=20&c=qyTfSbGEMTZV309H0KtoptH9wvxAU2P_Q5SWBzhkoGw='
            }
          ],
          activities: [
            {
              name: 'Trance Parties',
              price: 'Free / Cover ₹500+',
              image: 'https://media.gettyimages.com/id/622215586/photo/psychedelic-concert-crowd.jpg?s=612x612&w=0&k=20&c=4iF7Qq_buiJtI9Iz3d-XRRM-FTyhKj2umcoQC_cjc_8='
            },
            {
              name: 'Scuba Diving',
              price: '₹3,000 per dive',
              image: 'https://media.gettyimages.com/id/498283106/photo/underwater-scuba-diver-explore-and-enjoy-coral-reef-sea-life.jpg?s=612x612&w=0&k=20&c=xOj00xaZTpy5-AtKvMvIHHfexz9miSSct_CXb6F9KVA='
            },
            {
              name: 'Snorkeling',
              price: '₹1,500 per session',
              image: 'https://media.gettyimages.com/id/502642217/photo/kid-on-the-reef.jpg?s=612x612&w=0&k=20&c=7vfitjl_ZrrGHzE2XkdKPJ1PoQL0FmOvwqsKxer1GmA='
            }
          ],
          image: 'https://images.unsplash.com/photo-1723141614224-4148b475310e?ixlib=rb-4.0.3',
          embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.6542704521015!2d73.73893417608429!3d15.581948985295364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe69f17e20e7a1%3A0xc5e90e665e70a1e9!2sAnjuna%20Beach!5e0!3m2!1sen!2sin!4v1708368725015',
          latitude: 15.5873,
          longitude: 73.7437
        }
      ]
  },
  {
    name: 'Kerala',
    description: 'Known for serene backwaters and pristine beaches',
    coordinates: { x: 32, y: 85 },
    region: 'South India',
    highlights: ['Varkala Beach', 'Kovalam Beach', 'Marari Beach'],
    beaches: [
      {
        name: 'Varkala Beach',
        Review: 'Best time to visit: October to March.',
        description: 'Varkala Beach, also known as Papanasam Beach, is a stunning cliffside beach in Kerala, famous for its natural springs and breathtaking views. It’s a spiritual and scenic destination ideal for rejuvenation and relaxation.\n\nFamous Places Near Varkala Beach:\n\n1. Janardanaswamy Temple: An ancient Hindu temple dedicated to Lord Vishnu, known for its religious significance and coastal views. Latitude: 8.7375, Longitude: 76.7175.\n\n2. Sivagiri Mutt: A spiritual center and the resting place of reformer Sree Narayana Guru, promoting peace and equality. Latitude: 8.7320, Longitude: 76.7232.\n\n3. Anchuthengu Fort: A historical British fort offering sea views and a glimpse into Kerala’s colonial history. Latitude: 8.6510, Longitude: 76.7677.\n\n4. Varkala Cliff: A vibrant spot with cafés and shops lining the red cliffs that overlook the Arabian Sea. Latitude: 8.7382, Longitude: 76.7110.',
        famousPlaces: [
          {
            name: 'Janardanaswamy Temple',
            description: 'Historic temple dedicated to Lord Vishnu with coastal surroundings.',
            distance: '2 km',
            image: 'https://media.gettyimages.com/id/177473280/photo/janardhana-temple.jpg?s=612x612&w=0&k=20&c=ctUK2oex-bO--Kwg61Y01qZClITCwd0u7dXhgFTh4iQ='
          },
          {
            name: 'Sivagiri Mutt',
            description: 'Spiritual pilgrimage center associated with Sree Narayana Guru.',
            distance: '5 km',
            image: 'https://media.gettyimages.com/id/1177018448/photo/puja-prayer-offering-for-sree-narayana-guru-at-the-sivagiri-mutt.jpg?s=612x612&w=0&k=20&c=vZK9udhGMGczalS5pUQb3FBmBf7Tg03PJj_bwi3eM1w='
            
          },
          {
            name: 'Anchuthengu Fort',
            description: 'Colonial-era fort with historical significance and sea views.',
            distance: '12 km',
            image: 'https://www.keralatourism.org/images/enchanting_kerala/large/anchuthengu_fort_whispering_tales_of_past_wonder_and_magnificence20210203090839_1053_1.jpg'
          },
          {
            name: 'Varkala Cliff',
            description: 'Scenic red cliffs with cafés, shops, and sea views.',
            distance: '0.3 km',
            image: 'https://media.gettyimages.com/id/148573629/photo/papanasham-beach-ringed-by-red-laterite-cliffs.jpg?s=612x612&w=0&k=20&c=fSitTsn3f9TGJkZ77iSxtIDWA94jFnpj0XWSeFwSfS4='
          }
        ],
        activities: [
          {
            name: 'Surfing',
            price: '₹1,660 per hour',
            description: 'Ride the waves on the Arabian Sea with surfboard rentals and classes.',
            image: 'https://media.gettyimages.com/id/143918363/photo/standing-tall.jpg?s=612x612&w=0&k=20&c=CmYEL5PCpEPRU8w1G3ppYPgBP9sUqApsC7Jtdenj3ek='
          },
          {
            name: 'Paragliding',
            price: '₹4,150 for 30 mins',
            description: 'Soar above cliffs and ocean with thrilling aerial views.',
            image: 'https://media.gettyimages.com/id/1450411763/photo/man-flying-the-paragliding.jpg?s=612x612&w=0&k=20&c=7OdvF0ou9lDowIYfqRc8HmbvHsMeV28jxOhImamkj1o='
          }
        ],
        image: 'https://images.unsplash.com/photo-1732974539647-ec69ccbe3b49?ixlib=rb-4.0.3',
        embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.986748907227!2d76.68343627605962!3d8.737879591464123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05df97f447d5e5%3A0x1a8e6365b57f79f1!2sVarkala%20Beach!5e0!3m2!1sen!2sin!4v1708368799093',
        latitude: 8.7379,
        longitude: 76.6834
      },
      {
        name: 'Marari Beach',
        Review: 'Best time to visit: September to February.',
        description: 'Marari Beach is a tranquil beach in Kerala, known for its peaceful atmosphere and traditional fishing villages. It’s an ideal escape from crowds and a place to experience Kerala’s authentic coastal life.\n\nFamous Places Near Marari Beach:\n\n1. Mararikulam Shiva Temple: A revered temple dedicated to Lord Shiva, known for its traditional rituals. Latitude: 9.6035, Longitude: 76.3017.\n\n2. Pathiramanal Island: A scenic island on the Vembanad Lake, rich in birdlife and natural beauty. Latitude: 9.6155, Longitude: 76.3955.\n\n3. Arthunkal Church: A historic Christian pilgrimage site with Portuguese architectural style. Latitude: 9.6070, Longitude: 76.3144.\n\n4. Alleppey Backwaters: A network of serene lagoons and canals, ideal for houseboat experiences. Latitude: 9.4981, Longitude: 76.3388.',
        famousPlaces: [
          {
            name: 'Mararikulam Shiva Temple',
            description: 'Ancient temple dedicated to Lord Shiva, set in serene surroundings.',
            distance: '3 km',
            image: 'https://media.gettyimages.com/id/2168842062/photo/mararikulam-shiva-temple-marari-kerala-india-asia.jpg?s=612x612&w=0&k=20&c=L5IsX_Shw-czIROfuzd_pBLXflQDhBTtlVQ61fM6h_U='
          },
          {
            name: 'Pathiramanal Island',
            description: 'Peaceful island with lush greenery and migratory birds.',
            distance: '8 km',
            image: 'https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Ftablet%2Fpathiramanal-1727799226_7568353d9161023ec7fb.webp&w=1920&q=75'
          },
          {
            name: 'Arthunkal Church',
            description: 'Prominent Christian pilgrimage site built in Portuguese style.',
            distance: '7 km',
            image: 'https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fmobile%2Farthunkal-perunnal-1732365212_f7351b597826dde8df7a.webp&w=1080&q=75'
          },
          {
            name: 'Alleppey Backwaters',
            description: 'Popular for houseboat cruises and tranquil water channels.',
            distance: '12 km',
            image: 'https://media.gettyimages.com/id/1126730925/photo/canoe-and-reflection-of-trees-in-water-of-kerala-backwaters.jpg?s=612x612&w=0&k=20&c=d6dn31C9lmCBqqmCKz7e7RlBEpzPHX-38ij6vXIpyd0='
          }
        ],
        activities: [
          {
            name: 'Kayaking',
            price: '₹1,250 per hour',
            description: 'Paddle through serene backwaters and enjoy peaceful surroundings.',
            image: 'https://media.gettyimages.com/id/1927107619/photo/thrill-seekers-conquer-turbulent-river-rapids.jpg?s=612x612&w=0&k=20&c=yIkJ-VGS1brs5CF_97MvK7Koifn5kdpO87L6kviavG4='
          },
          {
            name: 'Beach Yoga',
            price: 'Free',
            description: 'Rejuvenating yoga sessions on the quiet, clean shoreline.',
            image: 'https://media.gettyimages.com/id/597963486/photo/its-a-perfect-day-for-yoga-at-the-beach.jpg?s=612x612&w=0&k=20&c=MYw4GXRb2KR3VFYt3LF0NNQ1whkrDoejIgPPuU6cKK0='
          },
          {
            name: 'Fishing Tour',
            price: '₹1,000 for 2 hours',
            description: 'Experience traditional fishing techniques with local fishermen.',
            image: 'https://media.gettyimages.com/id/648682966/photo/silhouette-fisherman-at-sunrise-of-bangpra-lake-in-action-when-fishing-thailand.jpg?s=612x612&w=0&k=20&c=LiOpvg4P2Vu2IctL0nkUXuuzQDdsFIZp5De-6caQYlo='
          },
          {
            name: 'Cycling Tour',
            price: '₹800 for 3 hours',
            description: 'Ride through coconut groves and coastal villages.',
            image: 'https://media.gettyimages.com/id/1992706750/photo/young-family-riding-bicycles-in-summertime.jpg?s=612x612&w=0&k=20&c=UzT1-AAFrqN53QEHbp2T1b3ce4fy3Brnr8BLCJmG2Xs='
          }
        ],
        image: 'https://images.unsplash.com/photo-1590581553362-1718d635bb7f?ixlib=rb-4.0.3',
        embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.7649858721546!2d76.30193007606365!3d9.601842593084254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07986f725f85b3%3A0xc8e228dd08f2cd9e!2sMarari%20Beach!5e0!3m2!1sen!2sin!4v1708368823923',
        latitude: 9.6018,
        longitude: 76.3019
      },
      
      
      {
        name: 'Kovalam Beach',
        Review: 'Suitable for Families, honeymooners, water sports enthusiasts (surfing, parasailing, jet skiing).',
        description: 'Kovalam Beach, located in Kerala, is famous for its crescent-shaped shoreline, lighthouse views, and vibrant beachside activities. It is a popular retreat for families and adventure seekers, offering a tranquil yet lively coastal experience.\n\nFamous Places Near Kovalam Beach:\n\n1. Lighthouse Beach: The most popular stretch in Kovalam, known for its red-and-white striped lighthouse offering panoramic sea views. Latitude: 8.3830, Longitude: 76.9739.\n\n2. Halcyon Castle: A heritage structure turned luxury hotel, showcasing Kerala’s colonial-era architecture. Latitude: 8.3965, Longitude: 76.9778.\n\n3. Vizhinjam Marine Aquarium: A compact aquarium showcasing local marine life, perfect for families and kids. Latitude: 8.3785, Longitude: 76.9823.\n\n4. Vellayani Lake: A peaceful freshwater lake ideal for picnics and evening strolls, just a short drive from the beach. Latitude: 8.4026, Longitude: 76.9975.\n\n5. Padmanabhapuram Palace: A wooden palace complex showcasing traditional Kerala architecture and heritage. Latitude: 8.2438, Longitude: 77.3419.',
        famousPlaces: [
          {
            name: 'Lighthouse Beach',
            description: 'Popular stretch with a scenic lighthouse offering panoramic coastal views.',
            distance: '0.5 km',
            image: 'https://media.gettyimages.com/id/184426750/photo/kovalam-beach-thiruvananthapuram.jpg?s=612x612&w=0&k=20&c=z79J3akiiaMrSdmBSffC9vybK8-In82uS8_wf5ZECM8='
          },
          {
            name: 'Halcyon Castle',
            description: 'Historic royal residence turned luxury heritage hotel.',
            distance: '2 km',
            image: 'https://www.keralatourism.holiday/images/kerala-tourist-attractions-places/kovalam/halcyon-castle.jpg'
          },
          {
            name: 'Vizhinjam Marine Aquarium',
            description: 'Compact aquarium featuring regional marine life exhibits.',
            distance: '2.5 km',
            image: 'https://lh3.googleusercontent.com/gps-cs-s/AB5caB8w3JA6rWkozR0R_JR-boVkWGif2lyBorEe4zyoClBv-QnODGMFxVa7N9BwUeR3eaXiEMMS0VO5hsX7Nwh0TgDCuJUDjs5KXQ7sVMoHaIeT_2QT6TVEtL0hmScpciLhpJySYVygMg=s1360-w1360-h1020'
          },
          {
            name: 'Vellayani Lake',
            description: 'Serene freshwater lake ideal for leisure and picnics.',
            distance: '7 km',
            image: 'https://media.gettyimages.com/id/979990368/photo/overcast-sky-over-vellayani-lake-trivandrum-south-kerala-india.jpg?s=612x612&w=0&k=20&c=SZvecu2oCnXOfmYRUQHw0CuR9ecZZoQLeg4NTBFqTv0='
          },
          {
            name: 'Padmanabhapuram Palace',
            description: 'A grand wooden palace reflecting Kerala’s architectural splendor.',
            distance: '50 km',
            image: 'https://media.gettyimages.com/id/535160450/photo/padmanabhapuram-palace-in-tamil-nadu-india.jpg?s=612x612&w=0&k=20&c=-kOzZKZZ2LSkEMqAO8pCzrOoTyrowQhedUwoarNTtzw='
          }
        ],
        activities: [
          {
            name: 'Kayaking',
            price: '₹1,250 per hour',
            description: 'Paddle through calm coastal waters for a peaceful ocean adventure.',
            image: 'https://media.gettyimages.com/id/1927107619/photo/thrill-seekers-conquer-turbulent-river-rapids.jpg?s=612x612&w=0&k=20&c=yIkJ-VGS1brs5CF_97MvK7Koifn5kdpO87L6kviavG4='
          },
          {
            name: 'Beach Yoga',
            price: 'Free',
            description: 'Join early morning sessions for relaxation with sea breezes.',
            image: 'https://media.gettyimages.com/id/597963486/photo/its-a-perfect-day-for-yoga-at-the-beach.jpg?s=612x612&w=0&k=20&c=MYw4GXRb2KR3VFYt3LF0NNQ1whkrDoejIgPPuU6cKK0='
          },
          {
            name: 'Surfing Lessons',
            price: '₹1,650 per hour',
            description: 'Catch the waves with beginner-friendly surfing tutorials.',
            image: 'https://media.gettyimages.com/id/552314727/photo/father-teaching-small-son-to-surf.jpg?s=612x612&w=0&k=20&c=2oydXQjmk7ZRQ-nMAfhdJ1p0x4xi-imwCbGA_tSsUec='
          },
          {
            name: 'Parasailing',
            price: '₹2,000 per ride',
            description: 'Experience thrilling aerial views of Kovalam’s coastline.',
            image: 'image: https://media.gettyimages.com/id/1141688597/photo/tandem-jump-in-paragliding.jpg?s=612x612&w=0&k=20'
          },
          {
            name: 'Jet Skiing',
            price: '₹2,500 for 15 minutes',
            description: 'High-speed fun on the waves for adventure lovers.',
            image: 'https://media.gettyimages.com/id/1411295710/photo/jet-ski-adventure.jpg?s=612x612&w=0&k=20&c=7s8iMUJDWOUgLp-2JusNVOqbU1GnKIU1KQdJtaBuMz8='
          }
        ],
        image: 'https://images.unsplash.com/photo-1615289139857-99b7eb0702dd?ixlib=rb-4.0.3',
        embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.986748907227!2d76.97849437605962!3d8.737879591464123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05df98a9f53c97%3A0x3f20b3f73917c3fa!2sKovalam%20Beach!5e0!3m2!1sen!2sin!4v1708368843211',
        latitude: 8.4003,
        longitude: 76.9787
      }      
    ]
  },
  {
    name: 'Maharashtra', 
    description: 'Home to beautiful Konkan coast beaches',
    coordinates: { x: 32, y: 60 },
    region: 'West India',
    highlights: ['Alibaug Beach', 'Juhu Beach', 'Tarkarli Beach'],
    beaches: [
        {
          name: 'Alibaug Beach',
          Review: 'Ideal for weekend travelers, history lovers, and adventure seekers.',
          description: 'Alibaug Beach is a popular coastal destination in Maharashtra, known for its black sand shores, scenic views of the Arabian Sea, and proximity to historic forts. The beach is famous for its beautiful sunsets, water sports, and the iconic Kolaba Fort visible during low tide.',
          famousPlaces: [
            {
              name: 'Kolaba Fort',
              distance: '1.5 km',
              description: 'A historic 17th-century fort built by Shivaji Maharaj, accessible during low tide by walking across the beach.',
              image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/6e/cc/97/img-20190929-064440870.jpg?w=800&h=500&s=1'
            },
            {
              name: 'Varsoli Beach',
              distance: '3 km',
              description: 'A quieter beach known for its cleanliness and peaceful surroundings, ideal for relaxation.',
              image: 'https://media.gettyimages.com/id/1075452524/photo/varsoli-beach-alibaug-india.jpg?s=612x612&w=0&k=20&c=dXCJ3JDtaBiWbKiRo-x89CKTuiPOXVMgCZdmcaFqRdQ='
            }
          ],
          activities: [
            {
              name: 'Banana Boat Ride',
              price: '₹500 per person',
              description: 'A fun and bumpy water adventure perfect for groups and thrill seekers.',
              image: 'https://media.gettyimages.com/id/993954088/photo/banana-boat-fun.jpg?s=612x612&w=0&k=20&c=faF2MjGeTzFfH_9XYsCdXLqaHa70WoJ78TEV8b4Ftm4='
            },
            {
              name: 'Jet Skiing',
              price: '₹700 for 15 minutes',
              description: 'Experience high-speed excitement over the waves with professional instructors.',
              image: 'https://media.gettyimages.com/id/1411295710/photo/jet-ski-adventure.jpg?s=612x612&w=0&k=20&c=7s8iMUJDWOUgLp-2JusNVOqbU1GnKIU1KQdJtaBuMz8='
            }
          ],
          image: 'https://images.unsplash.com/photo-1474533883693-59a44dbb964e?ixlib=rb-4.0.3',
          embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15085.685635587707!2d72.86785514999999!3d18.641400600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8f0425974a0c7%3A0xc8ea58b3bb7fd9a8!2sAlibaug%20Beach!5e0!3m2!1sen!2sin!4v1708339200000',
          latitude: 18.6411,
          longitude: 72.8722
        },
        {
          name: 'Juhu Beach',
          Review: 'Best for city dwellers, food lovers, and Bollywood enthusiasts.',
          description: 'Juhu Beach is one of Mumbai’s most famous beaches, known for its lively atmosphere, street food stalls, and Bollywood celebrity residences nearby. It is a popular spot for locals and tourists to enjoy scenic sunsets and recreational activities.',
          famousPlaces: [
            {
              name: 'ISKCON Temple',
              distance: '2 km',
              description: 'A serene and spiritual Hindu temple complex dedicated to Lord Krishna, known for its beautiful architecture.',
              image: 'https://media.gettyimages.com/id/2139378280/photo/priest-performing-ritual-in-iskcon-temple-in-juhu-mumbai-india.jpg?s=612x612&w=0&k=20&c=O6j7ii1VNR6tzSf_RHwXMU4WTDONGcpqQJu6ocT1jQc='
            },
            {
              name: 'Prithvi Theatre',
              distance: '3.5 km',
              description: 'A cultural hub for performing arts and theatre enthusiasts, offering regular shows and workshops.',
              image: 'https://www.prithvitheatre.org/_next/image?url=https%3A%2F%2Fin.bmscdn.com%2Fwebin%2Fprithvi%2Ftheatre.jpg&w=3840&q=75'
            }
          ],
          activities: [
            {
              name: 'Street Food Tasting',
              price: '₹150 per person',
              description: 'Try classic Mumbai snacks like pav bhaji, bhel puri, and vada pav along the beach.',
              image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0f/10/9f/c2.jpg'
            },
            {
              name: 'Horse Carriage Ride',
              price: '₹300 per ride',
              description: 'Enjoy a leisurely horse-drawn carriage ride along the beach during sunset.',
              image: 'https://media.gettyimages.com/id/1137123695/photo/couple-riding-in-a-horse-drawn-carriage-through-the-city.jpg?s=612x612&w=0&k=20&c=9jTL_lSWvsxBEQGYRPrrjG-HsO3fhUu345aqW0W4ZY8='
            }
          ],
          image: 'https://images.unsplash.com/photo-1715227262631-c0f8e0414b81?ixlib=rb-4.0.3',
          embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30161.16556886536!2d72.80894426955493!3d19.101263254919647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9bf95d4ba07%3A0x35047c9c36b6cea1!2sJuhu%2C%20Mumbai%2C%20Maharashtra%20400049!5e0!3m2!1sen!2sin!4v1742751905418!5m2!1sen!2sin',
          latitude: 19.0989,
          longitude: 72.8265
        },
        {
          name: 'Tarkarli Beach',
          Review: 'Ideal to visit in October to May.',
          description: 'Tarkarli Beach is a pristine coastal destination in Maharashtra, known for its crystal-clear waters, white sandy shores, and vibrant marine life. It is famous for scuba diving, snorkeling, and houseboat stays along the Karli River.',
          famousPlaces: [
            {
              name: 'Sindhudurg Fort',
              distance: '7 km',
              description: 'A 17th-century sea fort built by Shivaji Maharaj, known for its strategic location and architecture.',
              image: 'https://media.gettyimages.com/id/150012221/photo/vijaydurg-fort-and-village.jpg?s=612x612&w=0&k=20&c=6p1tOgYyIi6PQnqBklZK3n2kotxlDJh259D7cJrtwSI='
            },
            {
              name: 'Karli River Backwaters',
              distance: '2.5 km',
              description: 'A peaceful river stretch offering houseboat rides and stunning sunset views near the beach.',
              image: 'https://media.gettyimages.com/id/565049295/photo/kali-river-backwater.jpg?s=612x612&w=0&k=20&c=YXRiUkaghixHfwCftsDciXe0pHlhiP40vHzVsNrFJTY='
            }
          ],
          activities: [
            {
              name: 'Scuba Diving',
              price: '₹1500 per person',
              description: 'Explore the vibrant coral reefs and marine life under the expert guidance of certified instructors.',
              image: 'https://media.gettyimages.com/id/498283106/photo/underwater-scuba-diver-explore-and-enjoy-coral-reef-sea-life.jpg?s=612x612&w=0&k=20&c=xOj00xaZTpy5-AtKvMvIHHfexz9miSSct_CXb6F9KVA='
            },
            {
              name: 'Snorkeling',
              price: '₹800 per person',
              description: 'Enjoy shallow water marine exploration, ideal for beginners and kids.',
              image: 'https://media.gettyimages.com/id/502642217/photo/kid-on-the-reef.jpg?s=612x612&w=0&k=20&c=7vfitjl_ZrrGHzE2XkdKPJ1PoQL0FmOvwqsKxer1GmA='
            }
          ],
          image: 'https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?ixlib=rb-4.0.3',
          embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15331.312896097465!2d73.48749454999999!3d16.0419934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe48f16d0269c7%3A0xc10d99781cc78e75!2sTarkarli%20Beach!5e0!3m2!1sen!2sin!4v1708372200000',
          latitude: 16.0411,
          longitude: 73.4633
        }
      ]
  },
  {
    name: 'Gujarat',
    description: 'Features some of the longest coastlines in India',
    coordinates: { x: 22, y: 45 },
    region: 'West India',
    highlights: ['Diu Beach', 'Dwaraka Beach', 'Mandvi Beach'],
    beaches: [
        {
          name: 'Dwaraka Beach',
          Review: 'Suitable for Families, Adventure Seekers, Water Sports Enthusiasts, Couples.',
          description: 'Dwaraka Beach is a sacred and serene coastal destination in Gujarat, located near the famous Dwarkadhish Temple. It is known for its spiritual significance, golden sands, and beautiful sunsets over the Arabian Sea.',
          image: 'https://images.unsplash.com/photo-1600261006257-2e937f6c025e?ixlib=rb-4.0.3',
          embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29545.33210331588!2d68.94629307501205!3d22.23376015297856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39569c3a770ffb07%3A0xa58bec5d5f233a0a!2sDwarka%20Beach!5e0!3m2!1sen!2sin!4v1742740230365!5m2!1sen!2sin',
          latitude: 22.2378,
          longitude: 68.9627,
          famousPlaces: [
            {
              name: 'Dwarkadhish Temple',
              distance: '0.5 km',
              description: 'An ancient Hindu temple dedicated to Lord Krishna, known for its architecture and spiritual aura.',
              image: 'https://media.gettyimages.com/id/675380458/photo/this-photograph-taken-on-april-29-shows-a-general-view-of-the-dwarkadhish-temple-at-dwarka.jpg?s=612x612&w=0&k=20&c=zUE7TXpPgeJ_U5Tk2jWKVDRB11d1j3ZvaqXUBDMPElU='
            },
            {
              name: 'Rukmini Devi Temple',
              distance: '2.3 km',
              description: 'Dedicated to Krishna’s consort Rukmini, this temple is known for its detailed carvings and peaceful environment.',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Rukmini_temple.JPG/330px-Rukmini_temple.JPG'
            },
            {
              name: 'Sudama Setu',
              distance: '0.6 km',
              description: 'A pedestrian bridge over the Gomti river offering great views of the beach and temples.',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Sudama_Setu_during_Dwaraka_DWARASPDB_2015_%289%29.jpg/375px-Sudama_Setu_during_Dwaraka_DWARASPDB_2015_%289%29.jpg'
            },
            {
              name: 'Gomti Ghat',
              distance: '0.7 km',
              description: 'A sacred bathing ghat on the banks of the Gomti River, often visited by pilgrims.',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Gomti_at_Lucknow.jpg/500px-Gomti_at_Lucknow.jpg'
            }
          ],
          activities: [
            {
              name: 'Camel Ride',
              price: 'INR 150',
              description: 'Enjoy a traditional camel ride along the beach at sunset.',
              image: 'https://media.gettyimages.com/id/947220990/photo/indian-men-riding-camels-on-sand-dunes-rajasthan-india.jpg?s=612x612&w=0&k=20&c=a2DPYtKmJW8QjA18uun1vmv9xoYK6rgNrHaWFNPx-FA='
            },
            {
              name: 'Spiritual Walk',
              price: 'Free',
              description: 'Take a calm spiritual walk from Dwarkadhish Temple to the Gomti Ghat.',
              image: 'https://media.gettyimages.com/id/932093402/photo/woman-walking-in-balinese-temple.jpg?s=612x612&w=0&k=20&c=fFQt9_rkYLjMoRF5gjlQYWvOXAEufhRu_2ay4TByoJY='
            },
            {
              name: 'Photography Tour',
              price: 'INR 300',
              description: 'Capture scenic shots of temples, ghats, and the Arabian coastline.',
              image : 'https://media.gettyimages.com/id/485614781/photo/photographer-taking-image-of-the-blue-city-rooftops-jodhpur.jpg?s=612x612&w=0&k=20&c=q-HR-Jj92hao3cQfkpKxbqZiD5gJOEb_ESg1u0EIqY4='
            }
          ]
        },
        {
          name: 'Mandvi Beach',
          Review: 'Suitable for Pilgrims, Spiritual Travelers, History Enthusiasts, Elderly Visitors.',
          description: 'Mandvi Beach is a pristine and peaceful beach in Gujarat, known for its golden sands, calm waters, and the historical Vijay Vilas Palace nearby. It is a perfect spot for relaxation and camel rides along the shore.',
          image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/fc/fd/df/mandvi-beach.jpg?w=2000&h=-1&s=1',
          embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58835.70632156935!2d69.29546442114406!3d22.830917761700665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395135cfb3ffffff%3A0xb7c3fcf0d26d8510!2sMandvi%20Beach!5e0!3m2!1sen!2sin!4v1742750097365!5m2!1sen!2sin',
          latitude: 22.8318,
          longitude: 69.3560,
          famousPlaces: [
            {
              name: 'Vijay Vilas Palace',
              distance: '6 km',
              description: 'A grand royal residence with Rajput architecture and scenic gardens.',
              image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/9d/e1/b2/caption.jpg?w=1400&h=-1&s=1'
            },
            {
              name: 'Shipbuilding Yard',
              distance: '3 km',
              description: 'Traditional wooden shipbuilding site offering a glimpse into maritime heritage.',
              image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/1a/8f/ea/mandvi-shipyards.jpg?w=1400&h=-1&s=1'
            },
            {
              name: 'Topansar Lake',
              distance: '1.5 km',
              description: 'A quiet freshwater lake ideal for birdwatching and relaxation.',
              image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/1d/42/14/nice-place-for-bird-likers.jpg?w=700&h=400&s=1'
            }
          ],
          activities: [
            {
              name: 'Camel Safari',
              price: 'INR 200',
              description: 'Enjoy a slow ride across the shore on a decorated camel.',
              image: 'https://media.gettyimages.com/id/1094423074/photo/a-scene-in-central-australia-1923-from-australia-new-zealand-and-oceania-in-pictures-by-h.jpg?s=612x612&w=0&k=20&c=B0Xq32zSGapuFOJ4npG9ml8l9m0yWAfgENKauWpX9UA='
            },
            {
              name: 'Beach Volleyball',
              price: 'INR 100',
              description: 'Engage in a fun match of volleyball with fellow beachgoers.',
              image: 'https://media-cdn.tripadvisor.com/media/photo-s/05/56/08/8c/palagama-beach.jpg'
            },
            {
              name: 'Jet Skiing',
              price: 'INR 500',
              description: 'Experience high-speed thrills on the calm waters of Mandvi.',
              image: 'https://media.gettyimages.com/id/1411295710/photo/jet-ski-adventure.jpg?s=612x612&w=0&k=20&c=7s8iMUJDWOUgLp-2JusNVOqbU1GnKIU1KQdJtaBuMz8='
            }
          ]
        },
        {
          name: 'Diu Beach',
          Review: 'Best time to visit is October to March, suitable for nature lovers.',
          description: 'Diu Beach is a serene coastal destination known for its soft golden sands, clear blue waters, and Portuguese-influenced architecture. It offers a mix of relaxation, adventure, and cultural exploration.',
          image: 'https://cdn.s3waas.gov.in/s3beb22fb694d513edcf5533cf006dfeae/uploads/bfi_thumb/2021010855-p11tkfz1agl8dn7xf8h7iwii8ok758dckpjgqratfu.jpg',
          embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59713.83249357943!2d70.83944474863281!3d20.70557329999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be31d327d33fb75%3A0x16e3d4d4e5308b31!2sNagoa%20Beach%20-%20Diu!5e0!3m2!1sen!2sin!4v1739988237373!5m2!1sen!2sin',
          latitude: 20.7140,
          longitude: 70.9879,
          famousPlaces: [
            {
              name: 'Diu Fort',
              distance: '3.5 km',
              description: 'A majestic Portuguese-era fort with sea-facing ramparts and cannons.',
              image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/84/5b/1b/front-view.jpg?w=1800&h=-1&s=1'
            },
            {
              name: 'St. Pauls Church',
              distance: '3 km',
              description: 'One of the best examples of baroque architecture in India, built in the 17th century.',
              image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/7f/ea/fc/st-paul-s-church-diu.jpg?w=1100&h=600&s=1'
            },
            {
              name: 'Naida Caves',
              distance: '4 km',
              description: 'A maze of rock formations and natural caves perfect for photography and exploration.',
              image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/de/ce/f3/naida-caves.jpg?w=1400&h=800&s=1'
            }
          ],
          activities: [
            {
              name: 'Parasailing',
              price: 'INR 600',
              description: 'Fly high above Diu Beach and enjoy panoramic views.',
              image: 'https://media.gettyimages.com/id/1141688597/photo/tandem-jump-in-paragliding.jpg?s=612x612&w=0&k=20&c=BJw8DTCbsEHza1kuOADmZFTr46cnlbOlA4x0sSQRmow='
            },
            {
              name: 'Banana Boat Ride',
              price: 'INR 300',
              description: 'A thrilling group activity on an inflatable banana-shaped boat.',
              image: ' https://media.gettyimages.com/id/993954088/photo/banana-boat-fun.jpg?s=612x612&w=0&k=20&c=faF2MjGeTzFfH_9XYsCdXLqaHa70WoJ78TEV8b4Ftm4='
            },
            {
              name: 'Snorkeling',
              price: 'INR 700',
              description: 'Explore shallow marine life in the clear blue waters of Diu.',
              image: 'https://media.gettyimages.com/id/502642217/photo/kid-on-the-reef.jpg?s=612x612&w=0&k=20&c=7vfitjl_ZrrGHzE2XkdKPJ1PoQL0FmOvwqsKxer1GmA='
            }
          ]
        }
      ]
  },
  {
    name: 'Tamil Nadu',
    description: 'Rich in cultural heritage with beautiful coastal areas',
    coordinates: { x: 38, y: 88 },
    region: 'South India',
    highlights: ['Marina Beach', 'Mahabalipuram Beach', 'Kanyakumari Beach'],
    beaches: [
      {
        name: 'Marina Beach',
        Review: 'Best to visit in November – February (Winter).',
        description: 'Marina Beach in Chennai is one of the longest urban beaches in the world, famous for its golden sands, vibrant atmosphere, and historic landmarks.',
        image: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRuQjepJfJd0La86ysUoH3a4clo7ZQ1CF7h26DXt3UTgiTDag1Mu_n4FQhaIbrLp9DHvhXf0tzfBduASOuYUceiKt1x-cFbeOtFzvVMkw',
        embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.760290789682!2d80.280711!3d13.046754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267d2b1e1f1b1%3A0x8f8e0b8e0b8e0b8e!2sMarina%20Beach!5e0!3m2!1sen!2sin!4v1708372200000',
        latitude: 13.0500,
        longitude: 80.2824,
        famousPlaces: [
          {
            name: 'Vivekananda House',
            distance: '0.5 km',
            description: 'A historic landmark associated with Swami Vivekananda’s visit to Chennai, showcasing exhibits on his life.',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/2b/34/e9/house.jpg?w=1800&h=1000&s=1'
          },
          {
            name: 'Madras University',
            distance: '0.8 km',
            description: 'One of the oldest and most prestigious universities in India with colonial architecture.',
            image: 'https://www.shutterstock.com/shutterstock/photos/2476206729/display_1500/stock-photo-old-senat-house-institute-of-distance-education-university-of-madras-2476206729.jpg'
          },
          {
            name: 'Lighthouse Chennai',
            distance: '1 km',
            description: 'An iconic lighthouse with a viewing gallery offering panoramic views of Marina Beach.',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/18/29/7b/views-from-atop-the-light.jpg?w=1000&h=-1&s=1'
          },
          {
            name: 'Government Museum',
            distance: '3 km',
            description: 'A vast museum complex showcasing ancient artifacts, sculptures, and natural history exhibits.',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/e1/c5/ff/government-museum.jpg?w=1800&h=1000&s=1'
          }
        ],
        activities: [
          {
            name: 'Horse Riding',
            price: 'INR 100',
            description: 'Enjoy short horse rides along the beachside guided by locals.',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/c9/e3/0f/a-riding-lesson-in-progress.jpg?w=700&h=-1&s=1'
          },
          {
            name: 'Street Food Tasting',
            price: 'INR 150',
            description: 'Try popular local snacks like sundal, bhaji, and murukku along the beachfront.',
            image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0b/21/3d/7b.jpg'
          },
          {
            name: 'Kite Flying',
            price: 'INR 80',
            description: 'Popular activity especially during weekends with plenty of open space.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Go_fly_a_kite_%287511318416%29.jpg/330px-Go_fly_a_kite_%287511318416%29.jpg'
          }

                  ]
      },
      {
        name: 'Mahabalipuram Beach',
        Review: 'Suitable for History Buffs, Architecture Enthusiasts, Adventure Seekers.',
        description: 'Mahabalipuram Beach is a picturesque coastal destination known for its ancient rock-cut temples, golden sands, and vibrant cultural heritage.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/9f/2c/2f/mahabalipuram-beach.jpg?w=1800&h=-1&s=1',
        embedUrl : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31148.1393186157!2d80.17501434125403!3d12.61402484112966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53acaf771807fb%3A0xe8f764e4f0f1ec45!2sMahabalipuram%20Beach!5e0!3m2!1sen!2sin!4v1742753273161!5m2!1sen!2sin',
        latitude: 12.6208,
        longitude: 80.1914,
        famousPlaces: [
          {
            name: 'Shore Temple',
            distance: '0.3 km',
            description: 'A UNESCO World Heritage Site built during the Pallava dynasty, overlooking the Bay of Bengal.',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/d8/8a/18/photo1jpg.jpg?w=1800&h=1000&s=1'
          },
          {
            name: 'Pancha Rathas',
            distance: '0.9 km',
            description: 'Monolithic rock-cut temples representing different architectural styles of the Pallavas.',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/ce/1a/37/wonderfulcarving.jpg?w=1800&h=1000&s=1'
          },
          {
            name: 'Arjuna’s Penance',
            distance: '0.8 km',
            description: 'A massive rock carving depicting scenes from the Mahabharata.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Mahabalipuram_pano2.jpg/1200px-Mahabalipuram_pano2.jpg'
          },
          {
            name: 'Butter Ball Rock',
            distance: '1.2 km',
            description: 'A gravity-defying giant boulder balanced on a slope.',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/39/19/37/spycham-maslo-krishny.jpg?w=1800&h=-1&s=1'
          }
        ],
        activities: [
          {
            name: 'Surfing',
            price: 'INR 1000',
            description: 'Ride the waves on this adventure-friendly beach with surfing schools available.',
            image: '  https://media.gettyimages.com/id/143918363/photo/standing-tall.jpg?s=612x612&w=0&k=20&c=CmYEL5PCpEPRU8w1G3ppYPgBP9sUqApsC7Jtdenj3ek='
          },
          {
            name: 'Seafood Feast',
            price: 'INR 400',
            description: 'Enjoy freshly caught seafood in shacks and seaside restaurants.',
            image: 'https://media-cdn.tripadvisor.com/media/photo-f/13/88/d9/46/20180624-111726-largejpg.jpg'
          },
          {
            name: 'Shopping Handicrafts',
            price: 'INR 300',
            description: 'Buy stone carvings and handmade crafts from local markets.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Iranian_Handicraft.JPG/330px-Iranian_Handicraft.JPG'
          }
        ]
      },
      {
        name: 'Kanykumari Beach',
        Review: 'suitable for Pilgrims, Nature Lovers, Sunrise & Sunset Enthusiasts.',
        description: 'Kanyakumari Beach is a unique coastal destination where the Arabian Sea, Bay of Bengal, and Indian Ocean meet, offering breathtaking sunrise and sunset views.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/26/a8/00/thiruvalluvar-statue.jpg?w=1600&h=900&s=1',
        embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1975.0733171253262!2d77.55297148811968!3d8.08652465352786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04ed310b4e670d%3A0xa41f5be93b4cba9a!2sKanyakumari%20Beach!5e0!3m2!1sen!2sin!4v1742753332120!5m2!1sen!2sin',
        latitude: 8.0780,
        longitude: 77.5520,
        famousPlaces: [
          {
            name: 'Vivekananda Rock Memorial',
            distance: '0.6 km (boat ride)',
            description: 'A spiritual monument built in honor of Swami Vivekananda situated on a small island.',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/94/8f/da/img-20170304-wa0027-largejpg.jpg?w=1400&h=-1&s=1'
          },
          {
            name: 'Thiruvalluvar Statue',
            distance: '0.6 km (boat ride)',
            description: 'A 133-feet tall statue of the Tamil poet and philosopher Thiruvalluvar.',
            image:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b5/2a/fb/thiruvalluvar-statue.jpg?w=1800&h=1000&s=1'
          },
          {
            name: 'Kanyakumari Temple',
            distance: '0.4 km',
            description: 'An ancient temple dedicated to the goddess Devi Kanya Kumari.',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/d1/6f/d6/20210403-183120-largejpg.jpg?w=1000&h=600&s=1'
          },
          {
            name: 'Gandhi Memorial Mandapam',
            distance: '0.5 km',
            description: 'Built in honor of Mahatma Gandhi where his ashes were kept before immersion.',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/6f/6b/a9/gandhi-memorial.jpg?w=1800&h=1000&s=1'
          }
        ],
        activities: [
          {
            name: 'Sunrise Viewing',
            price: 'Free',
            description: 'Experience the iconic sunrise over the confluence of three seas.',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/8a/6a/3f/sunrise.jpg?w=1100&h=600&s=1'
          },
          {
            name: 'Boating to Rock Memorial',
            price: 'INR 50',
            description: 'Take a boat ride to Vivekananda Rock and Thiruvalluvar Statue.',
            image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/71/ad/8a.jpg'
          },
          {
            name: 'Photography',
            price: 'INR 200',
            description: 'Capture beautiful seascapes and cultural monuments.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Photographer_Photographing_Nevada_Mountains.jpg/500px-Photographer_Photographing_Nevada_Mountains.jpg'
          },
          {
            name: 'Cultural Souvenir Shopping',
            price: 'INR 300',
            description: 'Buy conch shells, local crafts, and traditional souvenirs.',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/cc/16/65/getlstd-property-photo.jpg?w=1000&h=800&s=1'
          }
        ]
      }
      
    ]
  },
  {
    name: 'Andhra Pradesh',
    description: 'Known for its pristine and less crowded beaches',
    coordinates: { x: 45, y: 75 },
    region: 'South India',
    highlights: ['Rishikonda Beach', 'Ramakrishna Beach', 'Yarada Beach'],
    beaches: [
        {
          name: 'Rishikonda Beach',
          Review: 'Suitable for Adventure seekers, water sports lovers.',
          description: 'Rishikonda Beach is a picturesque beach in Visakhapatnam, Andhra Pradesh, known for its golden sands, clear waters, and adventure water sports.',
          image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/15/d6/a2/img-20190623-123326-largejpg.jpg?w=1400&h=-1&s=1',
          embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.0000000000005!2d83.00000000000001!3d17.000000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a394313d6e6e6e6%3A0x7e7e7e7e7e7e7e7e!2sRishikonda%20Beach!5e0!3m2!1sen!2sin!4v1708372200000',
          latitude: 17.7583,
          longitude: 83.3689,
          famousPlaces: [
            {
              name: 'Kailasagiri',
              distance: '9 km',
              description: 'A scenic hilltop park offering panoramic views of the coastline, famous for the giant Shiva-Parvati statue.',
              image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/c3/86/31/kailashigiri18-largejpg.jpg?w=1200&h=700&s=1'
            },
            {
              name: 'INS Kursura Submarine Museum',
              distance: '11 km',
              description: 'A real submarine turned museum, showcasing life and operations inside a naval submarine.',
              image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/41/f5/68/outside-submarine.jpg?w=1100&h=600&s=1'
            },
            {
              name: 'Tenneti Park',
              distance: '10 km',
              description: 'A beachfront park with lush greenery, ocean views, and a favorite spot for photography.',
              image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/3e/70/fd/20171104-060853-01-largejpg.jpg?w=1400&h=-1&s=1'
            },
            {
              name: 'Indira Gandhi Zoological Park',
              distance: '13 km',
              description: 'A large zoo nestled in forested hills, home to diverse flora and fauna.',
              image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/7f/00/15/visakhapatnam-zoo.jpg?w=1800&h=1000&s=1'
            }
          ],
          activities: [
            {
              name: 'Jet Skiing',
              price: 'INR 600',
              description: 'Experience the thrill of speeding through the waves on a high-powered jet ski.',
              image: ' https://media.gettyimages.com/id/1411295710/photo/jet-ski-adventure.jpg?s=612x612&w=0&k=20&c=7s8iMUJDWOUgLp-2JusNVOqbU1GnKIU1KQdJtaBuMz8='
            },
            {
              name: 'Banana Boat Ride',
              price: 'INR 400',
              description: 'A fun and bumpy ride across the surf on an inflatable banana-shaped boat.',
              image: 'https://media.gettyimages.com/id/993954088/photo/banana-boat-fun.jpg?s=612x612&w=0&k=20&c=faF2MjGeTzFfH_9XYsCdXLqaHa70WoJ78TEV8b4Ftm4='
            },
            {
              name: 'Parasailing',
              price: 'INR 800',
              description: 'Fly high above the beach while being towed by a speedboat for panoramic views.',
              image: 'https://media.gettyimages.com/id/1450411763/photo/man-flying-the-paragliding.jpg?s=612x612&w=0&k=20&c=7OdvF0ou9lDowIYfqRc8HmbvHsMeV28jxOhImamkj1o='
            },
            {
              name: 'Beach Volleyball',
              price: 'INR 150',
              description: 'Enjoy a friendly game of volleyball with fellow beachgoers.',
              image: 'https://media-cdn.tripadvisor.com/media/photo-s/05/56/08/8c/palagama-beach.jpg'
            }
          ]
        },
      
        {
          name: 'Ramakrishna Beach',
          Review: 'Suitable for Families, casual visitors, photographers, food lovers, best time to visit November to February.',
          description: 'Ramakrishna Beach, located in Visakhapatnam, is a popular beach known for its scenic beauty, peaceful atmosphere, and vibrant promenade.',
          image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/7e/fe/19/caption.jpg?w=1100&h=600&s=1',
          embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15202.610920872668!2d83.31433457105457!3d17.713857772187488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39436f113dca6d%3A0xd76a1de2271dff26!2sRamakrishna%20Beach!5e0!3m2!1sen!2sin!4v1742753668129',
          latitude: 17.7175,
          longitude: 83.3442,
          famousPlaces: [
            {
              name: 'Victory at Sea War Memorial',
              distance: '0.5 km',
              description: 'A tribute to the Indian Navy’s victory in the 1971 war with Pakistan, located right on the beach road.',
              image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/31/09/1f/img-20190118-174139-largejpg.jpg?w=800&h=500&s=1'
            },
            {
              name: 'Visakha Museum',
              distance: '1 km',
              description: 'A maritime and historical museum showcasing artifacts, models, and naval memorabilia.',
              image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/56/0b/96/visakha-museum.jpg?w=1800&h=1000&s=1'
            },
            {
              name: 'VUDA Park',
              distance: '2 km',
              description: 'A well-maintained park with skating rink, musical fountain, and children’s play area.',
              image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/76/c0/33/vuda-park.jpg?w=1800&h=1000&s=1'
            },
            {
              name: 'AU Convention Center',
              distance: '3.5 km',
              description: 'A major venue for events and exhibitions near the beach.',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Andhra_University_Convention_Centre_02.jpg/1280px-Andhra_University_Convention_Centre_02.jpg'
            }
          ],
          activities: [
            {
              name: 'Street Food Tasting',
              price: 'INR 200',
              description: 'Savor local delights like murri mixture, pani puri, and masala corn from beachside stalls.',
              image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0b/21/3d/85.jpg'
            },
            {
              name: 'Camel Rides',
              price: 'INR 150',
              description: 'Enjoy a short ride along the shore on a decorated camel.',
              image: 'https://media.gettyimages.com/id/947220990/photo/indian-men-riding-camels-on-sand-dunes-rajasthan-india.jpg?s=612x612&w=0&k=20&c=a2DPYtKmJW8QjA18uun1vmv9xoYK6rgNrHaWFNPx-FA='
            },
            {
              name: 'Promenade Walk',
              price: 'Free',
              description: 'Take a peaceful walk along the vibrant and clean beachfront promenade.',
              image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/e6/b4/22/img-20190316-170803-largejpg.jpg?w=1200&h=700&s=1'
            }
          ]
        },
      
        {
          name: 'Yarada Beach',
          Review: 'Suitable for Peace seekers, nature lovers, couples, photographers.',
          description: 'Yarada Beach, located near Visakhapatnam, is a secluded and pristine beach surrounded by lush green hills, offering a serene escape from the city.',
          image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/b3/53/82/photo1jpg.jpg?w=1800&h=1000&s=1',
          embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15207.347264949381!2d83.26280677102841!3d17.657886179293172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39421da4370733%3A0xa4ef41bc1f76ebe8!2sYarada%20Beach!5e0!3m2!1sen!2sin!4v1742753725995',
          latitude: 17.6542,
          longitude: 83.2775,
          famousPlaces: [
            {
              name: 'Dolphins Nose Light House',
              distance: '6 km',
              description: 'An iconic cliff-top lighthouse offering stunning views of the Bay of Bengal.',
              image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/96/60/e2/photo2jpg.jpg?w=1800&h=1000&s=1'
            },
            {
              name: 'Gangavaram Port Viewpoint',
              distance: '8 km',
              description: 'Offers a fantastic view of the port and nearby industrial operations with sea backdrops.',
              image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/4d/ba/71/gangavaram-beach.jpg?w=600&h=300&s=1'
            },
            {
              name: 'Simhachalam Temple',
              distance: '23 km',
              description: 'An ancient and architecturally rich temple dedicated to Lord Narasimha.',
              image: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/8d/22/c9/simhachalam-temple.jpg'
            }
          ],
          activities: [
            {
              name: 'Picnic with Sea View',
              price: 'Free',
              description: 'Enjoy a quiet picnic by the shore, away from the crowds.',
              image: 'https://plus.unsplash.com/premium_photo-1663119029722-0da758fa1181?&ixlib=rb-4.0.3'
            },
            {
              name: 'Beach Meditation',
              price: 'Free',
              description: 'Unwind and relax with beachside yoga or meditation surrounded by nature.',
              image: 'https://plus.unsplash.com/premium_photo-1661475850657-9b287f32ad45?&ixlib=rb-4.0.3'
            },
            {
              name: 'Nature Photography',
              price: 'Free',
              description: 'Capture the lush greenery and dramatic seascapes at this hidden gem.',
              image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3'
            }
          ]
        }
      ]
  },
  {
    name: 'Odisha',
    description: 'Features serene beaches and rich cultural heritage',
    coordinates: { x: 58, y: 62 },
    region: 'East India',
    highlights: ['Puri Beach', 'Chandipur Beach', 'Gopalpur Beach'],
    beaches: [
        {
          name: 'Puri Beach',
          Review: 'Suitable for Pilgrims, families, cultural tourists, adventure seekers.',
          description: 'Puri Beach, located on the Bay of Bengal in Odisha, is famous for its golden sands, spiritual significance, and vibrant beachside activities.',
          image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/45/18/4e/sunrise-from-puri-beach.jpg?w=1400&h=800&s=1',
          embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.0000000000005!2d85.00000000000001!3d19.000000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a394313d6e6e6e6%3A0x7e7e7e7e7e7e7e7e!2sPuri%20Beach!5e0!3m2!1sen!2sin!4v1708372200000',
          latitude: 19.7983,
          longitude: 85.8274,
          famousPlaces: [
            {
              name: 'Jagannath Temple',
              distance: '1.2 km',
              description: 'A sacred Hindu temple and one of the Char Dham pilgrimage sites.',
              image:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/43/79/39/the-gleaming-temple.jpg?w=1600&h=800&s=1'
            },
            {
              name: 'Puri Swargadwar Market',
              distance: '500 m',
              description: 'Bustling market known for handicrafts, shells, and local snacks.',
              image: 'https://media-cdn.tripadvisor.com/media/photo-s/17/10/23/0b/the-marketplace-known.jpg'
            },
            {
              name: 'Narendra Tank',
              distance: '2.5 km',
              description: 'A holy tank used during rituals, especially during the Chandan Yatra.',
              image: 'https://media-cdn.tripadvisor.com/media/photo-s/09/74/8d/33/narendra-tank.jpg'
            },
            {
              name: 'Sudarsan Sand Art Museum',
              distance: '650 m',
              description: 'Museum showcasing the stunning sand sculptures by Sudarsan Pattnaik.',
              image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/f3/8f/3a/wonderful-sculptures.jpg?w=1600&h=-1&s=1'
            }
          ],
          activities: [
            {
              name: 'Camel Ride',
              price: 'INR 150',
              description: 'Enjoy a scenic ride along the beach on a decorated camel.',
              image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/b9/04/b8/we-were-just-asking-about.jpg?w=2000&h=1600&s=1'
            },
            {
              name: 'Beach Volleyball',
              price: 'INR 100 (equipment rental)',
              description: 'Friendly games set up on the sandy shores.',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/SBT_GBC2018.jpg/330px-SBT_GBC2018.jpg'
            },
            {
              name: 'Street Food Tasting',
              price: 'INR 50–200',
              description: 'Savor delicious local seafood and snacks along the promenade.',
              image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/1f/9a/a9.jpg'
            }
          ]
        },
        {
          name: 'Chandipur Beach',
          Review: 'Best Time to Visit November to February.',
          description: 'Chandipur Beach, located in Odisha, is known for its unique "vanishing sea" phenomenon, where the water recedes up to 5 km during low tide.',
          image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/f4/7c/c0/sunrise.jpg?w=1800&h=1000&s=1',
          embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29708.608754451834!2d87.0119112071103!3d21.44590083454637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1cf2cb47f43b01%3A0x3327f44e5f020eec!2sChandipur%20Beach!5e0!3m2!1sen!2sin!4v1742754032863!5m2!1sen!2sin',
          latitude: 21.4693,
          longitude: 87.0219,
          famousPlaces: [
            {
              name: 'DRDO Integrated Test Range',
              distance: '4.5 km',
              description: 'India’s missile testing facility located nearby.',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/DRDO%27s_enhanced_PINAKA_rocket_tested_on_November_4%2C_2020_%282%29.jpg/1920px-DRDO%27s_enhanced_PINAKA_rocket_tested_on_November_4%2C_2020_%282%29.jpg'
            },
            {
              name: 'Panchalingeswar Temple',
              distance: '35 km',
              description: 'A hilltop temple dedicated to Lord Shiva.',
              image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/f1/d4/82/best-holi-place-to-visit.jpg?w=1200&h=700&s=1'
            },
            {
              name: 'Balaramgadi Fishing Harbour',
              distance: '3 km',
              description: 'A calm spot where tourists can see fishermen at work.',
              image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/1a/a2/e6/early-morning-view.jpg?w=1600&h=900&s=1'
            },
            {
              name: 'Nilagiri Palace',
              distance: '42 km',
              description: 'A historic palace with a scenic setting and royal heritage.',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Nilagiri_Rajabati_Nilagiri_Baleswar.jpg/398px-Nilagiri_Rajabati_Nilagiri_Baleswar.jpg'
            }
          ],
          activities: [
            {
              name: 'Tide Watching',
              price: 'Free',
              description: 'Observe the rare vanishing sea phenomenon.',
              image: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/bb/65/70/low-tide-beach.jpg'
            },
            {
              name: 'Sand Biking',
              price: 'INR 200 per 30 mins',
              description: 'Ride quad bikes along the flat seabed.',
              image: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/b9/d1/0b/quad-biking-experience.jpg'
            },
            {
              name: 'Photography',
              price: 'Free',
              description: 'Capture surreal shots of the disappearing sea and marine life.',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Photographer_Photographing_Nevada_Mountains.jpg/500px-Photographer_Photographing_Nevada_Mountains.jpg'
            }
          ]
        },
        {
          name: 'Gopalpur Beach',
          Review: 'Suitable for Couples, solo travelers, peace seekers, seafood lovers.',
          description: 'Gopalpur Beach, located in Odisha, is a quiet and pristine beach known for its golden sands, gentle waves, and colonial history.',
          image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/84/81/97/gopalpur-beach.jpg?w=1100&h=600&s=1',
          embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15066.590215750757!2d84.89518752180992!3d19.254186119418275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d58fbdfda9d25%3A0x574db8f203402852!2sGopalpur%20Beach!5e0!3m2!1sen!2sin!4v1742754093704!5m2!1sen!2sin',
          latitude: 19.2636,
          longitude: 84.9054,
          famousPlaces: [
            {
              name: 'Gopalpur Lighthouse',
              distance: '450 m',
              description: 'Climb up for a panoramic view of the Bay of Bengal.',
              image: 'https://media-cdn.tripadvisor.com/media/photo-s/03/15/60/f6/gopalpur-beach.jpg'
            },
            {
              name: 'Old Jetty',
              distance: '700 m',
              description: 'Remnants of Gopalpur’s colonial port history.',
              image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/a0/20/b7/heritage.jpg?w=1400&h=800&s=1'
            },
            {
              name: 'Berhampur City',
              distance: '15 km',
              description: 'Known for temples, shopping, and authentic Odia cuisine.',
              image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/09/6b/4e/welcome-to-bhairavi-temple.jpg?w=600&h=500&s=1'
            },
            {
              name: 'Taratarini Temple',
              distance: '32 km',
              description: 'A prominent Shakti Peetha nestled on the Kumari hills.',
              image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/ff/6b/74/taratarini-temple.jpg?w=1400&h=800&s=1'
            }
          ],
          activities: [
            {
              name: 'Beach Walk',
              price: 'Free',
              description: 'Stroll along the calm and scenic beach.',
              image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/c4/60/23/beach-walk.jpg?w=1400&h=800&s=1'
            },
            {
              name: 'Seafood Tasting',
              price: 'INR 150–400',
              description: 'Enjoy fresh and authentic seafood at local shacks.',
              image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?&ixlib=rb-4.0.3'
            },
            {
              name: 'Photography',
              price: 'Free',
              description: 'Perfect beach for candid and nature photography.',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Photographer_Photographing_Nevada_Mountains.jpg/500px-Photographer_Photographing_Nevada_Mountains.jpg'
            }
          ]
        }
      ]
  },
  {
    name: 'Karnataka',
    description: 'Home to pristine beaches and rich marine life',
    coordinates: { x: 30, y: 75 },
    region: 'South India',
    highlights: ['Om Beach', 'Murudeshwara Beach', 'Gokarna Beach'],
    beaches: [
      {
        name: 'Om Beach',
        Review: 'Suitable for Backpackers, Adventure seekers, Solo travelers, Young groups',
        description: 'Om Beach, located in Gokarna, Karnataka, is famous for its unique Om-shaped shoreline, golden sands, and scenic coastal beauty. It is a hub for adventure seekers and spiritual travelers alike.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/53/5e/7f/om-beach.jpg?w=1800&h=1000&s=1',
        embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.760290789682!2d74.314182!3d14.525516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf7b1e1e1e1e1e%3A0x2e2e2e2e2e2e2e2e!2sOm%20Beach!5e0!3m2!1sen!2sin!4v1708372200000',
        latitude: 14.5146,
        longitude: 74.3220,
        famousPlaces: [
          {
            name: 'Half Moon Beach',
            distance: '1.5 km',
            description: 'A secluded crescent-shaped beach only accessible by boat or trek from Om Beach, perfect for peaceful escapes.',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/fd/43/f8/20190323-150527-largejpg.jpg?w=1400&h=800&s=1'
          },
          {
            name: 'Paradise Beach',
            distance: '2 km',
            description: 'Known for its rocky coastline and serene vibe, this beach is popular among backpackers and campers.',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/fa/d8/fd/photo2jpg.jpg?w=1800&h=1000&s=1'
          },
          {
            name: 'Gokarna Mahabaleshwar Temple',
            distance: '3.8 km',
            description: 'An ancient temple dedicated to Lord Shiva, drawing pilgrims from across India.',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/29/1d/20/caption.jpg?w=1800&h=-1&s=1'
          }
        ],
        activities: [
          {
            name: 'Banana Boat Ride',
            price: 'INR 400',
            description: 'Thrilling group activity ideal for adventure seekers.',
            image: 'https://media.gettyimages.com/id/993954088/photo/banana-boat-fun.jpg?s=612x612&w=0&k=20&c=faF2MjGeTzFfH_9XYsCdXLqaHa70WoJ78TEV8b4Ftm4='
          },
          {
            name: 'Jet Skiing',
            price: 'INR 600',
            description: 'Experience high-speed fun on the waves of Om Beach.',
            image: 'https://media.gettyimages.com/id/1411295710/photo/jet-ski-adventure.jpg?s=612x612&w=0&k=20&c=7s8iMUJDWOUgLp-2JusNVOqbU1GnKIU1KQdJtaBuMz8='
          },
          {
            name: 'Yoga Sessions',
            price: 'INR 300',
            description: 'Join morning yoga sessions on the beach for relaxation and mindfulness.',
            image: 'https://images.unsplash.com/photo-1608405059861-b21a68ae76a2?&ixlib=rb-4.0.3'
          }
        ]
      },
      {
        name: 'Murudeshwara Beach',
        Review: 'Suitable for Pilgrims, Families, Spiritual travelers,best time to visit in September to february',
        description: 'Murudeshwara Beach, located in Karnataka, is famous for its pristine shoreline, breathtaking sunsets, and the iconic Murudeshwara Temple with its towering Shiva statue.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/00/8e/3e/murudeshwara-beach.jpg?w=1000&h=600&s=1',
        embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.595021759692!2d74.48375317323388!3d14.101067689115089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc47b6a156dc8d%3A0x5d35327bef7b26a2!2sMurudeshwara%20Beach!5e0!3m2!1sen!2sin!4v1742752571998!5m2!1sen!2sin',
        latitude: 14.0943,
        longitude: 74.4840,
        famousPlaces: [
          {
            name: 'Murudeshwara Temple',
            distance: '0.2 km',
            description: 'Home to the second tallest Shiva statue in the world, overlooking the beach.',
            image: 'https://media.istockphoto.com/id/1205209231/photo/very-famous-and-among-the-tallest-statue-of-lord-shiva-meditating-in-lotus-pose-with-trident.jpg?s=612x612&w=0&k=20&c=Etb4QSsTM_E4ZprhO_YkIZj1xdu2DONEauTBylvtuQE='
          },
          {
            name: 'Netrani Island',
            distance: '20 km',
            description: 'A popular spot for scuba diving and marine life exploration.',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/07/b9/61/netrani-island.jpg?w=1800&h=-1&s=1'
          },
          {
            name: 'Bhatkal Fort',
            distance: '16 km',
            description: 'A historic fort near Bhatkal showcasing Indo-Islamic architecture.',
            image: 'https://media.istockphoto.com/id/1419238438/photo/the-beautiful-fortress-of-mirjan-fort.jpg?s=612x612&w=0&k=20&c=TF1ib4ncZy0cx1hIjI8VpdByQNZH-OgfkrD1F0cX_zY='
          }
        ],
        activities: [
          {
            name: 'Scuba Diving (Netrani)',
            price: 'INR 3500',
            description: 'Explore the rich marine biodiversity around Netrani Island.',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/07/b9/61/netrani-island.jpg?w=1800&h=-1&s=1'
          },
          {
            name: 'Temple Tour',
            price: 'INR 200',
            description: 'Guided temple visits with spiritual stories and history.',
            image : 'https://media-cdn.tripadvisor.com/media/photo-s/0c/d6/72/49/front-view-of-the-temple.jpg'
          },
          {
            name: 'Beach Camel Rides',
            price: 'INR 150',
            description: 'Enjoy scenic camel rides along the beach, great for families.',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/74/e6/ae/bali-camel-safari.jpg?w=1400&h=-1&s=1'
          }
        ]
      },
      {
        name: 'Gokarna Beach',
        Review: 'Suitable for Spiritual seekers, Budget travelers, Peace lovers.',
        description: 'Gokarna Beach, located in Karnataka, is a serene and spiritual destination known for its golden sands, tranquil waters, and proximity to sacred temples.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/85/2f/d1/caption.jpg?w=1400&h=800&s=1',
        embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30896.802558069725!2d74.29299874391636!3d14.536253942661226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe83d61cc8edb7%3A0x909513ca502e1759!2sGokarna%20Main%20Beach!5e0!3m2!1sen!2sin!4v1742752487310!5m2!1sen!2sin',
        latitude: 14.5500,
        longitude: 74.3184,
        famousPlaces: [
          {
            name: 'Mahabaleshwar Temple',
            distance: '0.3 km',
            description: 'A historic temple dedicated to Lord Shiva, attracting devotees all year round.',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/66/83/35/mt11.jpg?w=800&h=500&s=1'
          },
          {
            name: 'Kudle Beach',
            distance: '1.2 km',
            description: 'A peaceful stretch perfect for yoga, sunset watching, and beach cafes.',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/28/d0/77/img-20181018-181616-largejpg.jpg?w=1400&h=-1&s=1'
          },
          {
            name: 'Mirjan Fort',
            distance: '11 km',
            description: 'A beautiful fort with rich historical significance and scenic views.',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/29/03/8c/img-20181019-095519-effects.jpg?w=1400&h=-1&s=1'
          }
        ],
        activities: [
          {
            name: 'Trekking to Beaches',
            price: 'INR 250',
            description: 'Trek between the beaches of Gokarna for stunning coastal views.',
            image: 'https://images.unsplash.com/photo-1447372383289-37ce73050855?&ixlib=rb-4.0.3'
          },
          {
            name: 'Spiritual Tour',
            price: 'INR 300',
            description: 'Visit temples and spiritual spots with a local guide.',
            image: 'https://images.unsplash.com/photo-1635961637832-e5988510438a?&ixlib=rb-4.0.3'
          },
          {
            name: 'Kayaking',
            price: 'INR 500',
            description: 'Enjoy kayaking through the gentle waves of the Arabian Sea.',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/96/9c/a5/caption.jpg?w=800&h=600&s=1'
          }
        ]
      }
    ]
  },

  {
    name: 'West Bengal',
    description: 'Features unique delta region beaches',
    coordinates: { x: 68, y: 50 },
    region: 'East India',
    highlights: ['Digha Beach', 'Mandarmani Beach', 'Bakkhali Beach'],
    beaches: [
        {
          name: 'Digha Beach',
          Review: 'Suitable for Families, Tourists and Weekend travelers',
          description: 'One of the widest beaches in West Bengal, known for its gentle slope and vibrant market areas. It offers beautiful sunsets, delicious seafood, and ample water activities.',
          image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?ixlib=rb-4.0.3',
          embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.0000000000005!2d87.00000000000001!3d21.000000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a394313d6e6e6e6%3A0x7e7e7e7e7e7e7e7e!2sDigha%20Beach!5e0!3m2!1sen!2sin!4v1708372200000',
          latitude: 21.6270,
          longitude: 87.5242,
          famousPlaces: [
            {
              name: 'Marine Aquarium & Regional Centre',
              distance: '1.5 km',
              description: 'One of India\'s largest marine aquariums, home to a variety of exotic marine species.',
              image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/23/af/87/lion-fish-species.jpg?w=1800&h=1000&s=1'
            },
            {
              name: 'Amarabati Park',
              distance: '2.0 km',
              description: 'A beautiful park with lush greenery, well-maintained gardens, and boating facilities.',
              image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/48/e6/05/amarabati-park.jpg?w=1100&h=-1&s=1'
            },
            {
              name: 'Digha Science Centre',
              distance: '1.8 km',
              description: 'A must-visit for science lovers, featuring interactive exhibits and planetarium shows.',
              image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/26/0f/35/entrance.jpg?w=1800&h=-1&s=1'
            },
            {
              name: 'Chandaneswar Temple',
              distance: '6.5 km',
              description: 'A revered Shiva temple attracting devotees from West Bengal and Odisha.',
              image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/31/25/36/digha-7168-13-jpg-destreviewim.jpg?w=1000&h=600&s=1'
            }
          ],
          activities: [
            {
              name: 'Banana Boat Ride',
              price: 'INR 400',
              description: 'Enjoy a thrilling ride across the waves on an inflatable banana boat.',
              image: 'https://media.gettyimages.com/id/993954088/photo/banana-boat-fun.jpg?s=612x612&w=0&k=20&c=faF2MjGeTzFfH_9XYsCdXLqaHa70WoJ78TEV8b4Ftm4='
            },
            {
              name: 'Speed Boating',
              price: 'INR 600',
              description: 'High-speed fun in the sea with great views of the coastline.',
              image: 'https://media.gettyimages.com/id/505249599/photo/dubai-uae-speedboat-the-spirit-of-abu-dhabi.jpg?s=612x612&w=0&k=20&c=KUQLzKhQbtuwIv7RxplYukNuE7fEIkSH5HmrfN6p4-0='
            },
            {
              name: 'Camel Ride',
              price: 'INR 150',
              description: 'Traditional camel rides along the beach, fun for all ages.',
              image: 'https://media.gettyimages.com/id/947220990/photo/indian-men-riding-camels-on-sand-dunes-rajasthan-india.jpg?s=612x612&w=0&k=20&c=a2DPYtKmJW8QjA18uun1vmv9xoYK6rgNrHaWFNPx-FA='
            },
            {
              name: 'Seafood Tasting Tour',
              price: 'INR 500',
              description: 'Indulge in the best of local seafood from beachside stalls.',
              image: 'https://media.gettyimages.com/id/1205744519/photo/close-up-of-young-asian-woman-eating-freshly-made-sushi-with-side-dish-and-green-tea-in-a.jpg?s=612x612&w=0&k=20&c=FwSxCch2-GF_t0aFCCICUJeqRQZONTqhbXQE8K50IKs='
            }
          ]
        },
        {
          name: 'Mandarmani Beach',
          Review: 'Suitable for Adventure seekers and Couples',
          description: 'A serene and less crowded beach in West Bengal, known for its long motorable shoreline and water sports activities.',
          image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3',
          embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59334.53193488415!2d87.5724495216797!3d21.647970900000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a032fd93a4bf789%3A0xa8e634453578d6a3!2sMandarmani%20Beach!5e0!3m2!1sen!2sin!4v1742754587450!5m2!1sen!2sin',
          latitude: 21.6542,
          longitude: 87.7164,
          famousPlaces: [
            {
              name: 'Digha Beach',
              distance: '15 km',
              description: 'A popular sea beach known for its scenic beauty and vibrant atmosphere.',
              image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?ixlib=rb-4.0.3'
            },
            {
              name: 'Shankarpur Beach',
              distance: '12 km',
              description: 'A less explored beach offering tranquility and a glimpse into local fishing traditions.',
              image: 'https://media.gettyimages.com/id/52248369/photo/indian-fishermen-embark-on-a-boat-as-they-go-fishing-in-the-early-morning-at-the-shankarpur.jpg?s=612x612&w=0&k=20&c=SxgqTmc11xx6d0WiO6eX_eqeozFKe5bloZNLaHeCbGE='
            },
            {
              name: 'Tajpur Beach',
              distance: '10 km',
              description: 'A secluded beach known for its red crabs and serene environment.',
              image: 'https://media.gettyimages.com/id/903706080/photo/tajpur-east-medinipur-west-bengal-india-a-fisherman-is-catching-fish-at-the-sea-beach.jpg?s=612x612&w=0&k=20&c=OsgB7kE8cRs_MLXurvqp8eXLliU3PSQrWgpTHyMcdG8='
            },
            {
              name: 'Udaipur Beach',
              distance: '20 km',
              description: 'A serene beach near the Odisha border, known for its pristine beauty.',
              image: 'https://media.gettyimages.com/id/71449574/photo/view-of-the-city-palace-and-hotels-from-lake-pichola-udaipur-rajasthan-india.jpg?s=612x612&w=0&k=20&c=tpwQ7-GB4rltAFAjthxH5aYkYppdJKP1pqUw9bl-I1w='
            }
          ],
          activities: [
            {
              name: 'Jet Skiing',
              price: 'INR 700',
              description: 'High-adrenaline water sport perfect for adventure lovers.',
              image: 'https://media.gettyimages.com/id/1411295710/photo/jet-ski-adventure.jpg?s=612x612&w=0&k=20&c=7s8iMUJDWOUgLp-2JusNVOqbU1GnKIU1KQdJtaBuMz8='
            },
            {
              name: 'ATV Ride on the Shore',
              price: 'INR 500',
              description: 'Ride along the wide beach sands on a powerful ATV.',
              image: 'https://media.gettyimages.com/id/990901866/photo/riding-a-quad-bike-on-a-beach.jpg?s=612x612&w=0&k=20&c=7w578VsjaBzaz9uRydA34-bwOL1SluEBCyXsglMRDTo='
            },
            {
              name: 'Beach Cycling',
              price: 'INR 200',
              description: 'Rent a cycle and ride freely along the coastline.',
              image: 'https://media.gettyimages.com/id/490686356/photo/taking-a-ride-in-the-sun.jpg?s=612x612&w=0&k=20&c=fn13CEWL57wnq17OM_GJAkq3d0KDPXzZk9oDsttM4mA='
            },
            {
              name: 'Parasailing',
              price: 'INR 1000',
              description: 'Enjoy the aerial view of the sea and beach while parasailing.',
              image: 'https://media.gettyimages.com/id/1141688597/photo/tandem-jump-in-paragliding.jpg?s=612x612&w=0&k=20&c=BJw8DTCbsEHza1kuOADmZFTr46cnlbOlA4x0sSQRmow='
            }
          ]
        },
        {
          name: 'Bakkhali Beach',
          Review: 'Suitable for Nature Lovers and peace-seekers, best to visit in October to March',
          description: 'A peaceful destination in West Bengal, known for its natural beauty, scenic surroundings, and quiet ambiance. Ideal for slow travelers and solitude seekers.',
          image: 'https://images.unsplash.com/photo-1695289260739-d188d264f096?ixlib=rb-4.0.3',
          embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14842.698971146217!2d88.25786232306966!3d21.559569790200847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a03a38a516e8abb%3A0xdd9ce1e7b6f1a246!2sBAKKHALI%20SEA%20BEACH!5e0!3m2!1sen!2sin!4v1742754480865!5m2!1sen!2sin',
          latitude: 21.5626,
          longitude: 88.2671,
          famousPlaces: [
            {
              name: 'Henrys Island',
              distance: '2 km',
              description: 'A peaceful retreat with mangroves and an untouched beach.',
              image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/01/23/6b/henry-island-is-an-island.jpg?w=1400&h=800&s=1'
            },
            {
              name: 'Jambu Dwip',
              distance: '3.5 km',
              description: 'A secluded island accessible only by boat, home to diverse marine life.',
              image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/10/d1/44/jambu-dwip.jpg?w=600&h=-1&s=1'
            },
            {
              name: 'Fraserganj Wind Park',
              distance: '1.5 km',
              description: 'A wind energy site featuring British-era ruins and beautiful sea views.',
              image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/71/7a/70/sea-shore-with-a-boat.jpg?w=1100&h=-1&s=1'
            },
            {
              name: 'Crocodile Breeding Centre',
              distance: '1.2 km',
              description: 'A conservation park offering an educational experience on crocodile species.',
              image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/d8/04/ab/caption.jpg?w=1400&h=800&s=1'
            }
          ],
          activities: [
            {
              name: 'Bird Watching',
              price: 'INR 100',
              description: 'Explore bird habitats around the mangroves and estuaries.',
              image: 'https://media.gettyimages.com/id/687335898/photo/santa-fe-nm-an-adult-male-house-finch-perches-on-a-tree-branch-in-santa-fe-new-mexico.jpg?s=612x612&w=0&k=20&c=tyzRTR069WPWc7p9rWUSayzQeIyA4Vuup2Vd4zbZqsM='
            },
            {
              name: 'Boating to Jambu Dwip',
              price: 'INR 300',
              description: 'Take a scenic boat ride to a nearby island rich in marine life.',
              image: 'https://media-cdn.tripadvisor.com/media/photo-s/08/35/e0/7b/jambu-dwip.jpg'
            },
            {
              name: 'Fishing Tour',
              price: 'INR 250',
              description: 'Experience the local fishing culture with guided fishing trips.',
              image: 'https://media-cdn.tripadvisor.com/media/photo-s/03/4f/89/08/tour-de-sundarban-day.jpg'
            },
            {
              name: 'Sunset Photography',
              price: 'INR 0',
              description: 'Capture serene sunset views — a paradise for photographers.',
              image: 'https://media.gettyimages.com/id/1258326686/photo/topshot-a-man-holds-up-a-boy-as-they-stand-next-to-a-palm-tree-at-sunset-on-the-outskirts-of.jpg?s=612x612&w=0&k=20&c=NnevA4hgOvqFrKaI-F1_iHydumfV_KcNLJJzYmUFf7Y='
            }
          ]
        }
      ]
  }
];