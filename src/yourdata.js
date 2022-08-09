// favicon
import favIcon from "./images/favicon.png"
import pic from "./images/favicon.png"
// images
import mitImg from "./images/MIT_RAM.jpg"

// Skills Icons
import rhinoIcon from "./images/rhino3D.png"

// Social Icon
import instagramIcon from "./images/instagram.svg"
import facebookIcon from "./images/facebook.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Babes Helpin' Babes",
  icon: favIcon,
  titlename: "The power is in our hands. Voting is our duty, our right, and our most powerful tool – we’re here to make democratic participation more accessible and successful than ever before.",
  headername: "Choose your state below and create your voting plan checklist. ",
  headerTagline: [
    //Line 1 For Header
    "foundry man,",
    //Line 2 For Header
    "parametric modeler,",
    //Line 3 For Header
    "art facilitator",
  ],
  headerParagraph:
    "SELECT YOUR STATE",
  // End Header Details -----------------------

  //   Countdown Section --------------------------
  countdownHeading: "Off To The Polls",
  countdownPara:
    "Election day is coming up quick, but there's time to register. Be prepared to cast your vote and mark your calendars for Nov. 8th!",
  // End Promotion Section -----------------

  // Work Section ------------------------
  projects: [
    {
      title: "Lorem ipsum",
      para:
        "Lorem ipsum",
      imageSrc: mitImg,
      url: "https://devpost.com/software/ram-randomly-accessed-memories",
    }
    /*
    If You Want To Add More Project just Copy and Paste This At The End
    {
      title: "Fansgrasshopper, 400+ page computational design publication, full stack development",
      para: ""
      imageSrc:,
      url: "",
    },
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Lorem ipsum",
  aboutParaTwo:
    "Lorem ipsum Lorem ipsum",
  aboutParaThree:
    "Lorem ipsum Lorem ipsum Lorem ipsum",
  aboutImage: pic,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: rhinoIcon,
      title: "Lorem ipsum",
      para:
        "Lorem ipsum Lorem ipsum",
      url: "https://www.linkedin.com/company/robert-mcneel-and-associates/"
    }
    // {
    //   img: Icon,
    //   title: "",
    //   para:
    //     "",
    //   url: ""
    // },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Lorem",
  social: [
    // Add Or Remove The Link Accordingly
    {
      img: instagramIcon,
      title: "Instagram",
      url: "https://www.instagram.com/bhb",
    },
    {
      img: facebookIcon,
      title: "Facebook",
      url: "https://www.facebook.com/bhb",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
