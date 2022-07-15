import React, {useState} from "react";
import Layout from "../../components/layout";
import Image, {StaticImageData} from "next/image";
import ImageViewer from "../../components/image_viewer";

import photo1 from "./../../public/photos/DJI_0065.jpg";
import photo2 from "./../../public/photos/DJI_0099-HDR.jpg";
import photo3 from "./../../public/photos/KBN00826.jpg";
import photo4 from "./../../public/photos/KBN02017.jpg";
import photo5 from "./../../public/photos/KBN02142.jpg";
import photo6 from "./../../public/photos/KBN02251.jpg";
import photo7 from "./../../public/photos/KBN02264.jpg";
import photo8 from "./../../public/photos/KBN03812.jpg";
import photo9 from "./../../public/photos/KBN04181.jpg";
import photo10 from "./../../public/photos/KBN04220.jpg";
import photo11 from "./../../public/photos/KBN01858.jpg";
import photo12 from "./../../public/photos/KBN04465.jpg";
import photo13 from "./../../public/photos/KBN04479.jpg";
import photo14 from "./../../public/photos/KBN04765.jpg";
import photo15 from "./../../public/photos/KBN04780.jpg";

const photos = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
    photo12,
    photo13,
    photo14,
    photo15,

]


export default function About() {
    const [viewerOpen, setViewerOpen] = useState(false);
    const [viewedImageIndex, setViewedImageIndex] = useState(0);

    function handleImageClick(index: number) {
        setViewedImageIndex(index);
        setViewerOpen(true);
    }

    return (
      <Layout>
          <>
              <div className="px-20 grid grid-cols-5 gap-5 w-full justify-self-center mx-5">
                  {photos.map((photo, index) => (
                      <div
                        key={"photo-" + index}
                        className={"col-span-1 flex relative"}
                        onClick={() => handleImageClick(index)}
                      >
                          <Image
                              src={photo}
                              alt={"Photo-" + index}
                              width={500}
                              height={500}
                              placeholder={"blur"}
                              objectFit={"cover"}
                              quality={100}
                              className={"rounded-sm"}
                          />
                      </div>
                  ))}
              </div>
              <ImageViewer indexSetter={setViewedImageIndex} images={photos} imageIndex={viewedImageIndex} open={viewerOpen} setOpen={setViewerOpen} title={"Hi there"} />
          </>
      </Layout>
    );
}
