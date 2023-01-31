import  React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Heading  = ()=>(    
  <a href="/">    
    <img className="logo"
    alt ="logo" src = "https://yt3.googleusercontent.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"/>
  </a>
)


const Header = () =>{
  return (
  <div className = "header"> 
    <Heading />
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>contact us</li>
        <li>About</li>
        <li>Cart</li>
      </ul>
    </div>
    
  </div>
  );
};


//Config Driven UI

const config = [
  
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "449047",
        name: "Soul Rasa",
        uuid: "2826d5eb-bdae-4448-bcea-228b0999ff31",
        city: "1",
        area: "Banashankari",
        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "hfwvfneewb1e05ildjti",
        cuisines: [
          "Indian",
          "Healthy Food",
          "Home Food",
          "South Indian",
          "North Indian",
        ],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        slaString: "29 MINS",
        lastMileTravel: 2.200000047683716,
        slugs: {
          restaurant: "swa-dish-banashankari-banashankari",
          city: "bangalore",
        },
        cityState: "1",
        address:
          '1st floor,Site bearing No. 59 carved out of Sy. No. 17 of Kathriguppe Village, situated at the Bhavani Housing Co-op Society Ltd., Layout in Block No. "T" Banashankari 3rd Stage, Bangalore,560085',
        locality: "3rd Stage",
        parentId: 239281,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "Flat ₹125 off",
          shortDescriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249 | Use code FLAT125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "₹125 OFF",
          shortDescriptionList: [
            {
              meta: "Use FLAT125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249 | Use code FLAT125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        ribbon: [
          {
            type: "PROMOTED",
          },
        ],
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "cid=5782553~p=1~eid=00000186-01bc-fbdc-2581-c718001a013c",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "2.2 kms",
        hasSurge: false,
        sla: {
          restaurantId: "449047",
          deliveryTime: 29,
          minDeliveryTime: 29,
          maxDeliveryTime: 29,
          lastMileTravel: 2.200000047683716,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "4.3",
        totalRatings: 500,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "342547",
        name: "Meghana Foods",
        uuid: "82158e90-2497-4b2a-93fc-6ea86f859dcd",
        city: "1",
        area: "Rajarajeshwari Nagar",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "g0isknuhld1ltwxkjkcg",
        cuisines: ["Biryani", "Andhra", "South Indian"],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        slaString: "28 MINS",
        lastMileTravel: 4.199999809265137,
        slugs: {
          restaurant: "meghana-foods-rajarajeshwari-nagar-rajarajeshwari-nagar",
          city: "bangalore",
        },
        cityState: "1",
        address:
          "Sankranti Arcade No.285C, Phase I, 9Th Main Road, Ideal Home Rajarajeshwarinagar, Remco Bhel Layout, Ideal Homes Twp, RR Nagar, Bengaluru, Karnataka 560098",
        locality: "BHEL layout",
        parentId: 635,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "4.1 kms",
        hasSurge: false,
        sla: {
          restaurantId: "342547",
          deliveryTime: 28,
          minDeliveryTime: 28,
          maxDeliveryTime: 28,
          lastMileTravel: 4.199999809265137,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.3",
        totalRatings: 1000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "127096",
        name: "Shetty Lunch Home",
        uuid: "6896db84-fe70-43f2-8b07-8ce022350c17",
        city: "1",
        area: "Jayanagar",
        totalRatingsString: "100+ ratings",
        cloudinaryImageId: "ngh1zcdqrweektwz693f",
        cuisines: ["Mangalorean", "Coastal", "Seafood"],
        tags: [],
        costForTwo: 45000,
        costForTwoString: "₹450 FOR TWO",
        deliveryTime: 40,
        minDeliveryTime: 35,
        maxDeliveryTime: 45,
        slaString: "35-45 MINS",
        lastMileTravel: 6.099999904632568,
        slugs: {
          restaurant: "shetty-lunch-home-jayanagar",
          city: "bangalore",
        },
        cityState: "1",
        address:
          "310, 39th cross 9th main 5th block jayanagar bangalore, Jayanagar, BBMP South Karnataka 560041",
        locality: "5th Block",
        parentId: 12478,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        ribbon: [
          {
            type: "PROMOTED",
          },
        ],
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "cid=5799951~p=4~eid=00000186-01bc-fbdc-2581-c719001a040d",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "6 kms",
        hasSurge: false,
        sla: {
          restaurantId: "127096",
          deliveryTime: 40,
          minDeliveryTime: 35,
          maxDeliveryTime: 45,
          lastMileTravel: 6.099999904632568,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "4.4",
        totalRatings: 100,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "56428",
        name: "Puliyogare Point",
        uuid: "49970568-119d-436c-9dad-042d9c07c7ff",
        city: "1",
        area: "Basavanagudi",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "wet9zrjusmdtkk16jlrz",
        cuisines: ["South Indian"],
        tags: [],
        costForTwo: 15000,
        costForTwoString: "₹150 FOR TWO",
        deliveryTime: 25,
        minDeliveryTime: 20,
        maxDeliveryTime: 30,
        slaString: "20-30 MINS",
        lastMileTravel: 3.5,
        slugs: {
          restaurant: "puliyogare-point-basavanagudi-basavanagudi",
          city: "bangalore",
        },
        cityState: "1",
        address: "No 81, East Anjaneya Temple Street, N.R Colony, Basavanagudi",
        locality: "N.R Colony",
        parentId: 8409,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "3.5 kms",
        hasSurge: false,
        sla: {
          restaurantId: "56428",
          deliveryTime: 25,
          minDeliveryTime: 20,
          maxDeliveryTime: 30,
          lastMileTravel: 3.5,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.5",
        totalRatings: 1000,
        new: false,
      },
      subtype: "basic",
    }
  
  
  ]



const BiryaniCafe ={
  name : "Biryani cafe",
  image: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
  cuisines: ["andhra","madurai biryani"],
  rating: "4"
}

const RestroCard =() =>{
  return (
    <div className = "card">
      <img src ={BiryaniCafe.image}/>
       <h2>{BiryaniCafe.name}</h2>
      <h3>{BiryaniCafe.cuisines.join(",")}</h3>
      <h4>{BiryaniCafe.rating}stars</h4>
    </div>
  )
}

const Body =() => {
  return <div className = "rest">
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
  </div>
}

const Footer =() => {
  return(
    <h3>footer</h3>
  )
}

const AppLayout = () => {
  return(
    <React.Fragment>
    <Header/>
      <Body/>
      <Footer/>
      </React.Fragment>

  )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)

