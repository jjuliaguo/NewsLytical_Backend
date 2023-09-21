const listings___ = [
  {
    id: 201,
    title: "AAA",
    images: [{ fileName: "jacket1" }],
    categoryId: 5,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 3,
    title: "Gray couch in a great condition",
    images: [{ fileName: "couch2" }],
    categoryId: 1,

    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 1,
    title: "Room & Board couch (great condition) - delivery included",
    description:
      "I'm selling my furniture at a discount price. Pick up at Venice. DM me asap.",
    images: [
      { fileName: "couch1" },
      { fileName: "couch2" },
      { fileName: "couch3" },
    ],
    price: 1000,
    categoryId: 1,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 2,
    title: "Designer wear shoes",
    images: [{ fileName: "shoes1" }],
    categoryId: 5,
    price: 100,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 102,
    title: "Canon 400D (Great Condition)",
    images: [{ fileName: "camera1" }],
    price: 300,
    categoryId: 3,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 101,
    title: "Nikon D850 for sale",
    images: [{ fileName: "camera2" }],
    price: 350,
    categoryId: 3,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 4,
    title: "Sectional couch - Delivery available",
    description: "No rips no stains no odors",
    images: [{ fileName: "couch3" }],
    categoryId: 1,
    price: 950,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 6,
    title: "Brown leather shoes",
    images: [{ fileName: "shoes2" }],
    categoryId: 5,
    price: 50,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
];

const listings = [
  {
    id: 1,
    title: "Last day due for submmit your tax file",
    categoryId: 1,
    article:
      "Find out what's new for the 2022 tax season and your filing and payment due dates. Begin by gathering your documents to report income and claim deductions, and choose how you want to file and send your completed tax return to the CRA.\n\n\nUnderstand your rights as a taxpayer and who should file a tax return.",
    images: [
      { fileName: "couch1" },
      { fileName: "couch2" },
      { fileName: "couch3" },
    ],
    userId: 1,
  },
  {
    id: 2,
    title:
      "Vancouver crews quickly douse ‘spectacular’ fire at downtown restaurant",
    categoryId: 2,
    article:
      "Vancouver firefighters were able to quickly extinguish a blaze in the city’s central business district that sent a massive cloud of smoke through the area Thursday evening. \n\n\nVancouver Fire and Rescue Services Deputy Chief of Operations Trevor Connelly said crews were called to a Japanese barbeque restaurant at 888 Nelson St. around 7 p.m., where a fire had broken out in the kitchen. \n\n\nThe fire got into the building’s air vents, he said, where it created a “spectacular” effect to onlookers because it was venting out of the roof.\n\n\nCrews put the fire down within about 45 minutes, and Connelly said there were no reports of injuries.",
    images: [{ fileName: "camera2" }],
    userId: 2,
  },
  {
    id: 3,
    categoryId: 3,
    title: "This Vancouver Couple Lives Rent-free in an Ambulance",
    article:
      "A couple from Vancouver has shared their unique solution for living rent-free in one of the world’s priciest cities for the past two and a half years. Raychel Reimer and Nick Hurley transformed an ambulance into a tiny home, which has gained over 1.2 million views on TikTok since they posted a video showcasing their setup. In 2019, they purchased the ambulance for $6,000 and spent an additional $6,000 to convert it into their living quarters. The video highlights the features of their cozy space, which includes a bed, a closet cleverly concealed in a bench, a kitchenette with a foot water pump, and a toilet. The couple has since taken their unique home on the road, driving through Canada, the United States, and Mexico.",
    images: [{ fileName: "shoes2" }],
    userId: 2,
  },
];

const addListing = (listing) => {
  listing.id = listings.length + 1;
  listings.push(listing);
};

const getListings = () => listings;

const getListing = (id) => listings.find((listing) => listing.id === id);

const filterListings = (predicate) => listings.filter(predicate);

module.exports = {
  addListing,
  getListings,
  getListing,
  filterListings,
};
