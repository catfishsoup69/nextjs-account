import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Without sidebar',
};

export default function Page() {
  return <p>Я просто страница, на которой ничего нет, кроме другого layout</p>;
}
