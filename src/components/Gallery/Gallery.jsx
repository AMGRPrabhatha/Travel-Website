import React from 'react'
import Lightroom from 'react-lightbox-gallery'
import GalleryImg1 from "../../assets/images/gallery/g11.jpeg"
import GalleryImg3 from "../../assets/images/gallery/g13.jpeg"
import GalleryImg4 from "../../assets/images/gallery/g14.jpeg"
import GalleryImg6 from "../../assets/images/gallery/g16.jpeg"
import GalleryImg7 from "../../assets/images/gallery/g15.jpeg"


const Gallery = () => {

    var images = [
        {
            src: GalleryImg1,
            desc: "Person wearing shoes",
            sub: "Gift Habeshaw"
        },
        {
            src: GalleryImg3,
            desc: "Blonde woman wearing sunglasses smiling at the camera ",
            sub: "Dmitriy Frantsev"
        },
        {
            src: GalleryImg6,
            sub: "Harry Cunningham"
        },
        {
            src: GalleryImg4,
            desc: "Jaipur , Rajasthan India",
            sub: "Liam Baldock"
        },
        {
            src: GalleryImg7,
            sub: "Verne Ho"
        },
        {
            src: GalleryImg6,
            desc: "Rann of kutch , India",
            sub: "Hari Nandakumar"
        },
    ];

    var settings = {
        columnCount: {
            default: 3,
            mobile: 2,
            tab: 3
        },
        mode: "dark",
        enableZoom:false,
    };
    return (
        <Lightroom images={images} settings={settings} />
   );
}

export default Gallery