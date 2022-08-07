import { describe, expect, it } from "vitest"
import { render } from "../test-utils";
import { MemoryRouter } from 'react-router-dom';
import CardNew from "../components/CardNew";

describe("Card New", () => {

  it("renderize correctly the card information", () => {
    const props = {
        noticia:  {
            body: "Corrupti ut ipsa. Aut minus reprehenderit impedit a a. Atque tempore accusantium magni iusto aut impedit.\n \rHic fugiat velit id molestias omnis consequatur nihil maiores. Illum et illo non et autem iste. Magnam molestiae perferendis esse qui. Voluptatum perferendis modi. Eveniet suscipit recusandae molestiae recusandae itaque earum consequatur sed. Et quis deleniti nesciunt magnam assumenda et pariatur.\n \rPossimus dolor eaque. Iusto voluptatem delectus ipsum natus est vitae qui tempora facilis. Modi est dolorem vel eos iure autem. Sunt possimus unde eum consequatur.\n \rLaborum error in enim alias consequatur et odit quam enim. Ducimus qui nam quia temporibus praesentium culpa magni. Possimus fuga alias dolor. Nulla quam voluptas perferendis voluptas voluptate ullam voluptas nisi. Alias esse sint voluptas quam.",
            category: "technology",
            createdAt: "2022-01-06T08:28:26.217Z",
            id: "00fa3ef8-0675-4f3e-87c7-1c5c7d3938e2",
            imageUrl: "http://placeimg.com/600/300/technology",
            subtitle: "Facilis autem sit nam aperiam et ratione quidem aperiam consectetur id voluptates doloribus pariatur numquam facere voluptatum voluptas rerum consequuntur.",
            thumbnailUrl: "http://placeimg.com/300/300/technology",
            title: "aut molestiae qui quis exercitationem",
            views: 1310
          },
        index: 1
    }

    const component = render(
        <MemoryRouter initialEntries={[{ pathname: '/' }]}>
        <CardNew noticia={props.noticia} index={props.index} />
      </MemoryRouter>);

    const card = component.container.querySelector('#cardNew')
    expect(card).toBeDefined();

  });



});