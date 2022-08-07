import { describe, expect, it } from "vitest"
import { render } from "../test-utils";
import Category from "../components/Category";

describe("Category", () => {

  it("renderize correctly the category information", () => {
    
    const category = 'tecnology';

    const component = render(<Category category={category}/>)

    const categoryCard = component.container.querySelector('#cardCategory')
    expect(categoryCard).toBeDefined();

  });

  it("renderize correctly the category name ", () => {
    
    const category = 'Enterteinment';

    const component = render(<Category category={category}/>)

    const categoryName = component.container.querySelector('#categoryName')
    expect(categoryName.textContent).toBe(category);

  });
});