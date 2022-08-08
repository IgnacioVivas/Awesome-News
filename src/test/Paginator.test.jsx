import { React } from "react";
import { describe, expect, it } from "vitest";
import { render } from "../test-utils";
import Paginator from "../components/Paginator";

describe("Paginator", () => {

    const props = {
        page: 2,
        totalPages: 18
    };

    it("renderize correctly the paginator component", () => {

        const component = render(<Paginator page={props.page} totalPages={props.totalPages} />);

        const paginator = component.container.querySelector('#paginator');
        expect(paginator).toBeDefined();

    });

    it("renderize correctly the page number", () => {

        const component = render(<Paginator page={props.page} totalPages={props.totalPages} />);

        const paginator = component.container.querySelector('#pageNumber');
        expect(paginator.textContent).toBe(props.page.toString());

    });

});