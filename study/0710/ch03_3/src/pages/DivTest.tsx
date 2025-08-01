import { Title, Subtitle, Div, Icon } from "../components";

export default function DivTest() {
  return (
    <section className="mt-4">
      <Title>DivTest</Title>
      <Div className="text-center text-blue-100 bg-blue-600" height="6rem">
        <Icon name="home" className="texttext-3xl" />
        <Subtitle>Home</Subtitle>
      </Div>
    </section>
  );
}
// mt-4 는 margin top 4
