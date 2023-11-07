import { getImageUrl } from "./utils.js";
import "./styles.css";
import Profile from "./profile.js";

export default function App() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        imageUrl={getImageUrl("szV5sdG")}
        profession="physicist and chemist"
        awardsCount="4"
        awards="(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal,
        Matteucci Medal)"
        discoveries={["polonium (chemical element)"]}
      />

      <Profile
        name="Katsuko Saruhashi"
        imageUrl={getImageUrl("YfeOqp2")}
        profession="geochemist"
        awardsCount="2"
        awards="(Miyake Prize for geochemistry, Tanaka Prize)"
        discoveries={["a method for measuring carbon dioxide in seawater"]}
      />
    </div>
  );
}
