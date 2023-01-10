import React, { forwardRef, lazy, Suspense } from "react";
import Loader from "./Loader";

const ImageList = forwardRef(({ images }, ref) => {
  const Img = lazy(() => import("./ImageShow"));

  const renderedList = images.map((image) => (
    <React.Fragment key={image.id}>
      <Suspense fallback={<Loader />}>
        <Img image={image} />
      </Suspense>
    </React.Fragment>
  ));

  //   function handleObserver(entities, observer) {
  //     console.log(entities);
  // const y = entities[0].boundingClientRect.y;
  // if (this.state.prevY > y) {
  //   const lastPhoto = this.state.photos[this.state.photos.length - 1];
  //   const curPage = lastPhoto.albumId;
  //   this.getPhotos(curPage);
  //   this.setState({ page: curPage });
  // }
  // this.setState({ prevY: y });
  //   }

  //   useEffect(() => {
  //     const options = {
  //       root: null,
  //       rootMargin: "0px",
  //       threshold: 1.0,
  //     };

  //     const observer = new IntersectionObserver(handleObserver, options);

  //     document.addEventListener("onScroll", () => observer.observe(triggerRef));

  //     return () => {
  //         document.removeEventListener("onScroll", observer.observe(triggerRef));
  //     }
  //   }, []);

  return (
    <>
      <div className="columns-xs w-full px-10">{renderedList}</div>
      <div ref={ref}></div>
    </>
  );
});

export default ImageList;
