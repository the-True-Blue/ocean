import { useState, useRef, useEffect } from "react";

const StarryNight = ({ onClose }) => {
  const [activeModal, setActiveModal] = useState(null);
  const [audioStarted, setAudioStarted] = useState(false);
  const audioRef = useRef(null);

  // Prevent body scroll when component mounts
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Auto-play audio on first click
  const handleFirstClick = () => {
    if (!audioStarted && audioRef.current) {
      audioRef.current.play().catch(console.error);
      setAudioStarted(true);
    }
  };

  const handleStarClick = (page) => {
    // Only allow pages 1-3 since those are the only HTML files that exist
    const availablePages = ['page1', 'page2', 'page3'];
    if (availablePages.includes(page)) {
      setActiveModal(page);
    }
  };

  const getPageContent = (page) => {
    const pageMap = {
      page1: "page1.html",
      page2: "page2.html", 
      page3: "page3.html"
    };
    return pageMap[page] || "page1.html";
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const handleRocketClick = () => {
    // Open external link like the original HTML
    window.open("https://tempest-digital.io", "_self");
  };

  const generateBackgroundStars = () => {
    const stars = [
      {
        left: 906,
        top: 327,
        animate: "animate2",
        opacity: "opacity3",
        scale: "scale3",
        delay: 0.1,
      },
      {
        left: 583,
        top: 4,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.1,
      },
      {
        left: 924,
        top: 610,
        animate: "animate4",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.4,
      },
      {
        left: 1043,
        top: 355,
        animate: "animate3",
        opacity: "opacity3",
        scale: "scale1",
        delay: 0.4,
      },
      {
        left: 492,
        top: 741,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.4,
      },
      {
        left: 1575,
        top: 47,
        animate: "animate4",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.5,
      },
      {
        left: 953,
        top: 304,
        animate: "animate3",
        opacity: "opacity3",
        scale: "scale2",
        delay: 0.2,
      },
      {
        left: 103,
        top: 787,
        animate: "animate1",
        opacity: "opacity2",
        scale: "scale3",
        delay: 0.1,
      },
      {
        left: 1234,
        top: 316,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.7,
      },
      {
        left: 120,
        top: 35,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.7,
      },
      {
        left: 1299,
        top: 397,
        animate: "animate1",
        opacity: "opacity3",
        scale: "scale3",
        delay: 0,
      },
      {
        left: 1538,
        top: 715,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.3,
      },
      {
        left: 1315,
        top: 617,
        animate: "animate3",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.5,
      },
      {
        left: 1137,
        top: 432,
        animate: "animate3",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.7,
      },
      {
        left: 735,
        top: 804,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.4,
      },
      {
        left: 339,
        top: 207,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.2,
      },
      {
        left: 808,
        top: 429,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.5,
      },
      {
        left: 46,
        top: 622,
        animate: "animate4",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.7,
      },
      {
        left: 1039,
        top: 194,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.7,
      },
      {
        left: 820,
        top: 70,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.2,
      },
      {
        left: 344,
        top: 306,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale3",
        delay: 0.4,
      },
      {
        left: 444,
        top: 659,
        animate: "animate1",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0,
      },
      {
        left: 217,
        top: 791,
        animate: "animate2",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.3,
      },
      {
        left: 702,
        top: 148,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.1,
      },
      {
        left: 588,
        top: 579,
        animate: "animate1",
        opacity: "opacity2",
        scale: "scale1",
        delay: 0.1,
      },
      {
        left: 959,
        top: 308,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.2,
      },
      {
        left: 1815,
        top: 296,
        animate: "animate3",
        opacity: "opacity3",
        scale: "scale1",
        delay: 0.6,
      },
      {
        left: 1655,
        top: 111,
        animate: "animate2",
        opacity: "opacity3",
        scale: "scale3",
        delay: 0.4,
      },
      {
        left: 1009,
        top: 570,
        animate: "animate1",
        opacity: "opacity2",
        scale: "scale3",
        delay: 0.6,
      },
      {
        left: 1361,
        top: 702,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.1,
      },
      {
        left: 718,
        top: 30,
        animate: "animate4",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.6,
      },
      {
        left: 252,
        top: 442,
        animate: "animate1",
        opacity: "opacity2",
        scale: "scale3",
        delay: 0.3,
      },
      {
        left: 1388,
        top: 699,
        animate: "animate2",
        opacity: "opacity3",
        scale: "scale1",
        delay: 0.4,
      },
      {
        left: 481,
        top: 86,
        animate: "animate1",
        opacity: "opacity3",
        scale: "scale1",
        delay: 0.3,
      },
      {
        left: 532,
        top: 482,
        animate: "animate4",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.4,
      },
      {
        left: 1601,
        top: 537,
        animate: "animate2",
        opacity: "opacity2",
        scale: "scale1",
        delay: 0.1,
      },
      {
        left: 607,
        top: 531,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.4,
      },
      {
        left: 491,
        top: 783,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.8,
      },
      {
        left: 1521,
        top: 452,
        animate: "animate1",
        opacity: "opacity3",
        scale: "scale1",
        delay: 0.7,
      },
      {
        left: 1154,
        top: 426,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.8,
      },
      {
        left: 743,
        top: 519,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale3",
        delay: 0.5,
      },
      {
        left: 177,
        top: 560,
        animate: "animate1",
        opacity: "opacity2",
        scale: "scale3",
        delay: 0.4,
      },
      {
        left: 76,
        top: 52,
        animate: "animate3",
        opacity: "opacity2",
        scale: "scale3",
        delay: 0.7,
      },
      {
        left: 869,
        top: 653,
        animate: "animate4",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0,
      },
      {
        left: 544,
        top: 329,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.5,
      },
      {
        left: 1139,
        top: 359,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale3",
        delay: 0.2,
      },
      {
        left: 1172,
        top: 115,
        animate: "animate1",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.4,
      },
      {
        left: 1653,
        top: 124,
        animate: "animate4",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.6,
      },
      {
        left: 127,
        top: 633,
        animate: "animate2",
        opacity: "opacity2",
        scale: "scale3",
        delay: 0.1,
      },
      {
        left: 1419,
        top: 601,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale1",
        delay: 0.1,
      },
      {
        left: 567,
        top: 654,
        animate: "animate4",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.7,
      },
      {
        left: 1735,
        top: 721,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0,
      },
      {
        left: 860,
        top: 754,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.6,
      },
      {
        left: 1816,
        top: 756,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.5,
      },
      {
        left: 1205,
        top: 649,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.6,
      },
      {
        left: 1390,
        top: 373,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.6,
      },
      {
        left: 546,
        top: 383,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0,
      },
      {
        left: 1682,
        top: 773,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.7,
      },
      {
        left: 1047,
        top: 750,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.8,
      },
      {
        left: 25,
        top: 468,
        animate: "animate1",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.8,
      },
      {
        left: 1349,
        top: 367,
        animate: "animate4",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.8,
      },
      {
        left: 105,
        top: 649,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.3,
      },
      {
        left: 272,
        top: 722,
        animate: "animate1",
        opacity: "opacity3",
        scale: "scale1",
        delay: 0,
      },
      {
        left: 955,
        top: 59,
        animate: "animate1",
        opacity: "opacity3",
        scale: "scale2",
        delay: 0.5,
      },
      {
        left: 1076,
        top: 789,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.8,
      },
      {
        left: 410,
        top: 742,
        animate: "animate2",
        opacity: "opacity2",
        scale: "scale3",
        delay: 0.6,
      },
      {
        left: 655,
        top: 760,
        animate: "animate3",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.3,
      },
      {
        left: 1113,
        top: 575,
        animate: "animate3",
        opacity: "opacity2",
        scale: "scale3",
        delay: 0,
      },
      {
        left: 1383,
        top: 147,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.2,
      },
      {
        left: 1042,
        top: 341,
        animate: "animate4",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.3,
      },
      {
        left: 970,
        top: 804,
        animate: "animate3",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.1,
      },
      {
        left: 548,
        top: 425,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.3,
      },
      {
        left: 1675,
        top: 171,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale3",
        delay: 0.6,
      },
      {
        left: 472,
        top: 163,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.8,
      },
      {
        left: 113,
        top: 86,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.5,
      },
      {
        left: 926,
        top: 75,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.2,
      },
      {
        left: 1646,
        top: 237,
        animate: "animate2",
        opacity: "opacity2",
        scale: "scale1",
        delay: 0.8,
      },
      {
        left: 1011,
        top: 563,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.1,
      },
      {
        left: 989,
        top: 250,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale3",
        delay: 0,
      },
      {
        left: 1216,
        top: 465,
        animate: "animate1",
        opacity: "opacity3",
        scale: "scale3",
        delay: 0.6,
      },
      {
        left: 143,
        top: 708,
        animate: "animate2",
        opacity: "opacity3",
        scale: "scale3",
        delay: 0.4,
      },
      {
        left: 1775,
        top: 94,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.1,
      },
      {
        left: 881,
        top: 183,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.3,
      },
      {
        left: 1307,
        top: 669,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.8,
      },
      {
        left: 745,
        top: 467,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.6,
      },
      {
        left: 995,
        top: 49,
        animate: "animate3",
        opacity: "opacity3",
        scale: "scale2",
        delay: 0.4,
      },
      {
        left: 283,
        top: 400,
        animate: "animate3",
        opacity: "opacity2",
        scale: "scale3",
        delay: 0.1,
      },
      {
        left: 738,
        top: 394,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.7,
      },
      {
        left: 1686,
        top: 305,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0,
      },
      {
        left: 908,
        top: 280,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.1,
      },
      {
        left: 1486,
        top: 135,
        animate: "animate2",
        opacity: "opacity2",
        scale: "scale1",
        delay: 0.6,
      },
      {
        left: 220,
        top: 161,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale3",
        delay: 0.8,
      },
      {
        left: 633,
        top: 210,
        animate: "animate3",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.7,
      },
      {
        left: 401,
        top: 170,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.3,
      },
      {
        left: 1025,
        top: 588,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale3",
        delay: 0.5,
      },
      {
        left: 1548,
        top: 331,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0,
      },
      {
        left: 345,
        top: 185,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.2,
      },
      {
        left: 894,
        top: 19,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.5,
      },
      {
        left: 906,
        top: 311,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.4,
      },
      {
        left: 1240,
        top: 764,
        animate: "animate3",
        opacity: "opacity3",
        scale: "scale1",
        delay: 0.1,
      },
      {
        left: 1181,
        top: 277,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.1,
      },
      {
        left: 1306,
        top: 605,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.4,
      },
      {
        left: 1558,
        top: 395,
        animate: "animate4",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.4,
      },
      {
        left: 1239,
        top: 679,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.6,
      },
      {
        left: 1778,
        top: 725,
        animate: "animate3",
        opacity: "opacity3",
        scale: "scale1",
        delay: 0.4,
      },
      {
        left: 1196,
        top: 465,
        animate: "animate4",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.7,
      },
      {
        left: 385,
        top: 205,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.0,
      },
      {
        left: 263,
        top: 190,
        animate: "animate2",
        opacity: "opacity3",
        scale: "scale2",
        delay: 0.0,
      },
      {
        left: 1450,
        top: 262,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.7,
      },
      {
        left: 1547,
        top: 485,
        animate: "animate1",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.5,
      },
      {
        left: 711,
        top: 267,
        animate: "animate4",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.2,
      },
      {
        left: 1339,
        top: 93,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.1,
      },
      {
        left: 1304,
        top: 721,
        animate: "animate1",
        opacity: "opacity2",
        scale: "scale1",
        delay: 0.1,
      },
      {
        left: 1021,
        top: 557,
        animate: "animate4",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.3,
      },
      {
        left: 573,
        top: 692,
        animate: "animate4",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.6,
      },
      {
        left: 1006,
        top: 460,
        animate: "animate3",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.4,
      },
      {
        left: 1594,
        top: 631,
        animate: "animate3",
        opacity: "opacity2",
        scale: "scale1",
        delay: 0.7,
      },
      {
        left: 111,
        top: 411,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.2,
      },
      {
        left: 583,
        top: 273,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.8,
      },
      {
        left: 1062,
        top: 181,
        animate: "animate3",
        opacity: "opacity2",
        scale: "scale1",
        delay: 0.5,
      },
      {
        left: 523,
        top: 673,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.7,
      },
      {
        left: 1808,
        top: 262,
        animate: "animate1",
        opacity: "opacity3",
        scale: "scale3",
        delay: 0.8,
      },
      {
        left: 296,
        top: 536,
        animate: "animate2",
        opacity: "opacity2",
        scale: "scale3",
        delay: 0.8,
      },
      {
        left: 1607,
        top: 271,
        animate: "animate3",
        opacity: "opacity2",
        scale: "scale1",
        delay: 0.2,
      },
      {
        left: 244,
        top: 698,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.0,
      },
      {
        left: 453,
        top: 329,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale1",
        delay: 0.6,
      },
      {
        left: 586,
        top: 1,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.6,
      },
      {
        left: 393,
        top: 375,
        animate: "animate2",
        opacity: "opacity3",
        scale: "scale2",
        delay: 0.5,
      },
      {
        left: 1280,
        top: 211,
        animate: "animate3",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.7,
      },
      {
        left: 1210,
        top: 673,
        animate: "animate1",
        opacity: "opacity3",
        scale: "scale1",
        delay: 0.5,
      },
      {
        left: 365,
        top: 429,
        animate: "animate2",
        opacity: "opacity3",
        scale: "scale1",
        delay: 0.0,
      },
      {
        left: 380,
        top: 153,
        animate: "animate1",
        opacity: "opacity2",
        scale: "scale1",
        delay: 0.6,
      },
      {
        left: 1169,
        top: 391,
        animate: "animate2",
        opacity: "opacity3",
        scale: "scale1",
        delay: 0.5,
      },
      {
        left: 1758,
        top: 47,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.0,
      },
      {
        left: 649,
        top: 195,
        animate: "animate2",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.2,
      },
      {
        left: 1426,
        top: 536,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.1,
      },
      {
        left: 722,
        top: 739,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.2,
      },
      {
        left: 106,
        top: 337,
        animate: "animate3",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.8,
      },
      {
        left: 1615,
        top: 295,
        animate: "animate4",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.2,
      },
      {
        left: 1312,
        top: 213,
        animate: "animate1",
        opacity: "opacity2",
        scale: "scale1",
        delay: 0.6,
      },
      {
        left: 1344,
        top: 226,
        animate: "animate1",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.7,
      },
      {
        left: 507,
        top: 764,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale3",
        delay: 0.2,
      },
      {
        left: 984,
        top: 546,
        animate: "animate4",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.6,
      },
      {
        left: 920,
        top: 217,
        animate: "animate1",
        opacity: "opacity2",
        scale: "scale3",
        delay: 0.0,
      },
      {
        left: 1118,
        top: 9,
        animate: "animate4",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.8,
      },
      {
        left: 1404,
        top: 476,
        animate: "animate4",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.5,
      },
      {
        left: 1364,
        top: 128,
        animate: "animate2",
        opacity: "opacity2",
        scale: "scale1",
        delay: 0.5,
      },
      {
        left: 528,
        top: 701,
        animate: "animate2",
        opacity: "opacity2",
        scale: "scale1",
        delay: 0.6,
      },
      {
        left: 436,
        top: 509,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.2,
      },
      {
        left: 805,
        top: 640,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale3",
        delay: 0.5,
      },
      {
        left: 604,
        top: 783,
        animate: "animate3",
        opacity: "opacity3",
        scale: "scale2",
        delay: 0.1,
      },
      {
        left: 1436,
        top: 131,
        animate: "animate3",
        opacity: "opacity3",
        scale: "scale2",
        delay: 0.4,
      },
      {
        left: 632,
        top: 668,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.5,
      },
      {
        left: 755,
        top: 564,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale3",
        delay: 0.7,
      },
      {
        left: 1201,
        top: 726,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.4,
      },
      {
        left: 768,
        top: 353,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.3,
      },
      {
        left: 1359,
        top: 194,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.5,
      },
      {
        left: 106,
        top: 701,
        animate: "animate2",
        opacity: "opacity2",
        scale: "scale3",
        delay: 0.4,
      },
      {
        left: 586,
        top: 397,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.2,
      },
      {
        left: 304,
        top: 551,
        animate: "animate1",
        opacity: "opacity2",
        scale: "scale1",
        delay: 0.3,
      },
      {
        left: 1302,
        top: 62,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.1,
      },
      {
        left: 1734,
        top: 474,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.8,
      },
      {
        left: 276,
        top: 222,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale1",
        delay: 0.8,
      },
      {
        left: 1810,
        top: 269,
        animate: "animate4",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.3,
      },
      {
        left: 752,
        top: 185,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.7,
      },
      {
        left: 75,
        top: 556,
        animate: "animate1",
        opacity: "opacity3",
        scale: "scale3",
        delay: 0.8,
      },
      {
        left: 192,
        top: 369,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.8,
      },
      {
        left: 197,
        top: 741,
        animate: "animate4",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.1,
      },
      {
        left: 1647,
        top: 192,
        animate: "animate4",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.7,
      },
      {
        left: 1359,
        top: 187,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.6,
      },
      {
        left: 363,
        top: 24,
        animate: "animate2",
        opacity: "opacity3",
        scale: "scale1",
        delay: 0.0,
      },
      {
        left: 1481,
        top: 396,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.6,
      },
      {
        left: 1456,
        top: 12,
        animate: "animate1",
        opacity: "opacity2",
        scale: "scale1",
        delay: 0.6,
      },
      {
        left: 1535,
        top: 367,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.3,
      },
      {
        left: 1767,
        top: 237,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.5,
      },
      {
        left: 105,
        top: 524,
        animate: "animate3",
        opacity: "opacity2",
        scale: "scale1",
        delay: 0.3,
      },
      {
        left: 134,
        top: 155,
        animate: "animate3",
        opacity: "opacity3",
        scale: "scale2",
        delay: 0.4,
      },
      {
        left: 1426,
        top: 352,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.5,
      },
      {
        left: 683,
        top: 176,
        animate: "animate4",
        opacity: "opacity3",
        scale: "scale2",
        delay: 0.1,
      },
      {
        left: 1263,
        top: 366,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.1,
      },
      {
        left: 437,
        top: 343,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.1,
      },
      {
        left: 1458,
        top: 644,
        animate: "animate3",
        opacity: "opacity2",
        scale: "scale3",
        delay: 0.0,
      },
      {
        left: 642,
        top: 590,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.3,
      },
      {
        left: 474,
        top: 254,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale1",
        delay: 0.0,
      },
      {
        left: 773,
        top: 156,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale3",
        delay: 0.1,
      },
      {
        left: 181,
        top: 773,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.0,
      },
      {
        left: 1259,
        top: 132,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.3,
      },
      {
        left: 777,
        top: 272,
        animate: "animate1",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.6,
      },
      {
        left: 572,
        top: 668,
        animate: "animate1",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.4,
      },
      {
        left: 1402,
        top: 777,
        animate: "animate1",
        opacity: "opacity2",
        scale: "scale1",
        delay: 0.3,
      },
      {
        left: 1241,
        top: 768,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.8,
      },
      {
        left: 1795,
        top: 38,
        animate: "animate4",
        opacity: "opacity3",
        scale: "scale2",
        delay: 0.5,
      },
      {
        left: 1546,
        top: 645,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.6,
      },
      {
        left: 1307,
        top: 35,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.5,
      },
      {
        left: 466,
        top: 496,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.3,
      },
      {
        left: 50,
        top: 255,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.1,
      },
      {
        left: 293,
        top: 440,
        animate: "animate4",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.4,
      },
      {
        left: 713,
        top: 683,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.8,
      },
      {
        left: 1438,
        top: 0,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.7,
      },
      {
        left: 387,
        top: 329,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.4,
      },
      {
        left: 32,
        top: 330,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.5,
      },
      {
        left: 164,
        top: 457,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.7,
      },
      {
        left: 1086,
        top: 797,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale1",
        delay: 0.6,
      },
      {
        left: 679,
        top: 390,
        animate: "animate4",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.0,
      },
      {
        left: 1568,
        top: 168,
        animate: "animate4",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.8,
      },
      {
        left: 797,
        top: 185,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.7,
      },
      {
        left: 1660,
        top: 285,
        animate: "animate1",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.3,
      },
      {
        left: 436,
        top: 71,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale3",
        delay: 0.4,
      },
      {
        left: 998,
        top: 551,
        animate: "animate2",
        opacity: "opacity2",
        scale: "scale1",
        delay: 0.3,
      },
      {
        left: 329,
        top: 462,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.0,
      },
      {
        left: 1056,
        top: 335,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale1",
        delay: 0.6,
      },
      {
        left: 779,
        top: 515,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.1,
      },
      {
        left: 695,
        top: 594,
        animate: "animate4",
        opacity: "opacity3",
        scale: "scale2",
        delay: 0.8,
      },
      {
        left: 1157,
        top: 205,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.0,
      },
      {
        left: 175,
        top: 434,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.3,
      },
      {
        left: 20,
        top: 691,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.7,
      },
      {
        left: 390,
        top: 90,
        animate: "animate3",
        opacity: "opacity2",
        scale: "scale1",
        delay: 0.1,
      },
      {
        left: 117,
        top: 713,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.6,
      },
      {
        left: 483,
        top: 475,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.6,
      },
      {
        left: 1580,
        top: 1,
        animate: "animate2",
        opacity: "opacity2",
        scale: "scale1",
        delay: 0.1,
      },
      {
        left: 767,
        top: 670,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.7,
      },
      {
        left: 992,
        top: 462,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale3",
        delay: 0.5,
      },
      {
        left: 47,
        top: 791,
        animate: "animate1",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.2,
      },
      {
        left: 99,
        top: 767,
        animate: "animate3",
        opacity: "opacity3",
        scale: "scale1",
        delay: 0.1,
      },
      {
        left: 376,
        top: 433,
        animate: "animate2",
        opacity: "opacity3",
        scale: "scale3",
        delay: 0.5,
      },
      {
        left: 1603,
        top: 371,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.8,
      },
      {
        left: 814,
        top: 732,
        animate: "animate2",
        opacity: "opacity2",
        scale: "scale1",
        delay: 0.8,
      },
      {
        left: 28,
        top: 225,
        animate: "animate1",
        opacity: "opacity2",
        scale: "scale1",
        delay: 0.0,
      },
      {
        left: 1306,
        top: 808,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.2,
      },
      {
        left: 533,
        top: 688,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.0,
      },
      {
        left: 661,
        top: 37,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.6,
      },
      {
        left: 567,
        top: 275,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.0,
      },
      {
        left: 829,
        top: 763,
        animate: "animate2",
        opacity: "opacity3",
        scale: "scale2",
        delay: 0.0,
      },
      {
        left: 1336,
        top: 47,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.2,
      },
      {
        left: 1531,
        top: 102,
        animate: "animate3",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.8,
      },
      {
        left: 508,
        top: 344,
        animate: "animate1",
        opacity: "opacity2",
        scale: "scale3",
        delay: 0.1,
      },
      {
        left: 973,
        top: 682,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.8,
      },
      {
        left: 801,
        top: 628,
        animate: "animate4",
        opacity: "opacity3",
        scale: "scale1",
        delay: 0.5,
      },
      {
        left: 824,
        top: 430,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.3,
      },
      {
        left: 749,
        top: 636,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.5,
      },
      {
        left: 510,
        top: 378,
        animate: "animate3",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.3,
      },
      {
        left: 971,
        top: 291,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.5,
      },
      {
        left: 127,
        top: 579,
        animate: "animate4",
        opacity: "opacity3",
        scale: "scale2",
        delay: 0.0,
      },
      {
        left: 561,
        top: 79,
        animate: "animate3",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.5,
      },
      {
        left: 360,
        top: 530,
        animate: "animate1",
        opacity: "opacity2",
        scale: "scale1",
        delay: 0.0,
      },
      {
        left: 1678,
        top: 411,
        animate: "animate4",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.5,
      },
      {
        left: 939,
        top: 142,
        animate: "animate1",
        opacity: "opacity3",
        scale: "scale3",
        delay: 0.5,
      },
      {
        left: 1039,
        top: 121,
        animate: "animate1",
        opacity: "opacity3",
        scale: "scale3",
        delay: 0.2,
      },
      {
        left: 344,
        top: 6,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.2,
      },
      {
        left: 584,
        top: 603,
        animate: "animate2",
        opacity: "opacity2",
        scale: "scale1",
        delay: 0.1,
      },
      {
        left: 1584,
        top: 687,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.2,
      },
      {
        left: 72,
        top: 603,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.3,
      },
      {
        left: 996,
        top: 542,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.4,
      },
      {
        left: 1556,
        top: 693,
        animate: "animate1",
        opacity: "opacity2",
        scale: "scale3",
        delay: 0.6,
      },
      {
        left: 979,
        top: 506,
        animate: "animate4",
        opacity: "opacity3",
        scale: "scale3",
        delay: 0.5,
      },
      {
        left: 18,
        top: 779,
        animate: "animate1",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.8,
      },
      {
        left: 52,
        top: 570,
        animate: "animate3",
        opacity: "opacity3",
        scale: "scale3",
        delay: 0.2,
      },
      {
        left: 1336,
        top: 15,
        animate: "animate4",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.6,
      },
      {
        left: 661,
        top: 23,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.1,
      },
      {
        left: 797,
        top: 209,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.3,
      },
      {
        left: 660,
        top: 466,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.6,
      },
      {
        left: 673,
        top: 80,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.6,
      },
      {
        left: 144,
        top: 139,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale3",
        delay: 0.5,
      },
      {
        left: 1722,
        top: 465,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.6,
      },
      {
        left: 992,
        top: 533,
        animate: "animate3",
        opacity: "opacity2",
        scale: "scale1",
        delay: 0.2,
      },
      {
        left: 637,
        top: 585,
        animate: "animate3",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.0,
      },
      {
        left: 792,
        top: 54,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.1,
      },
      {
        left: 1797,
        top: 234,
        animate: "animate1",
        opacity: "opacity2",
        scale: "scale3",
        delay: 0.1,
      },
      {
        left: 1613,
        top: 332,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.7,
      },
      {
        left: 1402,
        top: 112,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.1,
      },
      {
        left: 633,
        top: 297,
        animate: "animate4",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.0,
      },
      {
        left: 1253,
        top: 382,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.2,
      },
      {
        left: 851,
        top: 457,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.8,
      },
      {
        left: 1792,
        top: 259,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.2,
      },
      {
        left: 567,
        top: 99,
        animate: "animate3",
        opacity: "opacity3",
        scale: "scale3",
        delay: 0.7,
      },
      {
        left: 1385,
        top: 616,
        animate: "animate4",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.6,
      },
      {
        left: 1447,
        top: 683,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.8,
      },
      {
        left: 1171,
        top: 385,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.2,
      },
      {
        left: 1731,
        top: 237,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.1,
      },
      {
        left: 1129,
        top: 422,
        animate: "animate1",
        opacity: "opacity3",
        scale: "scale3",
        delay: 0.7,
      },
      {
        left: 352,
        top: 110,
        animate: "animate4",
        opacity: "opacity3",
        scale: "scale1",
        delay: 0.8,
      },
      {
        left: 724,
        top: 655,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.0,
      },
      {
        left: 1053,
        top: 706,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.0,
      },
      {
        left: 1566,
        top: 789,
        animate: "animate4",
        opacity: "opacity3",
        scale: "scale2",
        delay: 0.5,
      },
      {
        left: 1197,
        top: 129,
        animate: "animate1",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.8,
      },
      {
        left: 195,
        top: 532,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale1",
        delay: 0.4,
      },
      {
        left: 462,
        top: 604,
        animate: "animate4",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.7,
      },
      {
        left: 1575,
        top: 529,
        animate: "animate2",
        opacity: "opacity2",
        scale: "scale3",
        delay: 0.2,
      },
      {
        left: 638,
        top: 708,
        animate: "animate1",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.2,
      },
      {
        left: 46,
        top: 714,
        animate: "animate2",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.3,
      },
      {
        left: 1603,
        top: 449,
        animate: "animate1",
        opacity: "opacity3",
        scale: "scale1",
        delay: 0.7,
      },
      {
        left: 1424,
        top: 139,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale2",
        delay: 0.4,
      },
      {
        left: 57,
        top: 306,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.3,
      },
      {
        left: 392,
        top: 446,
        animate: "animate4",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.0,
      },
      {
        left: 1251,
        top: 223,
        animate: "animate4",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.6,
      },
      {
        left: 59,
        top: 690,
        animate: "animate1",
        opacity: "opacity3",
        scale: "scale3",
        delay: 0.7,
      },
      {
        left: 554,
        top: 352,
        animate: "animate3",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.0,
      },
      {
        left: 1243,
        top: 527,
        animate: "animate2",
        opacity: "opacity1",
        scale: "scale3",
        delay: 0.2,
      },
      {
        left: 805,
        top: 186,
        animate: "animate3",
        opacity: "opacity2",
        scale: "scale2",
        delay: 0.3,
      },
      {
        left: 1370,
        top: 372,
        animate: "animate3",
        opacity: "opacity1",
        scale: "scale1",
        delay: 0.2,
      },
    ];

    return stars.map((star, i) => (
      <span
        key={i}
        className={`star ${star.animate} ${star.opacity} ${star.scale}`}
        style={{
          left: `${star.left}px`,
          top: `${star.top}px`,
          animationDelay: `${star.delay}s`,
          position: "absolute",
          width: "3px",
          height: "3px",
          backgroundColor: "white",
          borderRadius: "50%",
        }}
      />
    ));
  };

  return (
    <div className="starry-night-container" onClick={handleFirstClick}>
      {/* Hidden audio element */}
      <audio ref={audioRef} loop style={{ display: "none" }}>
        <source
          src="/Project presentation/Dearly Beloved.ogg"
          type="audio/ogg"
        />
        <source
          src="/Project presentation/Dearly Beloved.mp3"
          type="audio/mpeg"
        />
      </audio>

      {/* Close button */}
      <button onClick={onClose} className="close-button">
        ×
      </button>

      {/* Navigation rocket */}
      <img
        src="/Project presentation/razzo.gif"
        alt="razzo"
        id="razzo"
        onClick={handleRocketClick}
      />

      {/* Title */}
      <div className="title">
        <img
          src="/Project presentation/title.png"
          alt="Title"
          style={{ width: "350px" }}
        />
      </div>

      {/* Interactive navigation stars - exact positions from original */}
      <div>
        <a
          href="page1.html"
          className="star glow star1"
          onClick={(e) => {
            e.preventDefault();
            handleStarClick("page1");
          }}
        >
          <img
            src="/Project presentation/star1.png"
            alt="HTML tutorial"
            style={{ width: "70px", height: "70px" }}
          />
        </a>
      </div>

      <div>
        <a
          href="page2.html"
          className="star glow star2"
          onClick={(e) => {
            e.preventDefault();
            handleStarClick("page2");
          }}
        >
          <img
            src="/Project presentation/star1.png"
            alt="HTML tutorial"
            style={{ width: "70px", height: "70px" }}
          />
        </a>
      </div>

      <div>
        <a
          href="page3.html"
          className="star glow star3"
          onClick={(e) => {
            e.preventDefault();
            handleStarClick("page3");
          }}
        >
          <img
            src="/Project presentation/star1.png"
            alt="HTML tutorial"
            style={{ width: "70px", height: "70px" }}
          />
        </a>
      </div>


      {/* Sky wrapper with animated background - exact recreation */}
      <div className="sky-wrapper">
        <div className="sky">{generateBackgroundStars()}</div>
        <div className="moon"></div>
        <div className="asteroid"></div>
      </div>

      {/* Modal iframe recreation */}
      {activeModal && (
        <div className="modal active" id="modal1">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <iframe
              src={`/Project presentation/${getPageContent(activeModal)}`}
              id="modal-iframe"
              style={{ border: "none" }}
              width="100%"
              height="100%"
            />
          </div>
        </div>
      )}

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .starry-night-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: url("https://64.media.tumblr.com/6fa9ad9f859cf058bfe19a2536b0aa11/tumblr_pkv647vWBM1xp1j77o1_540.gifv");
          background-size: cover;
          color: white;
          display: inline-block;
          z-index: 1000;
          overflow: hidden;
          margin: 0;
          padding: 0;
        }

        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          z-index: 50;
          color: white;
          font-size: 24px;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .close-button:hover {
          background: rgba(0, 0, 0, 0.7);
        }

        .title {
          position: absolute;
          top: 30px;
          left: 75%;
          opacity: 80%;
        }

        #razzo {
          cursor: pointer;
          margin-left: 10px;
          margin-top: 10px;
          position: absolute;
        }

        .star {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          position: absolute;
        }

        .glow {
          animation: glitter 10s infinite;
        }

        .star1 {
          position: absolute;
          top: 80px;
          left: 460px;
          animation-delay: -2s;
        }

        .star2 {
          position: absolute;
          top: 180px;
          left: 550px;
          animation-delay: -1.7s;
        }

        .star3 {
          position: absolute;
          top: 300px;
          left: 565px;
          animation-delay: -1.4s;
        }


        a.star img {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        a.star.glow {
          background: rgba(255, 255, 255, 0.48);
        }


        @keyframes glitter {
          0% {
            transform: scale(1);
            opacity: 1;
            box-shadow: 0px 0px 10px 5px #535fed;
          }
          25% {
            transform: scale(0.5);
            opacity: 0;
          }
          50% {
            transform: scale(1);
            opacity: 1;
            box-shadow: 0px 0px 10px 5px #535fed;
          }
          75% {
            transform: scale(0.5);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
            box-shadow: 0px 0px 10px 5px #535fed;
          }
        }

        .sky-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          background: -webkit-radial-gradient(center, #000046 0%, #000 60%);
        }

        .starry-night-container *:not(.sky-wrapper) {
          z-index: 1;
        }

        .sky-wrapper::after,
        .sky-wrapper::before {
          content: " ";
          display: block;
        }

        .sky-wrapper::after,
        .sky-wrapper::before,
        .sky-wrapper .moon,
        .sky-wrapper .sky,
        .sky-wrapper .star,
        .sky-wrapper .asteroid {
          position: absolute;
        }

        .sky-wrapper .moon {
          color: #ffd;
          background: radial-gradient(
            circle at -30% 50%,
            rgba(0, 0, 0, 0) 175px,
            currentColor 100%
          );
          z-index: 999;
          border-radius: 50%;
          height: 200px;
          width: 200px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          filter: drop-shadow(0 0 20px currentColor);
        }

        .sky-wrapper .sky {
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          animation: rotate 400s infinite linear;
        }

        .sky-wrapper .star {
          width: 3px;
          height: 3px;
          background-color: white;
          border-radius: 50%;
          animation: shine 800s infinite linear;
        }

        .sky-wrapper .star.scale1 {
          transform: scale(1);
        }

        .sky-wrapper .star.scale2 {
          transform: scale(0.5);
        }

        .sky-wrapper .star.scale3 {
          transform: scale(1.3);
        }

        .sky-wrapper .star.animate1 {
          animation-duration: 0.5s;
        }

        .sky-wrapper .star.animate2 {
          animation-duration: 1s;
        }

        .sky-wrapper .star.animate3 {
          animation-duration: 1.5s;
        }

        .sky-wrapper .star.animate4 {
          animation-duration: 2s;
        }

        .sky-wrapper .star.opacity1 {
          opacity: 1;
        }

        .sky-wrapper .star.opacity2 {
          opacity: 0.5;
        }

        .sky-wrapper .star.opacity3 {
          opacity: 0.2;
        }

        .sky-wrapper .asteroid {
          top: -200px;
          left: -200px;
          width: 200px;
          height: 200px;
          opacity: 0.8;
          animation-name: assteroid;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-duration: 7s;
          animation-delay: 2s;
        }

        .sky-wrapper .asteroid:before {
          content: "";
          position: absolute;
          width: 10px;
          height: 10px;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0px 0px 7px 2px #fff;
          bottom: 0;
          right: 0;
        }

        .sky-wrapper .asteroid:after {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          border-left: 3px solid transparent;
          border-bottom: 200px solid #fff;
          border-right: 3px solid transparent;
          bottom: -22px;
          right: 75px;
          transform: rotate(-45deg);
        }

        @keyframes shine {
          0% {
            box-shadow: 0 0 15px 0px rgba(255, 255, 255, 0.05);
          }
          50% {
            box-shadow: 0 0 15px 4px rgba(255, 255, 255, 0.4);
          }
          100% {
            box-shadow: 0 0 15px 0px rgba(255, 255, 255, 0.05);
          }
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes assteroid {
          0% {
            top: -200px;
            left: -200px;
            opacity: 0.8;
          }
          10% {
            top: 200px;
            left: 200px;
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: none;
        }

        .modal.active {
          display: block;
        }

        .modal-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #000;
        }

        .modal iframe {
          border: none;
        }

        .modal .modal-close {
          position: absolute;
          right: 30px;
          top: 9px;
          font-size: 59px;
          line-height: 42px;
          background: #fff;
          border: 1px solid #000;
          border-radius: 4px;
          color: #000;
          cursor: pointer;
          z-index: 10001;
        }

        .modal .modal-close:hover {
          background: #f0f0f0;
        }

        @media (max-width: 1250px) {
          .title {
            left: 50%;
          }

          .title img {
            width: 250px !important;
          }

          .sky-wrapper .moon {
            left: 40%;
            top: 65%;
          }

          .star1 {
            left: 20%;
          }

          .star2 {
            left: 35%;
          }

          .star3 {
            left: 36%;
            top: 42%;
          }

        }

        @media (max-width: 450px) {
          .title {
            left: 40%;
          }
        }
      `}</style>
    </div>
  );
};

export default StarryNight;
