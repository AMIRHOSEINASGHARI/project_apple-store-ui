import SpecialOfferSliders from "./SpecialOfferSliders";
import SpecialOfferTimers from "./SpecialOfferTimers";

const SpecialOffer = () => {
  return (
    <section className="container mx-auto max-2xl:px-6 space-y-5">
      <SpecialOfferTimers />
      <SpecialOfferSliders />
    </section>
  );
};

export default SpecialOffer;
