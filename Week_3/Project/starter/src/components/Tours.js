import Tour from "./Tour";
import Title from "./Title";
import { tours } from "../data";

function Tours() {
  return (
    <div>
      <section class="section" id="tours">
        <Title title="featured" subTitle="tours" />

        <div class="section-center featured-center">
          {tours.map((tour) => (
            <Tour key={tour.id} {...tour} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Tours;
