import { renderHook, act } from "@testing-library/react"
import { useMedia } from "../../hooks/useMedia" 

beforeAll(() => {
  window.matchMedia = jest.fn().mockImplementation((query) => {
    if (query === '(max-width: 820px)') {
      return {
        matches: window.innerWidth <= 820,
        media: query,
      };
    }
  });
});

afterAll(() => {
  window.matchMedia.mockRestore();
});

describe("useMedia", () => {

  it("should return false when the window is bigger than media", () => {
    window.innerWidth = 900;
    const { result } = renderHook(() => useMedia("(max-width: 820px)"));
    expect(result.current).toBe(false);
  });

  it("should return true when the window is equal media", () => {
    window.innerWidth = 820;
    const { result } = renderHook(() => useMedia("(max-width: 820px)"));
    expect(result.current).toBe(true);
  });

  it("should return true when the window is smaller than media", () => {
    window.innerWidth = 800;
    const { result } = renderHook(() => useMedia("(max-width: 820px)"));
    expect(result.current).toBe(true);
  });
});