import { Button } from "../../theme/daisyui";

export default function Basic() {
  return (
    <section className="mt-4">
      <h2 className="text-3xl font-bold text-center">Basic</h2>
      <div className="flex mt-4 justify-evenly">
        <button className="btn btn-primary">DAISYUI BUTTON</button>
        <Button className="btn btn-primary">BUTTON</Button>
      </div>
    </section>
  );
}
// mt-4 는 margin top 4
