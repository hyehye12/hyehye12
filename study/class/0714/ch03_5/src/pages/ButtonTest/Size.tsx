import { Button } from "../../theme/daisyui";

export default function Basic() {
  return (
    <section className="mt-4">
      <h2 className="text-3xl font-bold text-center">Basic</h2>
      <div className="flex mt-4 justify-evenly">
        <Button className="btn-lg btn-primary">BTN-LG</Button>
        <Button className="btn-md btn-secondary">BTN-MD</Button>
        <Button className="btn-sm btn-accent">BTN-SM</Button>
        <Button className="btn-xs btn-info">BTN-XS</Button>
      </div>
    </section>
  );
}
// mt-4 는 margin top 4
