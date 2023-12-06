import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithTheme } from "../../../../.jest/utils";
import Counter from ".";

function renderCounter(count, setCount = jest.fn()) {
  return renderWithTheme(<Counter count={count} setCount={setCount} />);
}

describe("<Counter />", () => {
  it("should render Counter component", () => {
    const { getByTestId } = renderCounter(0);

    expect(screen.getByRole("button", { name: "menos" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "mais" })).toBeInTheDocument();
    expect(getByTestId("counter")).toBeInTheDocument();
    expect(getByTestId("counter")).toHaveTextContent("0");
  });

  it("should call setCount in decrement function with 0 when counter is 1", async () => {
    const setCountMock = jest.fn();
    renderCounter(1, setCountMock);;

    const decrementButton = screen.getByRole("button", { name: "menos" });
    await userEvent.click(decrementButton);

    expect.assertions(4);
    expect(decrementButton).toBeInTheDocument();
    expect(setCountMock).toHaveBeenCalledTimes(1);
    expect(setCountMock).toHaveBeenCalledWith(expect.any(Function));
    expect(setCountMock.mock.calls[0][0](1)).toBe(0);
  });
  it("shouldn't call 'setCount' in decrement function when counter is 0", async () => {
    const mockFunction = jest.fn();
    renderCounter(0, mockFunction);

    const decrementButton = screen.getByRole("button", { name: "menos" });
    await userEvent.click(decrementButton);

    expect.assertions(2);
    expect(decrementButton).toBeInTheDocument();
    expect(mockFunction).not.toHaveBeenCalled();
  });

  it("should call setCount in increment function with 1 when counter is 0", async () => {
    const setCountMock = jest.fn();
    renderCounter(0, setCountMock);;

    const incrementButton = screen.getByRole("button", { name: "mais" });
    await userEvent.click(incrementButton);

    expect.assertions(4);
    expect(incrementButton).toBeInTheDocument();
    expect(setCountMock).toHaveBeenCalledTimes(1);
    expect(setCountMock).toHaveBeenCalledWith(expect.any(Function));
    expect(setCountMock.mock.calls[0][0](0)).toBe(1);
  });
  
  it("shouldn't call 'setCount' in increment function when counter is 10", async () => {
    const mockFunction = jest.fn();
    renderCounter(10, mockFunction);

    const incrementButton = screen.getByRole("button", { name: "mais" });
    await userEvent.click(incrementButton);

    expect.assertions(2);
    expect(incrementButton).toBeInTheDocument();
    expect(mockFunction).not.toHaveBeenCalled();
  });  
});

describe("<Counter /> snapshots", () => {
  it("should match snapshot", () => {
    const { container } = renderCounter(0);
    expect(container.firstChild).toMatchSnapshot();
  });
});

