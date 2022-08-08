import { React } from "react";
import { MemoryRouter } from 'react-router-dom';
import Header from "../components/Header";
import { fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { render, screen } from "../test-utils";

describe("Simple working test", () => {

  it("the title is visible", () => {
    render(<MemoryRouter initialEntries={[{ pathname: '/awesome-news/' }]}>
      <Header />
    </MemoryRouter>);

    expect(screen.getByText('awesome news')).toBeDefined();
  });

  it('should be marked the recent news link', () => {
    render(<MemoryRouter initialEntries={[{ pathname: '/awesome-news/' }]}>
      <Header />
    </MemoryRouter>);

    const element = screen.getByText('recent news');
    const style = getComputedStyle(element);

    expect(style.color).toBe('black');
  });

  it('should be marked the top rated link', () => {
    render(<MemoryRouter initialEntries={[{ pathname: '/top-rated' }]}>
      <Header />
    </MemoryRouter>);

    const element = screen.getByText('top rated');
    const style = getComputedStyle(element);

    expect(style.color).toBe('black');
  });

  it('should be marked the recent news link', () => {
    render(<MemoryRouter initialEntries={[{ pathname: '/recent-news' }]}>
      <Header />
    </MemoryRouter>);

    const element = screen.getByText('recent news');
    const style = getComputedStyle(element);

    expect(style.color).toBe('black');
  });

  it('should be marked the categories link', () => {
    render(<MemoryRouter initialEntries={[{ pathname: '/categories' }]}>
    <Header />
  </MemoryRouter>);

   const element = screen.getByText('categories');
   const style = getComputedStyle(element);
   
   expect(style.color).toBe('black');
  });

  it('menu behaviour', () => {
    const component = render(<MemoryRouter initialEntries={[{ pathname: '/awesome-news/' }]}>
    <Header/>
  </MemoryRouter>);
   const element = component.container.querySelector('#iconmenu');
   fireEvent.click(element);
   const menu = component.container.querySelector('#menu');
   const style = getComputedStyle(menu);

   expect(style.left).toBe("-1000px");
  });

});